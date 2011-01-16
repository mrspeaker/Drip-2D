var Input;
Input = (function() {
  Input.prototype.UP = 0;
  Input.prototype.DOWN = 1;
  Input.prototype.LEFT = 2;
  Input.prototype.RIGHT = 3;
  Input.prototype.FIRE = 4;
  Input.prototype.ROTATE = 5;
  Input.prototype.ESCAPE = 6;
  Input.prototype.buttons = [false, false, false, false, false, false];
  Input.prototype.oldButtons = [false, false, false, false, false, false];
  function Input() {
    console.debug("new Input");
  }
  Input.prototype.set = function(key, blnDown) {
    var button;
    switch (key) {
      case 37:
        button = this.LEFT;
        break;
      case 38:
        button = this.UP;
        break;
      case 39:
        button = this.RIGHT;
        break;
      case 40:
        button = this.DOWN;
        break;
      case 32:
        button = this.FIRE;
        break;
      case 90:
        button = this.ROTATE;
        break;
      case 27:
        button = this.ESCAPE;
        break;
      default:
        button = -1;
    }
    if (button > 0) {
      return this.buttons[button] = blnDown;
    }
  };
  Input.prototype.tick = function() {
    return this.oldButtons = _.clone(this.buttons);
  };
  Input.prototype.releaseAllKeys = function() {
    return this.buttons = [false, false, false, false, false, false];
  };
  return Input;
})();