let stop_time = 0
basic.forever(function () {
    stop_time = randint(0, 5000)
    for (let index = 0; index < 10; index++) {
        basic.pause(stop_time / 10)
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(1000)
            basic.clearScreen()
            continue;
        } else if (input.pinIsPressed(TouchPin.P1)) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(1000)
            basic.clearScreen()
            continue;
        }
    }
    while (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1))) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
