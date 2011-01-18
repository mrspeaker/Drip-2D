var PauseScreen;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
PauseScreen = (function() {
  __extends(PauseScreen, Screen);
  function PauseScreen(parent) {
    this.parent = parent;
  }
  PauseScreen.prototype.render = function(ctx) {
    ctx.fillStyle = "rgb(50,50,150)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Art.player.draw(ctx, 100, 100, 7);
    Art.player_red.draw(ctx, 130, 100, 7);
    Art.baddie.draw(ctx, 100, 70, 7);
    Art.baddie.draw(ctx, 130, 70, 6);
    ctx.fillStyle = "#000";
    return Art.drawText(ctx, "PAUSED", 48, 43);
  };
  PauseScreen.prototype.tick = function(input) {
    if (input.pressed(input.ESCAPE)) {
      return this.setScreen(this.parent);
    }
  };
  return PauseScreen;
})();