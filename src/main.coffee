###
    Tetris vs Space Invaders
    by Mr Speaker
    
    Code structure and bits of code liberally borrowed from MetaGun.
    
    Next TODOs:
        remove zepto
        fix restart bug
        generic collision (behaviour?)
        art cutup proper
        timing loop (+ frame counter)
###
main =
    rate: 10

    init: -> 
        console.log "game init"
        @ctx = $("#screen").dom[0].getContext("2d");
        @bindKeys()
        @reset()
        @run()

    stop: -> @running = false
    start: -> @running = true
    reset: ->
        console.log @screen
        @screen = null
        @input = null
        
        @input = new Input
        @setScreen new TitleScreen
        @start()

    run: ->
        if not @running then return
        @screen.tick @input
        @input.tick()
        @screen.render @ctx
        _.delay (-> main.run()), @rate

    setScreen: (screen) ->
        screen?.removed()
        @screen = screen
        screen.init(this)

    bindKeys: () ->
        $(window).bind "keydown", (e) => @input.set e.keyCode, true
        $(window).bind "keyup", (e) => @input.set e.keyCode, false
