class PauseScreen extends Screen
    constructor: (@parent) ->

    render: (ctx) ->
        ctx.fillStyle = "rgb(50,50,150)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height

        Art.player.draw ctx, 100, 100, 7
        Art.player_red.draw ctx, 130, 100, 7
        Art.baddie.draw ctx, 100, 70, 7
        Art.baddie.draw ctx, 130, 70, 6

        ctx.fillStyle = "#000"
        Art.drawText ctx, "PAUSED", 48, 43

    tick: (input) ->
        if input.pressed input.ESCAPE then @setScreen @parent