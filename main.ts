input.onButtonPressed(Button.A, function () {
    for (let Index = 0; Index <= 9; Index++) {
        basic.showNumber(9 - Index)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let Index = 0; Index <= 4; Index++) {
        basic.showNumber(Index + (1 + Index))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Index = 0; Index <= 5; Index++) {
        basic.showNumber(2 * Index)
    }
})
basic.forever(function () {
	
})
