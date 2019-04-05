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
    spyOn(Math, 'random').and.returnValue(0.5);
    airport.land(plane);
    expect(plane.airport).toEqual(airport);
  });

// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport
// and confirm that it is no longer in the airport

  it('a plane can take off from an airport', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane.airport).not.toContain(airport);
    expect(airport.hangar).not.toContain(plane);
  });

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

  it('does not allow a plane to land when stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.2);
    airport.land(plane);
    Math.random = jasmine.createSpy().and.returnValue(1);
    expect( function() { airport.takeOff(plane); }).toThrow(new Error('Too stormy to take off'));
    expect(airport.hangar).toContain(plane);
  });
});
