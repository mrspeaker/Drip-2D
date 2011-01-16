class Baddie extends Entity
    constructor: (@x, @y) ->
        
    render: (ctx) ->
        ctx.fillStyle = "#f0f"
        ctx.fillRect( @x, @y, @w, @h )