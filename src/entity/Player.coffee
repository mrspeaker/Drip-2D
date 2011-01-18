class Player extends Entity
    frame: 0
    speed: 20
    fired: 0
    constructor: (@x, @y) ->

    tick: (input) ->
        if input.buttons[input.LEFT] then @dir = -1.5
        if input.buttons[input.RIGHT] then @dir = 1.5
        if input.buttons[input.UP] then @dir = 0
        @x += @dir
        if @x < 0 then @x = 0
        if @x > 280 then @x = 280
        
        @fired--
        if input.pressed input.FIRE
            @fired = 10
            @level.add new Bullet ~~(@x + @w / 2 + 3), @y - 5

        @frame++

    render: (ctx) ->
        [Art.player, Art.player_red][if @fired > 0 then 1 else 0].draw ctx, ~~@x, @y, 7
