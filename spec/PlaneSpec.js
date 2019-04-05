describe("Plane", function() {

  var plane;

  beforeEach(function() {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['land'])
  });

  it('can land and know what airport it is in', function() {
    plane.land(airport)
    expect(plane.airport).toEqual(airport)
  });

  it('can take off and know that it has left the airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(plane.airport).not.toEqual(airport);
  })
});
