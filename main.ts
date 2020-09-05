input.onButtonPressed(Button.A, function () {
    Counter_A += 1
    basic.showNumber(Counter_A)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Counter_A = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Counter_A)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let Counter_A = 0
Counter_A = 0
