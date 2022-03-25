basic.forever(function () {
    music.setVolume(255)
    if (input.temperature() > 10) {
        basic.showString("" + (input.temperature()))
        basic.showIcon(IconNames.Square)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    if (input.temperature() < 10) {
        basic.showString("" + (input.temperature()))
        basic.showIcon(IconNames.Chessboard)
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})
