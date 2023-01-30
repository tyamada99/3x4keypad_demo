let key = ""
let 表示 = ""
function keypad () {
    key = ""
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    while (key == "") {
        pins.digitalWritePin(DigitalPin.P16, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            key = "1"
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            key = "2"
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            key = "3"
        } else {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 1)
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                key = "4"
            } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                key = "5"
            } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                key = "6"
            } else {
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P14, 1)
                if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                    key = "7"
                } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    key = "8"
                } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    key = "9"
                } else {
                    pins.digitalWritePin(DigitalPin.P14, 0)
                    pins.digitalWritePin(DigitalPin.P13, 1)
                    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                        key = "*"
                    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                        key = "0"
                    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                        key = "#"
                    } else {
                        pins.digitalWritePin(DigitalPin.P13, 0)
                    }
                }
            }
        }
        basic.pause(10)
    }
    return key
}
basic.forever(function () {
    表示 = keypad()
    basic.showString("" + (表示))
    led.toggle(0, 0)
})
