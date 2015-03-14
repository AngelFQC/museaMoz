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
            _.each(this.collection.models, this.addMuseum, this);

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
