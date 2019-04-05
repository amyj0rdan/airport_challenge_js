function Airport(capacity = 2, weather = new Weather) {
  this.hangar = [];
  this.weather = weather;
  this.capacity = capacity;
}

Airport.prototype = {

  constructor: Airport,

  land: function(plane) {
    if (this.weather.isStormy()) {
      throw new Error('Too stormy to land');
    } else if (this.isFull()) {
      throw new Error('Airport too full for landing');
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

  isFull: function() {
    if (this.hangar.length >= this.capacity) {
      return true;
    } else {
      return false;
    };
  },
}
