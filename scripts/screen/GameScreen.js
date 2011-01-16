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
  function GameScreen() {
    GameScreen.__super__.constructor.apply(this, arguments);
  }
  __extends(GameScreen, Screen);
  GameScreen.prototype.render = function(ctx) {
    ctx.fillStyle = "rgb(0,0,0)";
    return ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
  return GameScreen;
})();