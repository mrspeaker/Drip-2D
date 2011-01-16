class GameScreen extends Screen
    constructor: ->
        @level = new Level this, 132, 134
        @camera = new Camera main.GAME_WIDTH, main.GAME_HEIGHT

    render: (ctx) ->
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        @level.render ctx, @camera

    tick: (input) ->
        if input.buttons[input.ESCAPE] and !input.oldButtons[input.ESCAPE]    
            @setScreen new PauseScreen this
        @level.tick input