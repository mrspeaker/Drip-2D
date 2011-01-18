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
    this.frame = 0;
    this.speed = 20;
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
    this.x += this.dir;
    return this.frame++;
  };
  Player.prototype.render = function(ctx) {
    if (~~(this.frame / this.speed) % 2 === 0) {
      return Art.draw(ctx, Art.player, this.x, this.y, 7);
    } else {
      return Art.draw(ctx, Art.player_red, this.x, this.y, 7);
    }
  };
  return Player;
})();