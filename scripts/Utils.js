var Events;
Events = {
  events: {},
  bind: function(type, func) {
    var _base;
    (_base = this.events)[type] || (_base[type] = []);
    return this.events[type].push(func);
  },
  trigger: function(event, data) {
    var func, _i, _len, _ref;
    _ref = this.events[event] || [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      func = _ref[_i];
      func(data);
    }
    return null;
  }
};