class Baddie extends Entity
    name: "baddie"
    frame: 0
    speed: 20
    constructor: (@x, @y, @w, @h, @art) ->

    tick: ->
        @move()
        @fire() if (Math.random() * 1000) < 2
        super

    render: (ctx) ->
        art = if @art == 0 then Art.baddie else Art.baddie2
        frame = ~~(++@frame/@speed) % 2 == `0 ? 6 : 7`
        art.draw ctx, @x, @y, frame

    move: -> if ++@x > @level.width then @x = -@w
    fire: -> @level.add new Bullet ~~(@x + @w / 2) - 4, @y + @h, 0, 1.5
    shot: (bullet) ->
        @remove()
        @level.kill()