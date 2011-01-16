var Level;
Level = (function() {
  Level.prototype.entities = [];
  function Level(screen) {
    this.screen = screen;
  }
  Level.prototype.tick = function() {};
  Level.prototype.render = function(ctx) {};
  return Level;
})();