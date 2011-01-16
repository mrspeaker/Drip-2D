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
  TitleScreen.prototype.minLength = 3;
  TitleScreen.prototype.render = function(ctx) {
    ctx.fillStyle = "rgb(" + (this.rnd()) + "," + (this.rnd()) + "," + (this.rnd()) + ")";
    return ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
  TitleScreen.prototype.rnd = function() {
    return ~~(Math.random() * 255);
  };
  TitleScreen.prototype.tick = function(input) {
    if (++this.time < this.minLength) {
      return;
    }
    if (input.buttons[input.FIRE] && !input.oldButtons[input.FIRE]) {
      console.log("selected start from TitleScreen");
      this.setScreen(new GameScreen);
      return input.releaseAllKeys();
    }
  };
  return TitleScreen;
})();