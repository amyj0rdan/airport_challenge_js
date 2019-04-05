describe("Weather", function() {

  var weather;

  beforeEach(function() {
    weather = new Weather;
  });

  it('is stormy for 10% of the time', function() {
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toEqual(true);
  });

  it('is not stormy for 90% of the time', function() {
    spyOn(Math, 'random').and.returnValue(0.6);
    expect(weather.isStormy()).toEqual(false);
  });
})
