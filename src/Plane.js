function Plane() {
  this.airport = null;
}

Plane.prototype.land = function(airport) {
  this.airport = airport;
}

Plane.prototype.takeOff = function(airport) {
  this.airport = null;
}
