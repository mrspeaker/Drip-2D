var Art, Sprite, SpriteSheet;
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
SpriteSheet = (function() {
  function SpriteSheet(imageName, w, h, framesX, framesY, xOff, yOff, xSpace, ySpace) {
    this.w = w;
    this.h = h;
    this.framesX = framesX;
    this.framesY = framesY;
    this.xOff = xOff;
    this.yOff = yOff;
    this.xSpace = xSpace;
    this.ySpace = ySpace;
    this.image = new Image;
    this.image.src = imageName;
  }
  return SpriteSheet;
})();
Sprite = (function() {
  function Sprite(ss, startXFrame, startYFrame) {
    this.startXFrame = startXFrame;
    this.image = ss.image;
    this.w = ss.w;
    this.h = ss.h;
    this.xOff = ss.xOff;
    this.yOff = ss.yOff;
    this.xOffset = this.w + ss.xSpace;
    this.yOffset = startYFrame * (this.h + ss.ySpace);
  }
  Sprite.prototype.draw = function(ctx, x, y, frame) {
    return ctx.drawImage(this.image, (frame + this.startXFrame) * this.xOffset + this.xOff, this.yOffset + this.yOff, this.w, this.h, x, y, this.w, this.h);
  };
  return Sprite;
})();
Art.init();