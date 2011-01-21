direction =
    NONE: -1
    UP: 0
    DOWN: 1
    LEFT: 2
    RIGHT: 3

class Entity
    name: "entity"
    x: 0
    y: 0
    w: 10
    h: 10
    dir: direction.NONE
    frame: 0
    removed: false

    init: (@level) -> Events.trigger @name + ".create", {}
    tick: -> Events.trigger @name + ".tick", {}
    render: (ctx) ->
    remove: -> @removed = true