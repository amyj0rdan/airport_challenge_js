describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land'])
  });

  it('can land a plane', function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });
});
