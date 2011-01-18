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
  function Bullet(x, y) {
    this.x = x;
    this.y = y;
  }
  Bullet.prototype.render = function(ctx) {
    ctx.fillStyle = "#0ff";
    return ctx.fillRect(this.x, this.y, 1, 5);
  };
  Bullet.prototype.tick = function() {
    if ((this.y -= 2) < -5) {
      return this.remove();
    }
  };
  return Bullet;
})();