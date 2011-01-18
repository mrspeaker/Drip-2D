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
  Player.prototype.frame = 0;
  Player.prototype.speed = 20;
  Player.prototype.fired = 0;
  function Player(x, y) {
    this.x = x;
    this.y = y;
  }
  Player.prototype.tick = function(input) {
    if (input.buttons[input.LEFT]) {
      this.dir = -1.5;
    }
    if (input.buttons[input.RIGHT]) {
      this.dir = 1.5;
    }
    if (input.buttons[input.UP]) {
      this.dir = 0;
    }
    this.x += this.dir;
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > 280) {
      this.x = 280;
    }
    this.fired--;
    if (input.pressed(input.FIRE)) {
      this.fired = 10;
      this.level.add(new Bullet(~~(this.x + this.w / 2 + 3), this.y - 5));
    }
    return this.frame++;
  };
  Player.prototype.render = function(ctx) {
    return [Art.player, Art.player_red][this.fired > 0 ? 1 : 0].draw(ctx, ~~this.x, this.y, 7);
  };
  return Player;
})();