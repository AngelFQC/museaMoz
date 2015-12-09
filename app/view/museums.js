define([
    'jquery',
    'underscore',
    'backbone',
    'collections/museums',
    'views/province-museum'
], function($, _, Backbone, MuseumsCollection, ProvinceMuseumView) {
    var MuseumsView = Backbone.View.extend({
        tagName: 'ul',
        initialize: function() {
            var self = this;

            this.collection = new MuseumsCollection();

            var museumsFetch = this.collection.fetch();

            $.when(museumsFetch).done(function() {
                self.render();
            });
        },
        render: function() {
            var museums = this.collection.getByRegionAndProvince(
                this.model.get('coddpto'),
                this.model.get('codprov')
            );

            _.each(museums, this.addMuseum, this);

            return this;
        },
        addMuseum: function(museumModel) {
            var provinceMuseumView = new ProvinceMuseumView({
                model: museumModel
            });
            provinceMuseumView.render();

            this.$el.append(provinceMuseumView.$el);
        }
    });

    return MuseumsView;
});
