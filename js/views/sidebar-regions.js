define([
    'jquery',
    'underscore',
    'backbone',
    'views/sidebar-region'
], function($, _, Backbone, SidebarRegionView) {
    var SidebarRegionsView = Backbone.View.extend({
        tagName: 'ul',
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
