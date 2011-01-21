class SpriteSheet
    constructor: (imageName, @w, @h, @framesX, @framesY, @xOff, @yOff, @xSpace, @ySpace) ->
        @image = new Image
        @image.src = imageName

class Sprite
    constructor: (ss, @startXFrame, startYFrame) ->
        # TODO: draw cropped image to temporary canvas
        # TODO: Add user-defined bounding box
        # TODO: Add user-defined origin (including an option for "centre")
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