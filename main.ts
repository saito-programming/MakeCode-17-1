input.onGesture(Gesture.TiltRight, function () {
    文字列の配列.push("右")
})
input.onButtonPressed(Button.A, function () {
    for (let 値 of 文字列の配列) {
        if (値 == "左") {
            basic.showArrow(ArrowNames.West)
        } else if (値 == "右") {
            basic.showArrow(ArrowNames.East)
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    文字列の配列 = []
})
input.onGesture(Gesture.TiltLeft, function () {
    文字列の配列.push("左")
})
let 文字列の配列: string[] = []
文字列の配列 = []
