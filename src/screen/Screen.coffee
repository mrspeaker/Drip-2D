class Screen
    init: (@game) -> console.log "new Screen (base)"
    setScreen: (screen) -> @game.setScreen screen
    removed: ->
    render: (ctx) ->
    tick: (input) ->