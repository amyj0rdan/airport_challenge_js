function Airport(weather = new Weather) {
  this.hangar = [];
  this.weather = weather;
}

Airport.prototype = {

  constructor: Airport,

  land: function(plane) {
    if (this.weather.isStormy()) {
      throw new Error('Too stormy to land');
    } else {
      this.hangar.push(plane);
      plane.land(this);
    }
  },

  takeOff: function(plane) {
    if (this.weather.isStormy()) {
      throw new Error('Too stormy to take off');
    } else {
      this.hangar.splice( this.hangar.indexOf(plane), 1);
      plane.takeOff();
    }
  },

  isStormy: function() {
    if (this.weather.isStormy()) {
      return true;
    } else {
      return false;
    };
  },
}
