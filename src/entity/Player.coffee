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
        ctx.fillStyle = "#ff0"
        ctx.fillRect( @x, @y, @w, @h )