class TitleScreen extends Screen
    time: 0
    minLength: 1

    render: (ctx) ->
        if Math.random() < 0.05 then @drawSplash ctx

    drawSplash: (ctx) ->
        ctx.fillStyle = "rgb(#{@rnd()},#{@rnd()},#{@rnd()})"
        ctx.fillRect 0, 0, ctx.canvas.width, ctx.canvas.height
        ctx.fillStyle = "#000"
        ctx.font = "bold 16px sans-serif"
        ctx.fillText "CoffeeScript Engine v0.1", 30, 43
        ctx.fillText "space to fire/start", 30, 83
        ctx.fillText "cursor to move, up to stop", 30, 103
        ctx.fillText "esc to pause", 30, 123

    rnd: -> ~~(Math.random() * 255)

    tick: (input) ->
        if ++@time < @minLength then return

        if input.pressed input.FIRE
            console.log "selected start from TitleScreen"
            @setScreen new GameScreen
            input.releaseAllKeys()
