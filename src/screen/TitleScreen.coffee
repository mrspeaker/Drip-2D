class TitleScreen extends Screen
    time: 0
    minLength: 3

    render: (ctx) ->
        ctx.fillStyle = "rgb(#{@rnd()},#{@rnd()},#{@rnd()})"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height

    rnd: -> ~~(Math.random() * 255)
    tick: (input) ->
        if ++@time < @minLength then return
        if input.buttons[input.FIRE] and !input.oldButtons[input.FIRE]
            console.log "selected start from TitleScreen"
            @setScreen new GameScreen
            input.releaseAllKeys()
            
            
