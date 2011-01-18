class Baddie extends Entity
    constructor: (@x, @y) ->
        @frame = 0
        @speed = 10
    
    tick: ->
        @frame++
        if ++@x > 300 then @x = -@w

    render: (ctx) ->
        Art.draw ctx, Art.baddie, @x, @y, ~~(@frame/@speed) % 7