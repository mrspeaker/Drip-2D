class Level
    entities: []
    player: null
    constructor: (@screen, spawnX, spawnY) -> 
        @player = new Player spawnX, spawnY
        @entities.push @player
    tick: (input) ->
        if not @player.removed then @player.tick input;
    render: (ctx) ->
        e.render ctx for e in @entities
        true