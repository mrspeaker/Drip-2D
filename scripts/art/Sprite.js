var Sprite, SpriteSheet;
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