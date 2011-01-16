class Level
    entities: []
    player: null
    constructor: (@screen, spawnX, spawnY) -> 
        @player = new Player spawnX, spawnY
        @baddie = new Baddie 10, 10
        @entities.push @player
        @entities.push @baddie

    tick: (input) ->
        if not @player.removed then @player.tick input;

    render: (ctx, camera) ->
        ctx.translate -camera.x, -camera.y
        e.render ctx, camera for e in @entities