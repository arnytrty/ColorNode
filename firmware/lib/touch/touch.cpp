#include <Arduino.h>

#include "touch.h"

// calculation variables
int holdtime = 0;
int lasttime = 0;

// callback variables
void (*callback_click)() = NULL;
void (*callback_doubleclick)() = NULL;
void (*callback_shorthold)() = NULL;
void (*callback_longhold)() = NULL;

/**
 * initialize touch sensor on specific pin
 */
void touch_init() {
    pinMode(TOUCHPIN, INPUT_PULLUP);
}

/**
 * check for events, should run in loop
 */
void touch_check() {
    if(digitalRead(TOUCHPIN)) {
        if(holdtime == 0)
            holdtime = millis();
    } else {
        if(millis() - lasttime > DOUBLECLICK && lasttime != 0) { // check lasttime when was click
            lasttime = 0;

            if(callback_click != NULL) // click callback
                    callback_click();
        }

        if(holdtime != 0) {
            int now = millis() - holdtime;
            holdtime = 0;

            if(now >= LONGHOLD) {
                if(callback_longhold != NULL) // longhold callback
                    callback_longhold();
            } else if(now >= SHORTHOLD) {
                if(callback_shorthold != NULL) // shorthold callback
                    callback_shorthold();
            } else {
                if(lasttime == 0) {
                    lasttime = millis();
                } else {
                    lasttime = 0;

                    if(callback_doubleclick != NULL) // doubleclick callback
                        callback_doubleclick();
                }
            }
        }
    }
}

/**
 * setup callback for click
 * 
 * @param callback callback function onclick
 */
void touch_callback_click(void (*callback)()) {
    callback_click = callback;
}

/**
 * setup callback for doubleclickclick
 * 
 * @param callback callback function ondoubleclick
 */
void touch_callback_doubleclick(void (*callback)()) {
    callback_doubleclick = callback;
}

/**
 * setup callback for shorthold
 * 
 * @param callback callback function onshorthold
 */
void touch_callback_shorthold(void (*callback)()) {
    callback_shorthold = callback;
}

/**
 * setup callback for longhold
 * 
 * @param callback callback function onlonghold
 */
void touch_callback_longhold(void (*callback)()) {
    callback_longhold = callback;
}