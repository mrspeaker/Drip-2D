class Baddie extends Entity
    constructor: (@x, @y) ->
    
    tick: ->
        if Math.random() * 10 < 1
            @x++

    render: (ctx) ->
        ctx.fillStyle = "#f0f"
        ctx.fillRect @x, @y, @w, @h