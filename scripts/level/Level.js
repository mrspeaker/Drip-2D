var Level;
Level = (function() {
  Level.prototype.entities = [];
  Level.prototype.newEntities = [];
  function Level(screen, spawnX, spawnY) {
    var player;
    this.screen = screen;
    player = new Player(spawnX, spawnY);
    player.init(this);
    this.add(player);
    this.add(new Baddie(10, 10));
    this.add(new Baddie(30, 10));
    this.add(new Baddie(50, 10));
  }
  Level.prototype.tick = function(input) {
    var aliveEntities, e, _i, _j, _len, _len2, _ref, _ref2;
    aliveEntities = [];
    _ref = this.entities;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      e = _ref[_i];
      if (!e.removed) {
        e.tick(input);
        aliveEntities.push(e);
      }
    }
    _ref2 = this.newEntities;
    for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
      e = _ref2[_j];
      aliveEntities.push(e);
    }
    this.newEntities = [];
    return this.entities = aliveEntities;
  };
  Level.prototype.add = function(entity) {
    return this.newEntities.push(entity);
  };
  Level.prototype.render = function(ctx, camera) {
    var e, _i, _len, _ref, _results;
    ctx.translate(-camera.x, -camera.y);
    _ref = this.entities;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      e = _ref[_i];
      _results.push(e.render(ctx, camera));
    }
    return _results;
  };
  return Level;
})();