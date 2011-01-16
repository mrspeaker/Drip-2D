class Screen
    constructor: (@game) ->

    init: -> console.log 'new Screen'

    removed: ->

    setScreen: (screen) ->
        @game.setScreen screen
        
    render: (context) ->
        
    tick: (input) ->