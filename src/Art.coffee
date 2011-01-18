Art =
    init: ->
        @player = new Sprite "resources/galag.png", 24, 24, 8, 0, 0
        @player_red = new Sprite "resources/galag.png", 24, 24, 8, 0, 1
        @baddie = new Sprite "resources/galag.png", 24, 24, 8, 0, 2

    draw: (ctx, art, x, y, frame) -> art.draw ctx, x, y, frame
    drawText: (ctx, msg, x, y, options) ->
        if options?.fillStyle then ctx.fillStyle = options.fillStyle
        ctx.fillText msg, x, y 

class Sprite
    constructor: (imageName, @w, @h, @frames, @xOff = 0, @yOff = 0, xSpace = 0, ySpace = 0) ->
        @image = new Image
        @image.src = imageName

    draw: (ctx, x, y, frame) ->
        ctx.drawImage( 
            @image,
            frame * @w, @yOff * @h,
            @w, @h,
            x, y,
            @w, @h)

# Init the art to load images
Art.init()

        