Art =
    init: ->
        # sprite sheets
        galaga = new SpriteSheet "resources/galag.png", 18, 18, 7, 6, 0, 0, 6, 6

        @player = new Sprite galaga, 0, 0
        @player_red = new Sprite galaga, 0, 1
        @baddie = new Sprite galaga, 0, 2
        @baddie2 = new Sprite galaga, 0, 4

    draw: (ctx, art, x, y, frame) -> art.draw ctx, x, y, frame
    drawText: (ctx, msg, x, y, options) ->
        if options?.fillStyle then ctx.fillStyle = options.fillStyle
        ctx.fillText msg, x, y

# Init the art to load images
Art.init()

        