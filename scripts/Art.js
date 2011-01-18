var Art, Sprite;
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
  return Sprite;
})();
Art = {
  init: function() {
    this.player = new Sprite("resources/galag.png", 24, 24, 8, 0, 0);
    this.player_red = new Sprite("resources/galag.png", 24, 24, 8, 0, 1);
    return this.baddie = new Sprite("resources/galag.png", 24, 24, 8, 0, 2);
  },
  draw: function(ctx, art, x, y, frame) {
    return ctx.drawImage(art.image, frame * art.w, art.yOff * art.h, art.w, art.h, x, y, art.w, art.h);
  }
};
Art.init();