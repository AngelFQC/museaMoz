define([
    'jquery',
    'underscore',
    'backbone',
    'collection/ubigeos',
    'view/region-province'
], function($, _, Backbone, UbigeosCollection, RegionProvinceView) {
    var ProvincesView = Backbone.View.extend({
        tagName: 'ul',
        initialize: function() {
            var self = this;

            this.collection = new UbigeosCollection();

            var ubigeosFetch = this.collection.fetch();

            $.when(ubigeosFetch).done(function() {
                self.render();
            });
        },
        render: function() {
            var coddpto = parseInt(this.model.get('coddpto'));
            var provinces = this.collection.getProvinces(coddpto);

            _.each(provinces, this.addProvince, this);

            return this;
        },
        addProvince: function(ubigeoModel) {
            var regionProvinceView = new RegionProvinceView({
                model: ubigeoModel
            });
            regionProvinceView.render();

            this.$el.append(regionProvinceView.$el);
        }
    });

    return ProvincesView;
});
