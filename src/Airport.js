function Airport() {
  this.hangar = []
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
  plane.land(this);
}

Airport.prototype.takeOff = function(plane) {
  this.hangar.splice( this.hangar.indexOf(plane), 1);
  plane.takeOff();
}
