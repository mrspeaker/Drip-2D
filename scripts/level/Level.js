var Level;
Level = (function() {
  Level.prototype.entities = [];
  Level.prototype.player = null;
  function Level(screen, spawnX, spawnY) {
    this.screen = screen;
    this.player = new Player(spawnX, spawnY);
    this.baddie = new Baddie(10, 10);
    this.entities.push(this.player);
    this.entities.push(this.baddie);
  }
  Level.prototype.tick = function(input) {
    if (!this.player.removed) {
      return this.player.tick(input);
    }
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