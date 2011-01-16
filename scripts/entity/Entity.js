var Entity;
Entity = (function() {
  function Entity() {}
  Entity.prototype.x = 0;
  Entity.prototype.y = 0;
  Entity.prototype.w = 10;
  Entity.prototype.h = 10;
  Entity.prototype.dir = 0;
  Entity.prototype.removed = false;
  Entity.prototype.init = function(level) {
    this.level = level;
  };
  Entity.prototype.tick = function() {};
  Entity.prototype.render = function(ctx) {};
  return Entity;
})();