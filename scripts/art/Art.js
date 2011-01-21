var Art;
Art = {
  init: function() {
    var galaga;
    galaga = new SpriteSheet("resources/galag.png", 18, 18, 7, 6, 0, 0, 6, 6);
    this.player = new Sprite(galaga, 0, 0);
    this.player_red = new Sprite(galaga, 0, 1);
    this.baddie = new Sprite(galaga, 0, 2);
    return this.baddie2 = new Sprite(galaga, 0, 4);
  },
  draw: function(ctx, art, x, y, frame) {
    return art.draw(ctx, x, y, frame);
  },
  drawText: function(ctx, msg, x, y, options) {
    if (options != null ? options.fillStyle : void 0) {
      ctx.fillStyle = options.fillStyle;
    }
    return ctx.fillText(msg, x, y);
  }
};
Art.init();