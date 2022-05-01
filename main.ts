radio.setGroup(147)
basic.showIcon(IconNames.Target)
let engine = false
loops.everyInterval(500, function () {
    if (engine == false) {
        basic.showIcon(IconNames.No)
        led.stopAnimation()
    }
})
loops.everyInterval(500, function () {
    if (engine == true) {
        basic.showIcon(IconNames.Yes)
        led.stopAnimation()
    }
})
basic.forever(function () {
    radio.sendValue("mgX", input.acceleration(Dimension.X))
    radio.sendValue("mgY", input.acceleration(Dimension.Y))
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        if (engine == false) {
            radio.sendValue("engine", 1)
            engine = true
        } else if (engine == true) {
            radio.sendValue("engine", 0)
            engine = false
        }
    }
})
