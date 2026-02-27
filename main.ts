/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: Feb 2026
 * This program ...
*/

let temperatureInKelvin: number
let temperatureInCelcius: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
    temperatureInCelcius = input.temperature()
    temperatureInKelvin = temperatureInCelcius+273.15

    basic.clearScreen()
    basic.showString("the temperature is:" + temperatureInKelvin + " K.")
})
