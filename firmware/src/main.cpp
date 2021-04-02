#include <Arduino.h>
#include <LittleFS.h>

#include "touch.h"
#include "colorengine.h"
#include "webserver.h"

void click() {
    File f = LittleFS.open("/configs/click.conf", "r");
    colorengine_load(f.readString());
    f.close();
}

void doubleclick() {
    File f = LittleFS.open("/configs/doubleclick.conf", "r");
    colorengine_load(f.readString());
    f.close();
}

void shorthold() {
    File f = LittleFS.open("/configs/hold.conf", "r");
    colorengine_load(f.readString());
    f.close();
}

void longhold() {
    webserver_start();
}

void setup() {
    // init filesystem
    LittleFS.begin();

    // touch init
    touch_callback_click(click);
    touch_callback_doubleclick(doubleclick);
    touch_callback_shorthold(shorthold);
    touch_callback_longhold(longhold);

    touch_init();

    // colorengine init
    colorengine_init();

    // webserver init
    webserver_init();
}

void loop() {
    // main loop
    touch_check();
    colorengine_draw();
    webserver_handle();
}