module.exports = class TemperatureFormulas {

    static celsiusForFahrenheit(celsius) {

        const fahrenheit = ((celsius * 9) / 5) + 32;
        return Math.ceil(fahrenheit);
    }

    static celsiusForKelvin(celsius) {

        const kelvin = celsius + 273.15;
        return Math.ceil(kelvin);
    }

    static fahrenheitForCelsius(fahrenheit) {

        const celsius = (fahrenheit - 32) * 5 / 9;
        return Math.ceil(celsius);
    }

    static fahrenheitForKelvin(fahrenheit) {

        const kelvin = ((fahrenheit - 32) * 5 / 9) + 273.15;
        return Math.ceil(kelvin);
    }

    static kelvinForCelsius(kelvin) {

        const celsius = kelvin - 273.15;
        return Math.ceil(celsius);
    }

    static kelvinForFahrenheit(kelvin) {

        const fahrenheit = ((kelvin - 273.15) * 9 / 5) + 32;
        return Math.ceil(fahrenheit);
    }
}
