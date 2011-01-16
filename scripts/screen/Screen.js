var Screen;
Screen = (function() {
  function Screen(game) {
    this.game = game;
  }
  Screen.prototype.init = function() {
    return console.log('new Screen');
  };
  Screen.prototype.removed = function() {};
  Screen.prototype.setScreen = function(screen) {
    return this.game.setScreen(screen);
  };
  Screen.prototype.render = function(context) {};
  Screen.prototype.tick = function(input) {};
  return Screen;
})();