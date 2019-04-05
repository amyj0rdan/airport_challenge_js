describe('Feature Test', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
    weather = new Weather;
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

  it('does not allow a plane to take off when stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.2);
    airport.land(plane);
    Math.random = jasmine.createSpy().and.returnValue(1);
    expect( function() { airport.takeOff(plane); }).toThrow(new Error('Too stormy to take off'));
    expect(airport.hangar).toContain(plane);
  });

// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy

  it('does not allow a plane to land when stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.95);
    expect( function() { airport.land(plane); }).toThrow(new Error('Too stormy to land'));
    expect(airport.hangar).not.toContain(plane);
  });

// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full

  it('does not allow a plane to land when airport is full', function() {
    spyOn(Math, 'random').and.returnValue(0.2);
    for (i = 0; i < airport.capacity; i++) {
      airport.land(plane);
    }
    expect( function() { airport.land(plane); }).toThrow(new Error('Airport too full for landing'));
  });

// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

  it('allows different airports to have different capacities', function() {
    airportWithDiffCapacity = new Airport(10);
    expect(airportWithDiffCapacity.capacity).toEqual(10);
  });
});
