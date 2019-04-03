describe('Feature Test', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
  });

// User story 1
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport

  it('a plane can land in an airport', function() {
    airport.land(plane);
    expect(plane.airport).toEqual(airport);
  });
});
