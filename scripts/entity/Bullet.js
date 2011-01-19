var Bullet;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Bullet = (function() {
  __extends(Bullet, Entity);
  function Bullet(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  Bullet.prototype.tick = function() {
    this.move();
    return this.collisions();
  };
  Bullet.prototype.render = function(ctx) {
    ctx.fillStyle = "#0ff";
    return ctx.fillRect(this.x, this.y, 1, 5);
  };
  Bullet.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0 || this.x > this.level.width) {
      this.remove();
    }
    if (this.y < -5 || this.y > this.level.height) {
      return this.remove();
    }
  };
  Bullet.prototype.collisions = function() {
    var e, entities, _i, _len, _results;
    entities = this.level.getColliding(this.x, this.y, 1, 1);
    _results = [];
    for (_i = 0, _len = entities.length; _i < _len; _i++) {
      e = entities[_i];
      if (e === this) {
        continue;
      }
      _results.push((typeof e.shot === "function" ? e.shot(this) : void 0) ? this.remove() : void 0);
    }
    return _results;
  };
  return Bullet;
})();