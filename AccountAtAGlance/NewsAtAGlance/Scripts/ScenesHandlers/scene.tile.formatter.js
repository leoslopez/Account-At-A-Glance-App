//Handles specialized rendering tasks required by some
//tiles such as the video tile, quote tile (uses canvas), etc.

var tileFormatter = new function () {
    var previousPoint = null,

    tmplSizes = ['Small', 'Medium', 'Large'],


    formatNews = function (tileDiv) {        
    },

    formatTeams = function (tileDiv) {
        if (Modernizr.canvas) {
            var canvasDiv = $('#progressPositionCanvas' + tileDiv.data().tileData.GraphName);

            if (canvasDiv.length > 0) {
                canvasDiv.html('');

                //Render canvas
                var size = tileDiv.data().scenes[0].size;
                var heightMultiplier = (size == 1) ? .55 : .72;
                var width = tileDiv.data().scenes[0].width * .94;
                var height = tileDiv.data().scenes[0].height * heightMultiplier;
                var json = tileDiv.data().tileData;
                renderCanvas(canvasDiv, width, height, json.AltColor, json, json.PositionProgress);
            }
        }
    },

    renderCanvas = function (canvasDiv, width, height, color, itemJson, dataPointsJson) {
        if (dataPointsJson != null && dataPointsJson.length > 0) {
            var points = [];
            for (var i in dataPointsJson) {
                var dp = dataPointsJson[i];
                points.push([dp.axisX, dp.axisY]);
            }

            var mAm = minsAndMaxs(dataPointsJson);

            var maxY = mAm[3] + 2;
            var maxX = mAm[1] + 1; 

            var chartOptions = {
                series: {
                    lines: { show: true, fill: true },
                    points: { show: true, radius: 10 }
                },
                
                grid: { hoverable: true, autoHighlight: true },
                legend: { position: 'se' },

                // Explaination for tickFormatter definition: Max value on axis Y is replaced by custom string: 'Posicion'. The same to the axis X.
                yaxis: { max: maxY, min: 1, tickFormatter: function (val, axis) { return val < axis.max ? val.toFixed(0) : "Posición"; } },                
                xaxis: { max: maxX, min: 1, tickFormatter: function (val, axis) { return val < axis.max ? val.toFixed(0) : "Fecha"; } }
            };

            canvasDiv.attr('style', 'width:' + width + 'px;height:' + height + 'px;'); //Required, css() doesn't work properly for this

            $.plot(canvasDiv, [{
                color: color,
                shadowSize: 4,
                label: 'Progreso en el Torneo',                
                data: points
            }], chartOptions);

            canvasDiv.bind('plothover', function (event, pos, item) {
                if (item) {
                    if (previousPoint != item.datapoint) {
                        previousPoint = item.datapoint;

                        $('#CanvasTooltip').remove();
                                                
                        var y = item.datapoint[1].toFixed(0) + "°";

                        showTooltip(item.pageX, item.pageY, y);
                    }
                }
                else {
                    $("#CanvasTooltip").remove();
                    previousPoint = null;
                }
            });
        }
    };

    // Add div to handle tooltips when the mouse is over an specific point.
    showTooltip = function (x, y, contents) {
        $('<div id="CanvasTooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 15,
            border: '1px solid #000',
            padding: '2px',
            'background-color': '#fee',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    };

    minsAndMaxs = function (points) {
        var xMax = 0;
        var xMin = 10000;
        var yMax = 0;
        var yMin = 10000;

        for (var i in points) {
            var dp = points[i];

            if (dp.axisX > xMax) {
                xMax = dp.axisX;
            };

            if (dp.axisX < xMin) {
                xMin = dp.axisX;
            };

            if (dp.axisY > yMax) {
                yMax = dp.axisY;
            };

            if (dp.axisY < yMin) {
                yMin = dp.axisY;
            };
        }

        return [xMin, xMax, yMin, yMax];
    };

    return {
        formatNews: formatNews,
        formatTeams: formatTeams
    };

} ();