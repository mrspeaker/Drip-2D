var Player;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Player = (function() {
  __extends(Player, Entity);
  function Player(x, y) {
    this.x = x;
    this.y = y;
  }
  Player.prototype.tick = function(input) {
    if (input.buttons[input.LEFT]) {
      this.dir = -1;
    }
    if (input.buttons[input.RIGHT]) {
      this.dir = 1;
    }
    if (input.buttons[input.UP]) {
      this.dir = 0;
    }
    return this.x += this.dir;
  };
  Player.prototype.render = function(ctx) {
    ctx.fillStyle = "#ff0";
    return ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  return Player;
})();