function Plane() {
  this.airport = null;
}

Plane.prototype = {

  constructor: Plane,

  land: function(airport) {
    this.airport = airport;
  },

  takeOff: function(airport) {
    this.airport = null;
  },
}
