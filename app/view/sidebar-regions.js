define([
    'jquery',
    'underscore',
    'backbone',
    'collection/ubigeos',
    'view/sidebar-region'
], function($, _, Backbone, UbigeosCollection, SidebarRegionView) {
    var SidebarRegionsView = Backbone.View.extend({
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
            var regions = this.collection.getRegions();

            _.each(regions, this.addRegion, this);

            return this;
        },
        addRegion: function(ubigeoModel) {
            var sidebarRegionView = new SidebarRegionView({
                model: ubigeoModel
            });
            sidebarRegionView.render();

            this.$el.append(sidebarRegionView.$el);
        }
    });

    return SidebarRegionsView;
});
