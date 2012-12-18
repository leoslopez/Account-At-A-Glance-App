// Creates tiles dynamically at runtime

var sceneStateManager = function () {

    var sceneId = 0,
    animateSpeed = 760,
    tiles,

    init = function (args) {

        tiles = args.tiles;
        $('.tile').remove();

        $(tiles).each(function (index) {

            //build tiles
            var tileDiv = $('<div/>', { 'class': 'tile', 'text': this.name, 'id': this.tileId });

            tileDiv.css('border-top', '5px solid ' + this.scenes[sceneId].borderColor);
            tileDiv.data(this);

            moveTile(tileDiv, this.scenes[sceneId]);
            tileDiv.appendTo('#content');

            if (index < 8) {
                tileDiv.addClass('top-row');
            }

            tileDiv.draggable({ opacity: 0.9, zIndex: 5000, revert: 'invalid', revertDuration: 500 });
            tileDiv.droppable({
                tolerance: 'pointer',
                drop: function (event, ui) {
                    swapTiles(ui.draggable, $(this));
                }
            });
        });

        $('#left').click(slideRight);
        $('#right').click(slideLeft);
    },

    slideLeft = function () {
        $('.top-row').animate({ 'left': '-=200px' }, 800, function () {
            $(this).data().scenes[sceneId].left -= 200;
        });
    },

    slideRight = function () {
        $('.top-row').animate({ 'left': '+=200px' }, 800, function () {
            $(this).data().scenes[sceneId].left += 200;
        });
    },


    // TODO: verify parameters
    renderTiles = function (locId, langId, sectId) {

        dataService.getNews(locId, langId, sectId, renderNewsTiles);
        dataService.getTeams(renderTeamsTiles);
        renderDefaultTiles();
    },


    renderNewsTiles = function (data) {
        for (var i = 0; i <= 6; i++) {
            renderTile(data[i], $('#News' + (i + 1)), 0);
        }
    },

    renderTeamsTiles = function (data) {
        for (var i = 0; i <= 1; i++) {
            renderTile(data[i], $('#Team' + (i + 1)), 0);
        }
    },

    renderTile = function (data, tile, fadeInAmount) {

        if (fadeInAmount > 0) tile.fadeOut(fadeInAmount);

        if (fadeInAmount > 0) {
            tile.fadeIn(fadeInAmount,
                function () {
                    tileBinder.bind(tile, data, tileRenderer.render);
                }
            );
        }
        else {
            tileBinder.bind(tile, data, tileRenderer.render);
        }
    },

    renderDefaultTiles = function () {
        $('#Video').each(function () {
            if ($(this).data().templates == null) {
                var tileDiv = $(this);
                tileBinder.bind(tileDiv, null, tileRenderer.render);
            }
        });
    };


    /////// Region Swap ///////

    moveTile = function (tile, scene) {
        tile.animate({
            opacity: scene.opacity,
            top: scene.top,
            left: scene.left,
            height: scene.height,
            width: scene.width,
            zIndex: scene.z
        },
            {
                duration: animateSpeed,
                easing: "easeInOutExpo",
                step: function () { },
                complete: function () { }
            });
    },

    swapTiles = function (source, target) {
        var sourceScene = source.data().scenes[sceneId];
        var targetScene = target.data().scenes[sceneId];

        moveTile(target, sourceScene);
        moveTile(source, targetScene);

        swapScenes(sourceScene, targetScene);

        if (sceneId == 0) {
            //handle top row scrolling
            var sourceTopRow = source.hasClass('top-row');
            var targetTopRow = target.hasClass('top-row');
            if (sourceTopRow && !targetTopRow) {
                source.removeClass('top-row');
                target.addClass('top-row');
            } else if (!sourceTopRow && targetTopRow) {
                target.removeClass('top-row');
                source.addClass('top-row');
            }
        }

        //resize
        var sourceSize = sourceScene.size;
        var targetSize = targetScene.size;
        if (sourceSize != targetSize) {

            target.data().scenes[sceneId].size = sourceSize;
            source.data().scenes[sceneId].size = targetSize;

            tileRenderer.render(target);
            tileRenderer.render(source);
        }
    },

    swapScenes = function (source, target) {
        var top = source.top,
            left = source.left,
            height = source.height,
            width = source.width,
            opacity = source.opacity,
            zindex = source.zindex;

        source.top = target.top;
        source.left = target.left;
        source.height = target.height;
        source.width = target.width;
        source.opacity = target.opacity;
        source.zindex = target.zindex;

        target.top = top;
        target.left = left;
        target.height = height;
        target.width = width;
        target.opacity = opacity;
        target.zindex = zindex;
    };

    /////// EndRegion Swap ///////

    return {
        init: init,
        getTiles: function () { return tiles; },
        renderTiles: renderTiles
    };

} ();