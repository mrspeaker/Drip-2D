class Player extends Entity
    fireFade: 0
    speed: 1.5
    dir = direction.NONE
    constructor: (@x, @y, @w, @h) ->

    tick: (input) ->
        @setDirection input
        @move() if @dir != direction.NONE
        @fire() if input.pressed input.FIRE
        @fireFade-- if @fireFade > 0

    render: (ctx) ->
        [Art.player, Art.player_red][@fireFade > `0 ? 1: 0`].draw ctx, ~~@x, @y, 7

    move: ->
        @x += if @dir == direction.RIGHT then @speed else -@speed
        if @x < 0 then @x = 0
        if @x > @level.width - @w then @x = @level.width - @w

    fire: ->
        @fireFade = 10
        @level.add new Bullet ~~(@x + @w / 2)-2, @y - 5, 0, -1.5

    shot: (bullet) ->
        @level.gameOver()

    setDirection: (input) ->
        if input.buttons[input.LEFT] then @dir = direction.LEFT
        if input.buttons[input.RIGHT] then @dir = direction.RIGHT
        if input.buttons[input.UP] then @dir = direction.NONE
