describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  });

  it('can land a plane', function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

  it('can allow a plane to take off', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar).not.toContain(plane);
  });
});
