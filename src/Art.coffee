class Sprite
    constructor: (imageName, @w, @h, @frames, xOff = 0, yOff = 0, xSpace = 0, ySpace = 0) ->
        @image = new Image
        @image.src = imageName

Art =     
    init: ->
        @player = new Sprite "resources/galag.png", 24, 20, 8

    draw: (ctx, art, x, y, frame) -> 
        ctx.drawImage( 
            art.image,
            frame * art.w,
            0,
            art.w,
            art.h,
            x,
            y,
            art.w,
            art.h)

Art.init()

        