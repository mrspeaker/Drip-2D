class Baddie extends Entity
    constructor: (@x, @y) ->
        @frame = 0
        @speed = 20

    tick: ->
        @move()
        @fire() if (Math.random() * 1000) < 2

    render: (ctx) -> Art.baddie.draw ctx, @x, @y, ~~(++@frame/@speed) % 2 == `0 ? 6 : 7`
    move: -> if ++@x > @level.width then @x = -@w
    fire: -> @level.add new Bullet ~~(@x + @w / 2 + 3), @y + 15, 0, 1.5
    shot: (bullet) ->
        @remove()
        @level.kill()