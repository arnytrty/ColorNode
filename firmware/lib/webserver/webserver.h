#ifndef webserver_h
#define webserver_h

#define SSID "ESP8266-WIFI"
#define PASSWORD "trtyjede"
#define DNS "esp8266"

/**
 * initialize web server
 */
void webserver_init();

/**
 * start webserver & create softAP
 */
void webserver_start();

/**
 * stop webserver & remove softAP
 */
void webserver_stop();

/**
 * handle clients, should be in loop, disabled internally when start/stop
 */
void webserver_handle();

#endif