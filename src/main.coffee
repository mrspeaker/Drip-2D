###
    Tetris vs Space Invaders
    by Mr Speaker
    
    Code structure and bits of code liberally borrowed from MetaGun.
###
main =
    init: -> 
        console.log "game init"
        @ctx = $("#screen").dom[0].getContext("2d");

        @input = new Input
        @bindKeys()

        @setScreen new TitleScreen

        @start()
        @run()

    stop: -> @running = false
    start: -> @running = true
    run: ->
        if not @running then return
        @screen.tick(@input)
        @input.tick()
        @screen.render @ctx
        _.delay (-> main.run()), 1000

    setScreen: (screen) ->
        screen?.removed()
        @screen = screen
        screen.init(this)

    bindKeys: () ->
        $(window).bind "keydown", (e) => @input.set e.keyCode, true
        $(window).bind "keyup", (e) => @input.set e.keyCode, false

