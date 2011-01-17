var Art, Sprite;
Sprite = (function() {
  function Sprite(imageName, w, h, frames, xOff, yOff, xSpace, ySpace) {
    this.w = w;
    this.h = h;
    this.frames = frames;
    if (xOff == null) {
      xOff = 0;
    }
    if (yOff == null) {
      yOff = 0;
    }
    if (xSpace == null) {
      xSpace = 0;
    }
    if (ySpace == null) {
      ySpace = 0;
    }
    this.image = new Image;
    this.image.src = imageName;
  }
  return Sprite;
})();
Art = {
  init: function() {
    return this.player = new Sprite("resources/galag.png", 24, 20, 8);
  },
  draw: function(ctx, art, x, y, frame) {
    return ctx.drawImage(art.image, frame * art.w, 0, art.w, art.h, x, y, art.w, art.h);
  }
};
Art.init();