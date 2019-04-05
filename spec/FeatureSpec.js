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

// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport
// and confirm that it is no longer in the airport

  it('a plane can take off from an airport', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane.airport).not.toContain(airport);
    expect(airport.planes).not.toContain(plane);
  });
});
