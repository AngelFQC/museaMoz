define([
    "underscore",
    "backbone",
    "models/ubigeo"
], function(_, Backbone, UbigeoModel) {
    var UbigeosCollection = Backbone.Collection.extend({
        model: UbigeoModel,
        url: "ubigeo/ubigeo-peru.json",
        getRegions: function() {
            var regions = _.filter(this.models, function(model) {
                return model.get('coddpto') !== 0
                   && model.get('codprov') === 0
                   && model.get('coddist') === 0;
            });

            return regions;
        },
        getProvinces: function(coddpto) {
            var provinces = _.filter(this.models, function(model) {
                return model.get('coddpto') === coddpto
                   && model.get('codprov') !== 0
                   && model.get('coddist') === 0;
            });

            return provinces;
        },
        getDistricts: function(coddpto, codprov) {
            var districts = _.filter(u, function(model) {
                return model.get('coddpto') === coddpto
                   && model.get('codprov') === codprov
                   && model.get('coddist') !== 0;
            });

            return districts;
        }
    });

    return UbigeosCollection;
});
