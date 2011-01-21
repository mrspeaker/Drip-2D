###
    Drip 2D: coffeescript game framework
    by Mr Speaker    
###
main =
    rate: 10

    init: -> 
        console.log "game init"
        @ctx = document.getElementById("screen").getContext "2d";
        @bindKeys()
        @reset()
        @run()

    stop: -> @running = false
    start: -> @running = true
    reset: ->
        @screen = null
        @input = null
        
        @input = new Input
        @setScreen new TitleScreen
        @start()

    run: ->
        if not @running then return
        Events.trigger "keypressed.FIRE", {} if @input.pressed @input.FIRE
        @screen.tick @input
        @input.tick()
        @screen.render @ctx
        _.delay (-> main.run()), @rate

    setScreen: (screen) ->
        screen?.removed()
        @screen = screen
        screen.init(this)

    bindKeys: () ->
        addEventListener "keydown", ((e) => @input.set e.keyCode, true), false
        addEventListener "keyup", ((e) => @input.set e.keyCode, false), false
