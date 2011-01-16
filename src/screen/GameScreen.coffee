class GameScreen extends Screen
    tickers: 0
    constructor: ->
        @level = new Level this

    render: (ctx) ->
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height

    tick: (input) ->
        if input.buttons[input.ESCAPE] and !input.oldButtons[input.ESCAPE]    
            @setScreen new PauseScreen this
