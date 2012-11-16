//Encapsulates data calls to server (AJAX calls)

var dataService = new function () {

    var serviceBase = '/DataService/',

    // TODO: verfy parameters
    getNews = function (locId, langId, sectId, callback) {
        $.getJSON(serviceBase + 'GetNews', { locationId: locId, languageId: langId, sectionId: sectId }, function (data) {
            callback(data);
        });
    };

    return {
        getNews: getNews
    };

} ();