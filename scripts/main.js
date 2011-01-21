/*
    Drip 2D: coffeescript game framework
    by Mr Speaker
*/var main;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
main = {
  rate: 10,
  init: function() {
    console.log("game init");
    this.ctx = document.getElementById("screen").getContext("2d");
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
    if (this.input.pressed(this.input.FIRE)) {
      Events.trigger("keypressed.FIRE", {});
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
    addEventListener("keydown", (__bind(function(e) {
      return this.input.set(e.keyCode, true);
    }, this)), false);
    return addEventListener("keyup", (__bind(function(e) {
      return this.input.set(e.keyCode, false);
    }, this)), false);
  }
};