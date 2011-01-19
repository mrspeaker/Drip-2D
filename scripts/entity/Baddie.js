var Baddie;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Baddie = (function() {
  __extends(Baddie, Entity);
  function Baddie(x, y) {
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.speed = 20;
  }
  Baddie.prototype.tick = function() {
    this.move();
    if ((Math.random() * 1000) < 2) {
      return this.fire();
    }
  };
  Baddie.prototype.render = function(ctx) {
    return Art.baddie.draw(ctx, this.x, this.y, ~~(++this.frame / this.speed) % 2 === 0 ? 6 : 7);
  };
  Baddie.prototype.move = function() {
    if (++this.x > this.level.width) {
      return this.x = -this.w;
    }
  };
  Baddie.prototype.fire = function() {
    return this.level.add(new Bullet(~~(this.x + this.w / 2 + 3), this.y + 15, 0, 1.5));
  };
  Baddie.prototype.shot = function(bullet) {
    this.remove();
    return this.level.kill();
  };
  return Baddie;
})();