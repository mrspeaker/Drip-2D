class Level

    constructor: (@screen, @width, @height, spawnX, spawnY) ->
        @entities = []
        @newEntities = []

        @classes =
            "player": Player,
            "baddie": Baddie
            
        Events.bind "player.create", (data) -> console.log "Player created"
        Events.bind "entity.make", (data) =>
            entityClass = if typeof data[0] == "string" then @classes[data[0]] else data[0]
            console.log(entityClass)
            b = new entityClass data[1], data[2], 20, 20, data[3]
            @add b

        # TODO: abstract level to seperate file

        #@add new Player spawnX, spawnY, 20, 20
        Events.trigger "entity.make", ["player", spawnX, spawnY, null]
        Events.trigger "entity.make", ["player", spawnX + 20, spawnY, null]
        @baddieCount = 5
        for i in [0..@baddieCount - 1]
            Events.trigger "entity.make", ["baddie", 20 * i, 10, i % 2]
            #@add new Baddie 20 * i, 10, 20, 20, i % 2

    tick: (input) ->
        # process all entities
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
        
        # TODO: trying to figure out reset bug!
        if @resetGame
            main.reset()
            return

    add: (entity) ->
        entity.init this
        @newEntities.push entity

    render: (ctx, camera) ->
        ctx.translate -camera.x, -camera.y
        e.render ctx, camera for e in @entities

    gameOver: ->
        # TODO: trying to figure out reset bug!
        @resetGame = true
        
    kill: ->
        @gameOver() if --@baddieCount == 0

    getColliding: (xc, yc, w, h) ->
        hits = []
        r = 20;
        x0 = (xc - r) / 10
        y0 = (yc - r) / 10
        x1 = (xc + w + r) / 10
        y1 = (yc + h + r) / 10
        # TODO: fix which entities to check
        for e in @entities
            if e.x > xc + w || e.y + e.h > yc + h || e.x + e.w < xc || e.y + e.h < yc
                continue
            hits.push e
        ###for (x = x0; x <= x1; x++)
            for (int y = y0; y <= y1; y++) {
                if (x >= 0 && y >= 0 && x < width && y < height) {
                    entitiesList = entityMap[x + y * width];
                    for (int i = 0; i < entitiesList.length; i++) {
                        Entity e = entitiesList[ i ]
                        xx0 = e.x;
                        yy0 = e.y;
                        xx1 = e.x + e.w;
                        yy1 = e.y + e.h;
                        if (xx0 > xc + w || yy0 > yc + h || xx1 < xc || yy1 < yc) continue;

                        hits.push e
        ###
        return hits