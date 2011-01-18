var TitleScreen;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
TitleScreen = (function() {
  function TitleScreen() {
    TitleScreen.__super__.constructor.apply(this, arguments);
  }
  __extends(TitleScreen, Screen);
  TitleScreen.prototype.time = 0;
  TitleScreen.prototype.minLength = 1;
  TitleScreen.prototype.render = function(ctx) {
    if (Math.random() < 0.05) {
      return this.drawSplash(ctx);
    }
  };
  TitleScreen.prototype.drawSplash = function(ctx) {
    ctx.fillStyle = "rgb(" + (this.rnd()) + "," + (this.rnd()) + "," + (this.rnd()) + ")";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("CoffeeScript Engine v0.1", 30, 43);
    ctx.fillText("space to fire/start", 30, 83);
    ctx.fillText("cursor to move, up to stop", 30, 103);
    return ctx.fillText("esc to pause", 30, 123);
  };
  TitleScreen.prototype.rnd = function() {
    return ~~(Math.random() * 255);
  };
  TitleScreen.prototype.tick = function(input) {
    if (++this.time < this.minLength) {
      return;
    }
    if (input.pressed(input.FIRE)) {
      console.log("selected start from TitleScreen");
      this.setScreen(new GameScreen);
      return input.releaseAllKeys();
    }
  };
  return TitleScreen;
})();