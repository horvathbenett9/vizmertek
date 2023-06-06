let y = 0
let x = 0
let s = game.createSprite(2, 2)
basic.forever(function () {
    x = Math.map(input.acceleration(Dimension.X), -150, 150, 0, 4)
    y = Math.map(input.acceleration(Dimension.Y), -150, 150, 0, 4)
    s.set(LedSpriteProperty.X, x)
    s.set(LedSpriteProperty.Y, y)
    if (x == 2 && y == 2) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.pause(200)
    }
    if (s.isTouchingEdge()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 2422, 0, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
    basic.pause(200)
    basic.clearScreen()
})
