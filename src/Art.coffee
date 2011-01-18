class Sprite
    constructor: (imageName, @w, @h, @frames, @xOff = 0, @yOff = 0, xSpace = 0, ySpace = 0) ->
        @image = new Image
        @image.src = imageName

Art =
    init: ->
        @player = new Sprite "resources/galag.png", 24, 24, 8, 0, 0
        @player_red = new Sprite "resources/galag.png", 24, 24, 8, 0, 1
        @baddie = new Sprite "resources/galag.png", 24, 24, 8, 0, 2
        
    draw: (ctx, art, x, y, frame) -> 
        ctx.drawImage( 
            art.image,
            frame * art.w,
            art.yOff * art.h,
            art.w,
            art.h,
            x,
            y,
            art.w,
            art.h)

Art.init()

        