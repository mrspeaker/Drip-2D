class Entity
    x: 0
    y: 0
    w: 10
    h: 10
    dir: 0
    removed: false

    init: (@level) ->
    tick: ->
    render: (ctx) ->
    remove: -> @removed = true