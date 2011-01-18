class Bullet extends Entity
    constructor: (@x, @y) ->

    render: (ctx) ->
        ctx.fillStyle = "#0ff"
        ctx.fillRect @x, @y, 1, 5
    tick: ->
        @remove() if (@y -= 2) < -5