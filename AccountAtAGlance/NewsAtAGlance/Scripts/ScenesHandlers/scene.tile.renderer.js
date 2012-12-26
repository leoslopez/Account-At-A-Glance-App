// Renders tiles

var tileRenderer = function () {

    var render = function (tileDiv, sceneId) {
        
        if (sceneId == null) {
            sceneId = 0;
        }

        var size = tileDiv.data().scenes[sceneId].size,            
            template = tileDiv.data().templates[size],
            formatterFunc = tileDiv.data().formatter;

        tileDiv.html(template);

        if (formatterFunc != null) {
            formatterFunc(tileDiv, sceneId);
        }
    };

    return {
        render: render
    };

} ();