define([
    "underscore",
    "backbone",
    "models/museum"
], function(_, Backbone, MuseumModel) {
    var MuseumsCollection = Backbone.Collection.extend({
        model: MuseumModel,
        url: "data/peru-museums.json"
    });

    return MuseumsCollection;
});
