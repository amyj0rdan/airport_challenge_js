function Plane() {
  this.airport = null;
}

Plane.prototype.land = function(airport) {
  this.airport = airport;
}
