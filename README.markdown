# Drip 2D: CoffeeScript game framework
by Mr Speaker 
and code structure and bits of code liberally borrowed from MetaGun

(The start of) An extremely simple skeleton to base 2D games

To run: *open index.html*
To update the scripts: *coffee -w -b -o src/ -c scripts/*

I'm working on a better build system to join all the files into 
one (and minify)... but for now you just have to include a 
boat-load of script files in your index.html.

## Next TODOs:

* Generic collision (behaviour/component based?)
* Fix timing loop (+ frame counter etc)
* Load art to canvas and crop