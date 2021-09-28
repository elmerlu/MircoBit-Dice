input.onButtonPressed(Button.A, function () {
    if (!(lock)) {
        lock = true
        tmp = randint(1, 6)
        if (tmp == 1) {
            basic.showIcon(IconNames.Heart)
        } else if (tmp == 2) {
            basic.showIcon(IconNames.Happy)
        } else if (tmp == 3) {
            basic.showIcon(IconNames.StickFigure)
        } else if (tmp == 4) {
            basic.showIcon(IconNames.Umbrella)
        } else if (tmp == 5) {
            basic.showIcon(IconNames.EigthNote)
        } else {
            basic.showIcon(IconNames.Giraffe)
        }
        basic.pause(3000)
        basic.clearScreen()
        lock = false
    }
})
input.onGesture(Gesture.Shake, function () {
    if (!(lock)) {
        lock = true
        basic.showNumber(randint(1, 6))
        basic.pause(3000)
        basic.clearScreen()
        lock = false
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(lock)) {
        lock = true
        tmp = randint(1, 6)
        if (tmp == 1) {
            basic.showArrow(ArrowNames.North)
        } else if (tmp == 2) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (tmp == 3) {
            basic.showArrow(ArrowNames.East)
        } else if (tmp == 4) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (tmp == 5) {
            basic.showArrow(ArrowNames.South)
        } else if (tmp == 6) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (tmp == 7) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showArrow(ArrowNames.NorthWest)
        }
        basic.pause(3000)
        basic.clearScreen()
        lock = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(lock)) {
        lock = true
        if (Math.randomBoolean()) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
        basic.pause(3000)
        basic.clearScreen()
        lock = false
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (!(lock)) {
        lock = true
        tmp = randint(1, 4)
        if (tmp == 1) {
            soundExpression.mysterious.playUntilDone()
        } else if (tmp == 2) {
            soundExpression.spring.playUntilDone()
        } else if (tmp == 3) {
            soundExpression.slide.playUntilDone()
        } else {
            music.playMelody("G E E - F D D - ", 120)
        }
        lock = false
    }
})
let tmp = 0
let lock = false
lock = false
basic.showString("Dice!")
input.setSoundThreshold(SoundThreshold.Loud, 120)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(180)
basic.forever(function () {
    serial.writeString("Light:")
    serial.writeLine("" + (input.lightLevel()))
    serial.writeString("Sound:")
    serial.writeLine("" + (input.soundLevel()))
    basic.pause(500)
})
