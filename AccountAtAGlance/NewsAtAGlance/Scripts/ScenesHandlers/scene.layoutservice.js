//Contains tile size and scene layout details

var sceneLayoutService = function () {
    var width,

    get = function () {
        width = $('#content').width();

        //scene1
        var pad = 6,
        row1H = 210,
        //small
        s1Sh = 101,
        s1Sh2 = 101,
        s1Sw = 264,
        //medium
        s1Mh = 213,
        s1Mw = 290,
        s1Mw2 = 270,
        s1Mw3 = 270
        //large
        s1Lh = 325,
        s1Lw = 548,
        s2Lw = 614,

        // TODO: reuse tiles related to News. All of them have a same format.
        items = { tiles:
                    [
                        { name: 'News 1',
                            tileId: 'News1',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: 0, left: 0, opacity: 1, size: 0, borderColor: 'orange', z: 0 },
                                { height: s1Sh2, width: s1Sw, top: 170, left: 10, size: 0, borderColor: 'orange', opacity: .15, z: '2000' }
                            ]
                        },

                        { name: 'News 2',
                            tileId: 'News2',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: s1Sh + (pad * 1.8), left: 0, opacity: 1, size: 0, borderColor: 'orange', z: 0 },
                                { height: s1Sh2, width: s1Sw, top: 300, left: 0, size: 0, borderColor: 'orange', opacity: .75, z: '2000' }
                            ]
                        },

                        { name: 'News 3',
                            tileId: 'News3',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw, top: 0, left: s1Sw + pad, opacity: 1, size: 1, borderColor: 'orange', z: 0 },
                                { height: s1Sh2, width: s1Sw, top: 20, left: 300, size: 0, borderColor: 'orange', z: '4000', opacity: .8 }
                            ]
                        },

                        { name: 'Team 2',
                            tileId: 'Team2',
                            formatter: tileFormatter.formatTeams,
                            scenes: [
                                { height: s1Mh, width: s1Mw2, top: 0, left: s1Sw + s1Mw + (pad * 2), opacity: 1, size: 1, borderColor: 'yellow', z: 0 },
                                { height: s1Mh, width: s1Mw2, top: 20, left: 600, size: 1, borderColor: 'yellow', z: '2000', opacity: 1 }
                            ]
                        },

                        { name: 'News 4',
                            tileId: 'News4',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh, width: s1Sw, top: 0, left: s1Sw + s1Mw + s1Mw2 + (pad * 3), opacity: 1, size: 0, borderColor: 'orange', z: 0 },
                                { height: s1Sh, width: s1Sw, top: 450, left: 870, size: 0, borderColor: 'orange', opacity: 1, z: '3000' }
                            ]
                        },

                        { name: 'News 5',
                            tileId: 'News5',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Sh2, width: s1Sw, top: s1Sh + (pad * 1.8), left: s1Sw + s1Mw + s1Mw2 + (pad * 3), opacity: 1, size: 0, borderColor: 'orange', z: 0 },
                                { height: s1Sh, width: s1Sw, top: 415, left: 30, size: 0, borderColor: 'orange', opacity: 1, z: '2000' }
                            ]
                        },

                        { name: 'News 6',
                            tileId: 'News6',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw3, top: 0, left: s1Sw + s1Mw + s1Mw2 + s1Sw + (pad * 4), opacity: 1, size: 1, borderColor: 'orange', z: 0 },
                                { height: s1Sh, width: s1Sw, top: 0, left: 850, size: 0, borderColor: 'orange', z: '2000', opacity: .5 }
                            ]
                        },

                        { name: 'News 7',
                            tileId: 'News7',
                            formatter: tileFormatter.formatNews,
                            scenes: [
                                { height: s1Mh, width: s1Mw, top: 0, left: s1Sw + s1Mw + s1Mw2 + s1Mw3 + s1Sw + (pad * 5), opacity: 1, size: 1, borderColor: 'orange', z: 0 },
                                { height: s1Mh, width: s1Mw2, top: 140, left: 250, size: 1, borderColor: 'orange', opacity: 1, z: '2000' }
                            ]
                        },

                        { name: 'Team 1',
                            tileId: 'Team1',
                            formatter: tileFormatter.formatTeams,
                            scenes: [
                                { height: s1Lh, width: s1Lw, top: s1Mh + pad * 2, left: 0, opacity: 1, size: 2, borderColor: 'red', z: 0 },
                                { height: s1Sh, width: s1Sw, top: 30, left: 20, size: 0, borderColor: 'red', opacity: .95, z: '4000' }
                            ]
                        },

                        { name: 'Video',
                            tileId: 'Video',
                            formatter: tileFormatter.formatVideo,
                            scenes: [
                                { height: s1Lh, width: s2Lw, top: s1Mh + pad * 2, left: s1Lw + pad, opacity: 1, size: 2, borderColor: 'deeppink', z: 0 },
                                { height: s1Lh, width: s1Lw, top: 200, left: 450, size: 2, borderColor: 'deeppink', opacity: 1, z: '10000' }
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