class Input
    UP: 0
    DOWN: 1
    LEFT: 2
    RIGHT: 3
    FIRE: 4
    ROTATE: 5
    ESCAPE: 6
    
    buttons: (false for [0..6])
    oldButtons: (false for [0..6])

    constructor: () ->
        console.log "new Input"
        
    pressed: (button) ->
        @buttons[button] && !@oldButtons[button]

    set: (key, blnDown) -> 
        switch key
            when 37 then button = @LEFT
            when 38 then button = @UP
            when 39 then button = @RIGHT
            when 40 then button = @DOWN
            when 32 then button = @FIRE
            when 90 then button = @ROTATE
            when 27 then button = @ESCAPE
            else button = -1
        if button > -1 then @buttons[button] = blnDown
    
    tick: -> @oldButtons = _.clone @buttons
    releaseAllKeys: -> @buttons = (false for [0..@buttons.length])