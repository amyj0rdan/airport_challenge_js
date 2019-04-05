describe("Airport", function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
    weather = jasmine.createSpyObj('weather', ['isStormy'])
    airport = new Airport({capacity: 2, weather: weather});
  });

  describe('weather is not stormy', function () {

    beforeEach(function() {
      weather.isStormy = jasmine.createSpy().and.returnValue(false);
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

    it('does not allow plane to land when airport is full', function() {
      for (i = 0; i < airport.capacity; i++) {
        airport.land(plane);
      }
      expect( function() { airport.land(plane); }).toThrow(new Error('Airport too full for landing'));
    });
  });

  describe('weather is stormy', function() {
    it('does not allow a plane to take off', function() {
      weather.isStormy = jasmine.createSpy().and.returnValue(false);
      airport.land(plane);
      weather.isStormy = jasmine.createSpy().and.returnValue(true);
      expect( function() { airport.takeOff(plane); }).toThrow(new Error('Too stormy to take off'));
    });

    it('does not allow a plane to land', function() {
      weather.isStormy = jasmine.createSpy().and.returnValue(true);
      expect( function() { airport.land(plane); }).toThrow(new Error('Too stormy to land'));
    });
  });

  it('allows different airports to have different capacities', function() {
    airportWithDiffCapacity = new Airport({capacity:10});
    expect(airportWithDiffCapacity.capacity).toEqual(10);
  });

});
