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
        
class SpriteSheet
    constructor: (imageName, @w, @h, @framesX, @framesY, @xOff, @yOff, @xSpace, @ySpace) ->
        @image = new Image
        @image.src = imageName

class Sprite
    constructor: (ss, @startXFrame, startYFrame) ->
        # TODO: draw cropped image to temporary canvas
        @image = ss.image
        @w = ss.w
        @h = ss.h
        @xOff = ss.xOff
        @yOff = ss.yOff
        @xOffset = (@w + ss.xSpace)
        @yOffset = startYFrame * (@h + ss.ySpace)

    draw: (ctx, x, y, frame) ->
        ctx.drawImage( 
            @image,
            (frame + @startXFrame) * @xOffset + @xOff,
            @yOffset + @yOff,
            @w, @h,
            x, y, @w, @h)

# Init the art to load images
Art.init()

        