var main;
main = {
  init: function() {
    console.log("game init");
    this.ctx = $("#screen").dom[0].getContext("2d");
    this.setScreen(new TitleScreen);
    return this.run();
  },
  stop: function() {},
  start: function() {},
  run: function() {
    this.screen.render(this.ctx);
    return _.delay((function() {
      return main.run();
    }), 1000);
  },
  setScreen: function(screen) {
    if (screen != null) {
      screen.removed();
    }
    this.screen = screen;
    return screen.init();
  }
};