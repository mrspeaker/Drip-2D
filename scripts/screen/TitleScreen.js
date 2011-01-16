var TitleScreen;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
TitleScreen = (function() {
  var time;
  function TitleScreen() {
    TitleScreen.__super__.constructor.apply(this, arguments);
  }
  __extends(TitleScreen, Screen);
  time = 0;
  TitleScreen.prototype.render = function(context) {
    context.fillStyle = "rgb(" + this.rnd() + "," + this.rnd() + "," + this.rnd() + ")";
    return context.fillRect(20, 20, 50, 50);
  };
  TitleScreen.prototype.rnd = function() {
    return ~~(Math.random() * 255);
  };
  TitleScreen.prototype.tick = function(input) {};
  return TitleScreen;
})();