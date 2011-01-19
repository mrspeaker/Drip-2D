direction =
    NONE: -1
    UP: 0
    DOWN: 1
    LEFT: 2
    RIGHT: 3

class Entity
    x: 0
    y: 0
    w: 10
    h: 10
    dir: direction.NONE
    frame: 0
    removed: false

    init: (@level) ->
    tick: ->
    render: (ctx) ->
    remove: -> @removed = true