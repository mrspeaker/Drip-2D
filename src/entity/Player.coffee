class Player extends Entity
    constructor: (@x, @y) ->
        @frame = 0
        @speed = 20

    tick: (input) ->
        if input.buttons[input.LEFT]
            @dir = -1
        if input.buttons[input.RIGHT]
            @dir = 1
        if input.buttons[input.UP]
            @dir = 0

        @x += @dir
        @frame++

    render: (ctx) ->
        if ~~(@frame / @speed) % 2 == 0
            Art.draw ctx, Art.player, @x, @y, 7
        else
            Art.draw ctx, Art.player_red, @x, @y, 7