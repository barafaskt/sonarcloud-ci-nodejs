const { TestScheduler } = require('jest');
var temperatureFormulas = require('../app/TemperatureFormulas');

test('adds 45 degrees celius to be 113 degrees fahrenheit', () => {
    expect(temperatureFormulas.celsiusForFahrenheit(45)).toBe(113);
});

test('adds 32 degrees celius to be 306 degrees kelvin', () => {
    expect(temperatureFormulas.celsiusForKelvin(32)).toBe(306);
});

test('adds 119 degrees fahrenheit to be 49 degrees celsius', () => {
   expect(Math.ceil(temperatureFormulas.fahrenheitForCelsius(119))).toBe(49);
});

test('adds 143 degrees fahrenheit to be 335 degrees kelvin', () => {
    expect(temperatureFormulas.fahrenheitForKelvin(143)).toBe(335);
});

test('adds 418 degrees kelvin to be 144.85 degrees celsius', () => {
    expect(temperatureFormulas.kelvinForCelsius(418)).toBe(145);
});

test('adds 533 degrees kelvin to be 500 degrees fahrenheit', () => {
    expect(temperatureFormulas.kelvinForFahrenheit(533)).toBe(500);
});