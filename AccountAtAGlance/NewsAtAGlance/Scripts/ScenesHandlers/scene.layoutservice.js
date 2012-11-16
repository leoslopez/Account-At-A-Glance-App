//Contains tile size and scene layout details

var sceneLayoutService = function () {
    var width,

    get = function () {
        width = $('#content').width();

        //scene1
        var pad = 6,
        row1H = 210,
        //small
        s1Sh = 93,
        s1Sh2 = 93,
        s1Sw = 264,
        //medium
        s1Mh = 197,
        s1Mw = 365,
        s1Mw2 = 270,
        s1Mw3 = 320
        //large
        s1Lh = 340,
        s1Lw = 584,

        // TODO: reuse tiles related to News. All of them have a same format.
        items = { tiles:
                    [
                        { name: 'News 1',
                            tileId: 'News1',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw, top: 0, left: 0, opacity: 1, size: 1, borderColor: '#B40431', z: 0 },
                                { height: 90, width: 210, top: 80, left: 250, size: 0, borderColor: '#B40431', z: '2000', opacity: .5 }
                            ]
                        },

                        { name: 'News 2',
                            tileId: 'News2',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw2, top: 0, left: s1Mw + pad, opacity: 1, size: 1, borderColor: '#3A01DF', z: 0 },
                                { height: 90, width: 210, top: 180, left: 150, size: 0, borderColor: '#3A01DF', z: '2000', opacity: .5 }
                            ]
                        },

                        { name: 'News 3',
                            tileId: 'News3',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw3, top: 0, left: s1Mw + s1Mw2 + pad, opacity: 1, size: 1, borderColor: '#FF8000', z: 0 },
                                { height: 90, width: 110, top: 380, left: 150, size: 0, borderColor: '#FF8000', z: '2000', opacity: .5 }
                            ]
                        }           
                    ]
        };
        
        return items;
    };


    return {
        get: get
    };

} ();