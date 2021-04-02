#ifndef touch_h
#define touch_h

#define TOUCHPIN D5 // D2 // input pin (D5)
#define DOUBLECLICK 300 // time in witch second click occurs, will be detected as doubleclick
#define SHORTHOLD 800 // minimal length when shorthold is detected
#define LONGHOLD 3000 // minimal length when longhold is detected

/**
 * initialize touch sensor on specific pin
 */
void touch_init();

/**
 * check for events, should run in loop
 */
void touch_check();

/**
 * setup callback for click
 * 
 * @param callback callback function onclick
 */
void touch_callback_click(void (*callback)());

/**
 * setup callback for doubleclickclick
 * 
 * @param callback callback function ondoubleclick
 */
void touch_callback_doubleclick(void (*callback)());

/**
 * setup callback for shorthold
 * 
 * @param callback callback function onshorthold
 */
void touch_callback_shorthold(void (*callback)());

/**
 * setup callback for longhold
 * 
 * @param callback callback function onlonghold
 */
void touch_callback_longhold(void (*callback)());

#endif