var Art, Sprite;
Art = {
  init: function() {
    this.player = new Sprite("resources/galag.png", 24, 24, 8, 0, 0);
    this.player_red = new Sprite("resources/galag.png", 24, 24, 8, 0, 1);
    return this.baddie = new Sprite("resources/galag.png", 24, 24, 8, 0, 2);
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
Sprite = (function() {
  function Sprite(imageName, w, h, frames, xOff, yOff, xSpace, ySpace) {
    this.w = w;
    this.h = h;
    this.frames = frames;
    this.xOff = xOff != null ? xOff : 0;
    this.yOff = yOff != null ? yOff : 0;
    if (xSpace == null) {
      xSpace = 0;
    }
    if (ySpace == null) {
      ySpace = 0;
    }
    this.image = new Image;
    this.image.src = imageName;
  }
  Sprite.prototype.draw = function(ctx, x, y, frame) {
    return ctx.drawImage(this.image, frame * this.w, this.yOff * this.h, this.w, this.h, x, y, this.w, this.h);
  };
  return Sprite;
})();
Art.init();