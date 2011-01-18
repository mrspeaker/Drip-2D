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
    this.speed = 10;
  }
  Baddie.prototype.tick = function() {
    this.frame++;
    if (++this.x > 300) {
      return this.x = -this.w;
    }
  };
  Baddie.prototype.render = function(ctx) {
    return Art.draw(ctx, Art.baddie, this.x, this.y, ~~(this.frame / this.speed) % 7);
  };
  return Baddie;
})();