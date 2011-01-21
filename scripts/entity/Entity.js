var Entity, direction;
direction = {
  NONE: -1,
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
};
Entity = (function() {
  function Entity() {}
  Entity.prototype.name = "entity";
  Entity.prototype.x = 0;
  Entity.prototype.y = 0;
  Entity.prototype.w = 10;
  Entity.prototype.h = 10;
  Entity.prototype.dir = direction.NONE;
  Entity.prototype.frame = 0;
  Entity.prototype.removed = false;
  Entity.prototype.init = function(level) {
    this.level = level;
    return Events.trigger(this.name + ".create", {});
  };
  Entity.prototype.tick = function() {
    return Events.trigger(this.name + ".tick", {});
  };
  Entity.prototype.render = function(ctx) {};
  Entity.prototype.remove = function() {
    return this.removed = true;
  };
  return Entity;
})();