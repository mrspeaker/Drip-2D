class Baddie extends Entity
    constructor: (@x, @y) ->
        @frame = 0
        @speed = 20

    tick: ->
        @frame++
        if ++@x > 300 then @x = -@w

    render: (ctx) ->
        Art.baddie.draw, @x, @y, if ~~(@frame/@speed) % 2 == 0 then 6 else 7