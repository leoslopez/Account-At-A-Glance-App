//Contains the initial screen startup routines

var startup = function () {    

    // TODO: verify parameters
    init = function (locId, langId, sectId) {        

        var defaultPositions = sceneLayoutService.get();
        
        $('#gridButton').click(function () {
            sceneStateManager.changeScene(0);
        });

        $('#cloudButton').click(function () {
            sceneStateManager.changeScene(1);
        });

        sceneStateManager.init(defaultPositions);
        // TODO: verify parameters
        sceneStateManager.renderTiles(locId, langId, sectId);

    };

    return {
        init: init
    };

} ();