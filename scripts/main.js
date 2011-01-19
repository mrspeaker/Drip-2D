/*
    Tetris vs Space Invaders
    by Mr Speaker

    Code structure and bits of code liberally borrowed from MetaGun.

    Next TODOs:
        remove zepto
        fix restart bug
        generic collision (behaviour?)
        art cutup proper
        timing loop (+ frame counter)
*/var main;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
main = {
  rate: 10,
  init: function() {
    console.log("game init");
    this.ctx = $("#screen").dom[0].getContext("2d");
    this.bindKeys();
    this.reset();
    return this.run();
  },
  stop: function() {
    return this.running = false;
  },
  start: function() {
    return this.running = true;
  },
  reset: function() {
    console.log(this.screen);
    this.screen = null;
    this.input = null;
    this.input = new Input;
    this.setScreen(new TitleScreen);
    return this.start();
  },
  run: function() {
    if (!this.running) {
      return;
    }
    this.screen.tick(this.input);
    this.input.tick();
    this.screen.render(this.ctx);
    return _.delay((function() {
      return main.run();
    }), this.rate);
  },
  setScreen: function(screen) {
    if (screen != null) {
      screen.removed();
    }
    this.screen = screen;
    return screen.init(this);
  },
  bindKeys: function() {
    $(window).bind("keydown", __bind(function(e) {
      return this.input.set(e.keyCode, true);
    }, this));
    return $(window).bind("keyup", __bind(function(e) {
      return this.input.set(e.keyCode, false);
    }, this));
  }
};