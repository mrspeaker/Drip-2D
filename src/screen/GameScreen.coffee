class GameScreen extends Screen
    constructor: ->
        @level = new Level this, 32, 24

    render: (ctx) ->
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        @level.render ctx

    tick: (input) ->
        if input.buttons[input.ESCAPE] and !input.oldButtons[input.ESCAPE]    
            @setScreen new PauseScreen this
        @level.tick input