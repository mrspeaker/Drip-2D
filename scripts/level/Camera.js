var Camera;
Camera = (function() {
  Camera.prototype.x = 0;
  Camera.prototype.y = 0;
  Camera.prototype.w = 0;
  Camera.prototype.h = 0;
  function Camera(w, h) {
    this.w = w;
    this.h = h;
  }
  return Camera;
})();