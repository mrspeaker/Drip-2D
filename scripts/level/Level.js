var Level;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
Level = (function() {
  function Level(screen, width, height, spawnX, spawnY) {
    var i, _ref;
    this.screen = screen;
    this.width = width;
    this.height = height;
    this.entities = [];
    this.newEntities = [];
    this.classes = {
      "player": Player,
      "baddie": Baddie
    };
    Events.bind("player.create", function(data) {
      return console.log("Player created");
    });
    Events.bind("entity.make", __bind(function(data) {
      var b, entityClass;
      entityClass = this.classes[data[0]];
      b = new entityClass(data[1], data[2], 20, 20, data[3]);
      return this.add(b);
    }, this));
    Events.trigger("entity.make", ["player", spawnX, spawnY, null]);
    Events.trigger("entity.make", ["player", spawnX + 20, spawnY, null]);
    this.baddieCount = 5;
    for (i = 0, _ref = this.baddieCount - 1; (0 <= _ref ? i <= _ref : i >= _ref); (0 <= _ref ? i += 1 : i -= 1)) {
      Events.trigger("entity.make", ["baddie", 20 * i, 10, i % 2]);
    }
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
    this.entities = aliveEntities;
    if (this.resetGame) {
      main.reset();
      return;
    }
  };
  Level.prototype.add = function(entity) {
    entity.init(this);
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
  Level.prototype.gameOver = function() {
    return this.resetGame = true;
  };
  Level.prototype.kill = function() {
    if (--this.baddieCount === 0) {
      return this.gameOver();
    }
  };
  Level.prototype.getColliding = function(xc, yc, w, h) {
    var e, hits, r, x0, x1, y0, y1, _i, _len, _ref;
    hits = [];
    r = 20;
    x0 = (xc - r) / 10;
    y0 = (yc - r) / 10;
    x1 = (xc + w + r) / 10;
    y1 = (yc + h + r) / 10;
    _ref = this.entities;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      e = _ref[_i];
      if (e.x > xc + w || e.y + e.h > yc + h || e.x + e.w < xc || e.y + e.h < yc) {
        continue;
      }
      hits.push(e);
    }
    /*for (x = x0; x <= x1; x++)
        for (int y = y0; y <= y1; y++) {
            if (x >= 0 && y >= 0 && x < width && y < height) {
                entitiesList = entityMap[x + y * width];
                for (int i = 0; i < entitiesList.length; i++) {
                    Entity e = entitiesList[ i ]
                    xx0 = e.x;
                    yy0 = e.y;
                    xx1 = e.x + e.w;
                    yy1 = e.y + e.h;
                    if (xx0 > xc + w || yy0 > yc + h || xx1 < xc || yy1 < yc) continue;

                    hits.push e
    */
    return hits;
  };
  return Level;
})();