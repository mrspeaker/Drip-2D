class Level
    entities: []
    player: null
    constructor: (@screen, spawnX, spawnY) -> 
        @player = new Player spawnX, spawnY
        @baddie = new Baddie 10, 10
        @entities.push @player
        @entities.push @baddie

    tick: (input) ->
        for e in @entities
            e.tick input if not e.removed

    render: (ctx, camera) ->
        ctx.translate -camera.x, -camera.y
        e.render ctx, camera for e in @entities