//Contains the initial screen startup routines

var startup = function () {

    var windowFocused = true,

    // TODO: verify parameters
    init = function (locId, langId, sectId) {

        //track if user switches tabs or not otherwise
        //timers may queue up in some browsers like Chrome
        $(window).focus(function () {
            windowFocused = true;
        });

        $(window).blur(function () {
            windowFocused = false;
        });

        var defaultPositions = sceneLayoutService.get();
        
        $('#gridButton').click(function () {
            sceneStateManager.changeScene();
        });

        $('#cloudButton').click(function () {
            sceneStateManager.changeScene();
        });

        sceneStateManager.init(defaultPositions);
        // TODO: verify parameters
        sceneStateManager.renderTiles(locId, langId, sectId);

    };

    return {
        init: init
    };

} ();