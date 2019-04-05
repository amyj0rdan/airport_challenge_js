describe("Airport", function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
    weather = jasmine.createSpyObj('weather', ['isStormy'])
    airport = new Airport(weather);
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
  });

  describe('weather is stormy', function() {
    it('does not allow a plane to take off', function() {
      weather.isStormy = jasmine.createSpy().and.returnValue(false);
      airport.land(plane);
      weather.isStormy = jasmine.createSpy().and.returnValue(true);
      expect( function() { airport.takeOff(plane); }).toThrow(new Error('Too stormy to take off'));
    });
  });

});
