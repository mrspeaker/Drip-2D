class TitleScreen extends Screen
    time = 0
    render: (context) ->
        context.fillStyle = "rgb(" + @rnd() + "," + @rnd() + "," + @rnd() + ")"
        context.fillRect 20, 20, 50, 50
    
    rnd: -> ~~(Math.random() * 255)
    tick: (input) ->
        