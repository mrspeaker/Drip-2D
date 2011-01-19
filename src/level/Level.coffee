class Level
    entities: []
    newEntities: []
    time: 0
    resetGame: false
    constructor: (@screen, @width, @height, spawnX, spawnY) ->
        # TODO: abstract level to seperate file
        @baddieCount = 4
        @add new Baddie 20 * i, 10, 24, 20 for i in [0..@baddieCount - 1]
        @add new Player spawnX, spawnY, 24, 20

    tick: (input) ->
        if @time++ == 0 then console.log "SHOULD BE EMPTY:", @entites, @newEntities
        
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