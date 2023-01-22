input.onGesture(Gesture.EightG, function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 - - ", 120)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("F F F F F F F F ", 120)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playMelody("C5 C5 B A G - - - ", 120)
})
input.onGesture(Gesture.SixG, function () {
    music.playMelody("C5 C5 C5 C5 C5 - - - ", 120)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        . . . . .
        . # # . .
        # . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("BOK JA SAM MICROBIT")
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("VOLIM VAS")
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        `)
    music.playMelody("C5 C5 C5 - - - - - ", 120)
})
music.playMelody("C5 B A G F E D C ", 120)
music.playMelody("G E B F A D C5 C ", 120)
basic.showString("Hello!")
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
