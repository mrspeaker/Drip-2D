main =
    init: -> 
        console.log "game init"
        @ctx = $("#screen").dom[0].getContext("2d");
        @setScreen new TitleScreen
        @run()

    stop: ->
    start: ->
    run: ->
        @screen.render @ctx
        _.delay (-> main.run()), 1000

    setScreen: (screen) ->
        screen?.removed()
        @screen = screen
        screen.init()

