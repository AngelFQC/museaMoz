define([
    "underscore",
    "backbone",
    "models/museum"
], function(_, Backbone, MuseumModel) {
    var MuseumsCollection = Backbone.Collection.extend({
        model: MuseumModel,
        url: "data/peru-museums.json",
        getByRegionAndProvince: function(region, province) {
            var museums = this.filter(function(museumModel) {
                return museumModel.get('ubigeo').region === parseInt(region) &&
                    museumModel.get('ubigeo').province === parseInt(province)
            });

            return museums;
        }
    });

    return MuseumsCollection;
});
