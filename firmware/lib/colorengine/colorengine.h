#ifndef colorengine_h
#define colorengine_h

#define DATAPIN D6 // D1 // data pin of rgb strip (D6, D7)
#define FPS 60 // frames per second (how ofter render & update animation)
#define MAXLEDS 128 // maximum leds on rgb strips
#define MAXFRAMES 256 // maximum amount of animation frames

/**
 * initialize color engine
 */
void colorengine_init();

/**
 * load animation
 *
 * @param data TBR animation data
 */
void colorengine_load(String data);

/**
 * draw to led strip, should be called in loop
 */
void colorengine_draw();

/**
 * set loaded animation at start
 */
void colorengine_sync();

#endif