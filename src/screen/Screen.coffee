class Screen
    init: (@game) -> console.log "new Screen (base)"
    setScreen: (screen) ->
        console.log "called", @game
        @game.setScreen screen
    removed: ->
    render: (context) ->
    tick: (input) ->