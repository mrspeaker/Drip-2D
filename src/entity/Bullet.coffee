class Bullet extends Entity
    name: "bullet"
    constructor: (@x, @y, @xSpeed, @ySpeed) ->
        @w = 1
        @h = 5

    tick: ->
        @move()
        @collisions()
        super

    render: (ctx) ->
        ctx.fillStyle = "#0ff"
        ctx.fillRect @x, @y, 1, 5

    move: ->
        @x += @xSpeed
        @y += @ySpeed
        if @x < 0 or @x > @level.width then @remove()
        if @y < -5 or @y > @level.height then @remove()

    collisions: ->
        entities = @level.getColliding @x, @y, 1, 1
        for e in entities
            continue if e == this
            e.shot and e.shot this
            @remove()
