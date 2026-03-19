basic.forever(function () {
    if (input.lightLevel() < 25) {
        basic.showString("ligar")
        radio.sendString("ligar")
    } else {
        basic.showString("desligar")
        radio.sendString("desligar")
    }
})
