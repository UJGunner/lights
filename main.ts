wuKong.setLightMode(wuKong.LightMode.BREATH)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
strip.show()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    strip.rotate(1)
})
