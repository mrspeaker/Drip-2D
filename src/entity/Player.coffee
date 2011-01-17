class Player extends Entity
    constructor: (@x, @y) ->
        
    tick: (input) ->
        if input.buttons[input.LEFT]
            @dir = -1
        if input.buttons[input.RIGHT]
            @dir = 1
        if input.buttons[input.UP]
            @dir = 0

        @x += @dir

    render: (ctx) ->
        Art.draw ctx, Art.player, @x, @y, 6