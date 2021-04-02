#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <LittleFS.h>

#include "webserver.h"

// server veriables & running variable
ESP8266WebServer server(80);
bool webserver_running = false;

// custom request handler class to take from filesystem (data folder)
class FSHandler : public RequestHandler {
    public:
        bool canHandle(HTTPMethod method, String uri) override {
            if (method != HTTP_GET) {
                return false;
            }

            return true;
        }

        bool handle(ESP8266WebServer& server, HTTPMethod requestMethod, String requestUri) override {
            if (!canHandle(requestMethod, requestUri)) { 
                return false;
            }

            if(requestUri.equals("/CLOSE")) {
                server.send(200, "text/plain", "");
                webserver_stop();

                return true;
            }

            if(requestUri.substring(0, requestUri.indexOf("@")).equals("/CONFIG")) {
                // write or read config
                String file = requestUri.substring(requestUri.indexOf("@") + 1, requestUri.lastIndexOf("@"));
                String data = requestUri.substring(requestUri.lastIndexOf("@") + 1);
                data.replace("_", " ");
                data.replace("-", "\n");

                if(data.equals("")) {
                    // check if exists & read
                    if(LittleFS.exists("/configs/" + file + ".conf")) {
                        File f = LittleFS.open("/configs/" + file + ".conf", "r");
                        server.send(200, "text/plain", f.readString());
                        f.close();
                    } else {
                        server.send(404, "text/plain", "");
                    }
                } else {
                    // write
                    File f = LittleFS.open("/configs/" + file + ".conf", "w");
                    f.write(data.c_str());
                    server.send(200, "text/plain", "");
                    f.close();
                }

                return true;
            }

            // if search is folder, search for index inside
            if(requestUri.endsWith("/"))
                requestUri += "index.html";

            if(requestUri.indexOf(".") == -1)
                requestUri += "/index.html";

            if(LittleFS.exists("/webserver" + requestUri)) {
                File f = LittleFS.open("/webserver" + requestUri, "r");

                // determine type
                String fname = f.name();
                String fextension = fname.substring(fname.lastIndexOf("."));
                String rtype = "text/";

                if(fextension.equals(".html")) {
                    rtype += "html";
                } else if(fextension.equals(".js")) {
                    rtype += "javascript";
                } else if(fextension.equals(".css")) {
                    rtype += "css";
                } else {
                    rtype += "plain";
                }

                // send
                server.send(200, rtype, f.readString());
                f.close();
            } else {
                // file not exist
                server.send(404, "text/plain", "");
            }

            return true;
        } 
};

/**
 * initialize web server
 */
void webserver_init() {
    server.addHandler(new FSHandler);
    WiFi.softAPdisconnect(true);
}

/**
 * start webserver & create softAP
 */
void webserver_start() {
    webserver_running = true;

    WiFi.softAP(SSID, PASSWORD);
    MDNS.begin(DNS);
    server.begin();
}

/**
 * stop webserver & remove softAP
 */
void webserver_stop() {
    webserver_running = false;

    server.close();
    MDNS.close();
    WiFi.softAPdisconnect(true);
}

/**
 * handle clients, should be in loop, disabled internally when start/stop
 */
void webserver_handle() {
    if(webserver_running) {
        server.handleClient();
    }
}