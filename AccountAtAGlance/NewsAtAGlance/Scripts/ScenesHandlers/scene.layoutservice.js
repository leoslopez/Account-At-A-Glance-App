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
        s1Mw = 290,
        s1Mw2 = 230,
        s1Mw3 = 270
        //large
        s1Lh = 340,
        s1Lw = 484,

        // TODO: reuse tiles related to News. All of them have a same format.
        items = { tiles:
                    [
                        { name: 'Team 1',
                            tileId: 'Team1',
                            formatter: tileFormatter.formatTeams,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: 0, left: 0, opacity: 1, size: 0, borderColor: 'red', z: 0 },                            
                                {height: 105, width: 250, top: 200, left: 0, size: 0, borderColor: 'red', opacity: .65, z: '2000' }
                            ]
                        },

                        { name: 'Team 2',
                            tileId: 'Team2',
                            formatter: tileFormatter.formatTeams,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: s1Sh + (pad * 1.8), left: 0, opacity: 1, size: 0, borderColor: 'yellow', z: 0 },
                                { height: 105, width: 250, top: 200, left: 0, size: 0, borderColor: 'yellow', opacity: .65, z: '2000' }
                            ]
                        },

                        { name: 'News 1',
                            tileId: 'News1',
                            formatter: tileFormatter.formatNews,                            
                            scenes: [
                                { height: s1Mh, width: s1Mw, top: 0, left: s1Sw + pad, opacity: 1, size: 1, borderColor: '#B40431', z: 0 },
                                { height: 90, width: 210, top: 80, left: 250, size: 0, borderColor: '#B40431', z: '2000', opacity: .5 }
                            ]
                        },

                        { name: 'News 2',
                            tileId: 'News2',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw2, top: 0, left: s1Sw + s1Mw + (pad * 2), opacity: 1, size: 1, borderColor: '#3A01DF', z: 0 },
                                { height: 90, width: 210, top: 180, left: 150, size: 0, borderColor: '#3A01DF', z: '2000', opacity: .5 }
                            ]
                        },

                        { name: 'News 3',
                            tileId: 'News3',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: 0, left: s1Sw + s1Mw + s1Mw2 + (pad * 3), opacity: 1, size: 0, borderColor: '#37D753', z: 0 },
                                { height: 90, width: 200, top: 60, left: 870, size: 0, borderColor: '#37D753', opacity: .7 }    
                            ]
                        },

                        { name: 'News 4',
                            tileId: 'News4',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh2, width: s1Sw, top: s1Sh + (pad * 1.8), left: s1Sw + s1Mw + s1Mw2 + (pad * 3), opacity: 1, size: 0, borderColor: '#800080', z: 0 },
                                { height: 105, width: 250, top: 200, left: 0, size: 0, borderColor: '#800080', opacity: .65, z: '2000' }
                            ]
                        },

                        { name: 'News 5',
                            tileId: 'News5',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw3, top: 0, left: s1Sw + s1Mw + s1Mw2 + s1Sw + (pad * 4), opacity: 1, size: 1, borderColor: '#FF8000', z: 0 },
                                { height: 90, width: 110, top: 380, left: 150, size: 0, borderColor: '#FF8000', z: '2000', opacity: .5 }                                
                            ]
                        },

                        { name: 'News 6',
                            tileId: 'News6',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw, top: 0, left: s1Sw + s1Mw + s1Mw2 + s1Mw3 + s1Sw + (pad * 5), opacity: 1, size: 1, borderColor: '#113E6F', z: 0 },
                                { height: 105, width: 250, top: 200, left: 0, size: 0, borderColor: '#113E6F', opacity: .65, z: '2000' }
                            ]
                        },                        

                        { name: 'News 7',
                            tileId: 'News7',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Lh, width: s1Lw, top: s1Mh + pad * 2, left: 0, opacity: 1, size: 2, borderColor: '#E0CB38', z: 0 },
                                { height: 105, width: 250, top: 200, left: 0, size: 0, borderColor: '#E0CB38', opacity: .65, z: '2000' }
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