class GameScreen extends Screen
    constructor: ->
        @level = new Level this, 300, 150, 132, 124
        @camera = new Camera @level.width, @level.height

    tick: (input) ->
        if input.pressed input.ESCAPE then @setScreen new PauseScreen this
        @level.tick input

    render: (ctx) ->
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        @level.render ctx, @camera
