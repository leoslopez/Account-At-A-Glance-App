//Handles specialized rendering tasks required by some
//tiles such as the video tile, quote tile (uses canvas), etc.

var tileFormatter = new function () {
    var previousPoint = null,

    tmplSizes = ['Small', 'Medium', 'Large'],

    
    formatNews = function (tileDiv) {
        // This code could be used to set information in the news template.
        // But I am using jquery template plugin so it is not necessary.

//        var lblNewsTitle = $('#lblNewsTitle', tileDiv);
//        var lnkNews = $('#lnkNews', tileDiv);
//        var lblNewsSnippet = $('#lblNewsSnippet', tileDiv);
//        var spNewsSource = $('#spNewsSource', tileDiv);

//        lblNewsTitle.text(tileDiv.data().tileData.Title);
//        lnkNews.attr('href', tileDiv.data().tileData.Url);        
//        lblNewsSnippet.text(tileDiv.data().tileData.Snippet);
//        spNewsSource.text(tileDiv.data().tileData.Source);

    };

    formatTeams = function (tileDiv) {
        
    };

    return {
        formatNews: formatNews,
        formatTeams: formatTeams
    };

} ();