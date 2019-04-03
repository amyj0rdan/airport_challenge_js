describe("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  it('has a method #land', function() {
    expect(airport.land).toBeDefined()
  });
});
