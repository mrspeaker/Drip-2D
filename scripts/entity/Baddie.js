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
  }
  Baddie.prototype.tick = function() {
    if (Math.random() * 10 < 1) {
      return this.x++;
    }
  };
  Baddie.prototype.render = function(ctx) {
    ctx.fillStyle = "#f0f";
    return ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  return Baddie;
})();