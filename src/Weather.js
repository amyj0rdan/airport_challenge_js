function Weather() {
  this.RATIO_OF_STORMINESS = 0.9;
}

Weather.prototype.isStormy = function() {
  if (Math.random() >= this.RATIO_OF_STORMINESS) {
    return true;
  } else {
    return false;
  }
}
