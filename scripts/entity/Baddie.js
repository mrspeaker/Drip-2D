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
  Baddie.prototype.frame = 0;
  Baddie.prototype.speed = 20;
  function Baddie(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
  }
  Baddie.prototype.tick = function() {
    this.move();
    if ((Math.random() * 1000) < 2) {
      return this.fire();
    }
  };
  Baddie.prototype.render = function(ctx) {
    var art, frame;
    art = this.type === 0 ? Art.baddie : Art.baddie2;
    frame = ~~(++this.frame / this.speed) % 2 === 0 ? 6 : 7;
    return art.draw(ctx, this.x, this.y, frame);
  };
  Baddie.prototype.move = function() {
    if (++this.x > this.level.width) {
      return this.x = -this.w;
    }
  };
  Baddie.prototype.fire = function() {
    return this.level.add(new Bullet(~~(this.x + this.w / 2) - 4, this.y + this.h, 0, 1.5));
  };
  Baddie.prototype.shot = function(bullet) {
    this.remove();
    return this.level.kill();
  };
  return Baddie;
})();