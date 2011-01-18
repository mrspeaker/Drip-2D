class Level
    entities: []
    newEntities: []
    constructor: (@screen, spawnX, spawnY) -> 
        # TODO: abstract level to seperate file
        player = new Player spawnX, spawnY
        player.init this
        @add player
        @add new Baddie 10, 10
        @add new Baddie 30, 10
        @add new Baddie 50, 10

    tick: (input) ->
        aliveEntities = []
        for e in @entities
            if not e.removed
                e.tick input
                aliveEntities.push e

        # add any new entities
        for e in @newEntities
            aliveEntities.push e
        @newEntities = []
        
        # return the updated entities list
        @entities = aliveEntities

    add: (entity) ->
        @newEntities.push entity

    render: (ctx, camera) ->
        ctx.translate -camera.x, -camera.y
        e.render ctx, camera for e in @entities