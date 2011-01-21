Events =
    events: {}
    bind: (type, func) ->
        @events[type] || = []
        @events[type].push func

    trigger: (event, data) ->
        func data for func in @events[event] or []
        null

