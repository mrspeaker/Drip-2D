class PauseScreen extends Screen
    constructor: (@parent) ->

    render: (ctx) ->
        ctx.fillStyle = "rgb(250,250,250)"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        
    tick: (input) ->
        if input.buttons[input.ESCAPE] and !input.oldButtons[input.ESCAPE]    
            @setScreen @parent