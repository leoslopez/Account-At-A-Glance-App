//Handles specialized rendering tasks required by some
//tiles such as the video tile, quote tile (uses canvas), etc.

var tileFormatter = new function () {
    var previousPoint = null,

    tmplSizes = ['Small', 'Medium', 'Large'],

    formatNews = function (tileDiv) {
        var lblNewsTitle = $('#lblNewsTitle', tileDiv);
        var lnkNews = $('#lnkNews', tileDiv);
        var lblNewsSnippet = $('#lblNewsSnippet', tileDiv);

        lblNewsTitle.text(tileDiv.data().tileData.Title);
        lnkNews.attr('href', tileDiv.data().tileData.Url);
        lnkNews.text(' (leer nota completa)');
        //lblNewsSnippet.text(tileDiv.data().tileData.Snippet);
    };

    return {
        formatNews: formatNews
    };

} ();