class Bullet extends Entity
    constructor: (@x, @y, @xSpeed, @ySpeed) ->
        
    tick: ->
        @move()
        @collisions()

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
            @remove() if e.shot? this
