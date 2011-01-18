class GameScreen extends Screen
    constructor: ->
        @level = new Level this, 132, 124
        @camera = new Camera main.GAME_WIDTH, main.GAME_HEIGHT

    render: (ctx) ->
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        @level.render ctx, @camera

    tick: (input) ->
        if input.pressed input.ESCAPE then @setScreen new PauseScreen this
        @level.tick input