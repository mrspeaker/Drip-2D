# Drip 2D: CoffeeScript game framework
by Mr Speaker 
(code structure and bits of code liberally borrowed from MetaGun)

(The start of) An extremely simple skeleton to base 2D games. It's
all in CoffeeScript - check the src directory

To run: *open index.html*
Or: [here's a demo](http://mrspeaker.github.com/Drip-2D/)
To update the scripts:

    coffee -w -b -o src/ -c scripts/

I'm working on a better build system to join all the files into 
one (and minify)... but for now you just have to include a 
boat-load of script files in your index.html.

## Next TODOs:

* Generic collision (behaviour/component based?)
* Fix timing loop (+ frame counter etc)
* Load art to canvas and crop
* Anim player