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
    ctx.fillStyle = "rgb(250,250,250)";
    return ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
  PauseScreen.prototype.tick = function(input) {
    if (input.buttons[input.ESCAPE] && !input.oldButtons[input.ESCAPE]) {
      return this.setScreen(this.parent);
    }
  };
  return PauseScreen;
})();