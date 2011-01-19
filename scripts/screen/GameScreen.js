var GameScreen;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
GameScreen = (function() {
  __extends(GameScreen, Screen);
  function GameScreen() {
    this.level = new Level(this, 300, 150, 132, 124);
    this.camera = new Camera(this.level.width, this.level.height);
  }
  GameScreen.prototype.tick = function(input) {
    if (input.pressed(input.ESCAPE)) {
      this.setScreen(new PauseScreen(this));
    }
    return this.level.tick(input);
  };
  GameScreen.prototype.render = function(ctx) {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return this.level.render(ctx, this.camera);
  };
  return GameScreen;
})();