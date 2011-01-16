var Level;
Level = (function() {
  Level.prototype.entities = [];
  Level.prototype.player = null;
  function Level(screen, spawnX, spawnY) {
    this.screen = screen;
    this.player = new Player(spawnX, spawnY);
    this.entities.push(this.player);
  }
  Level.prototype.tick = function(input) {
    if (!this.player.removed) {
      return this.player.tick(input);
    }
  };
  Level.prototype.render = function(ctx) {
    var e, _i, _len, _ref;
    _ref = this.entities;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      e = _ref[_i];
      e.render(ctx);
    }
    return true;
  };
  return Level;
})();