#include <Arduino.h>
#include <FastLED.h>

#include "colorengine.h"

/**
 * Animation Stream struct
 * 
 * @param color final color
 * @param duration number of frames
 * @param length over how much leds will stretch
 * @param faded draw as transition
 */
typedef struct {
    CRGB color;
    unsigned short duration;
    unsigned char length;
    bool faded;
} AnimationStream;


// FastLED buffer & engine buffer & enigne variables
CRGB leds[MAXLEDS];
//AnimationStream stream[MAXFRAMES];
AnimationStream* stream;

unsigned long fpslimit;
unsigned char curstream;

CRGB oldcolor;
unsigned char nowframe;
unsigned char offsetlen;

unsigned char loadedstream;

/**
 * initialize color engine
 */
void colorengine_init() {
    FastLED.addLeds<WS2812B, DATAPIN, GRB>(leds, MAXLEDS);

    loadedstream = 0;
    stream = (AnimationStream*)malloc(sizeof(AnimationStream) * 1);
}

/**
 * load animation
 *
 * @param data TBR animation data
 */
void colorengine_load(String data) {
    loadedstream = 0;
    free(stream);

    int lines = 0;
    for(int i = 0; i < data.length(); i++)
        if(data[i] == '\n')
            lines++;

    stream = (AnimationStream*)malloc(sizeof(AnimationStream) * lines);

    // cycle through lines
    int lastnlchar = 0;
    int nownlchar = data.indexOf("\n", lastnlchar);

    while(nownlchar != -1) {
        String line = data.substring(lastnlchar, nownlchar);
        
        stream[loadedstream].color.r = strtoul(line.substring(0, 2).c_str(), NULL, 16);
        stream[loadedstream].color.g = strtoul(line.substring(2, 4).c_str(), NULL, 16);
        stream[loadedstream].color.b = strtoul(line.substring(4, 6).c_str(), NULL, 16);

        stream[loadedstream].duration = strtoul(line.substring(7, 11).c_str(), NULL, 16) * FPS / 1000;
        stream[loadedstream].length = strtoul(line.substring(12, 14).c_str(), NULL, 16);
        stream[loadedstream].faded = (line[15] == '0') ? false : true;

        if(stream[loadedstream].duration == 0)
            stream[loadedstream].duration = 1;

        if(stream[loadedstream].length > MAXLEDS)
            stream[loadedstream].length = MAXLEDS;

        loadedstream++;

        // get newline
        lastnlchar = nownlchar + 1;
        nownlchar = data.indexOf("\n", lastnlchar);
    }

    colorengine_sync();
}

/**
 * draw to led strip, should be called in loop
 */
void colorengine_draw() {
    unsigned long now = millis();
    // limit fps
    if(now - fpslimit >= (1000 / FPS) && loadedstream != 0) {
        fpslimit = now;

        nowframe++;

        // calculate offset
        int move = (stream[curstream].length * nowframe / stream[curstream].duration) - offsetlen;
        offsetlen += move;

        if(move != 0) {
            // offset
            for(int i = MAXLEDS - 1; i >= move; i--)
                leds[i] = leds[i - move];

            for(int i = 0; i < move; i++) {
                if(stream[curstream].faded) {
                    // faded
                    leds[i].r = oldcolor.r + stream[curstream].color.r * nowframe / stream[curstream].duration - oldcolor.r * nowframe / stream[curstream].duration;
                    leds[i].g = oldcolor.g + stream[curstream].color.g * nowframe / stream[curstream].duration - oldcolor.g * nowframe / stream[curstream].duration;
                    leds[i].b = oldcolor.b + stream[curstream].color.b * nowframe / stream[curstream].duration - oldcolor.b * nowframe / stream[curstream].duration;
                } else {
                    // non faded
                    leds[i] = stream[curstream].color;
                }
            }
        }

        // go next stream
        if(stream[curstream].duration == nowframe) {
            nowframe = 0;
            offsetlen = 0;

            oldcolor = stream[curstream].color;
            curstream = (curstream + 1) % loadedstream;
        }

        FastLED.show();
    }
}

/**
 * set loaded animation at start
 */
void colorengine_sync() {
    fpslimit = 0;
    curstream = 0;

    oldcolor = CRGB::Black;
    nowframe = 0;
    offsetlen = 0;
}