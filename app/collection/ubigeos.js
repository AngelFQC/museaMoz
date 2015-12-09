define([
    "underscore",
    "backbone",
    "models/ubigeo"
], function(_, Backbone, UbigeoModel) {
    var UbigeosCollection = Backbone.Collection.extend({
        model: UbigeoModel,
        url: "data/ubigeo-peru.json",
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
            var districts = _.filter(this.models, function(model) {
                return model.get('coddpto') === coddpto
                   && model.get('codprov') === codprov
                   && model.get('coddist') !== 0;
            });

            return districts;
        },
        getRegion: function(coddpto) {
            return this.findWhere({
                coddpto: parseInt(coddpto),
                codprov: 0,
                coddist: 0
            });
        },
        getProvince: function(coddpto, codprov) {
            return this.findWhere({
                coddpto: parseInt(coddpto),
                codprov: parseInt(codprov),
                coddist: 0
            });
        },
        getDistrict: function(coddpto, codprov, coddist) {
            return this.findWhere({
                coddpto: parseInt(coddpto),
                codprov: parseInt(codprov),
                coddist: parseInt(coddist)
            });
        }
    });

    return UbigeosCollection;
});
