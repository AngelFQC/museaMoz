define([
    'jquery',
    'underscore',
    'backbone',
    'views/flickr-photos',
    'views/sidebar-regions'
], function($, _, Backbone, FlickrPhotosView, SidebarRegionsView) {
    var IndexView = Backbone.View.extend({
        el: '#index',
        flickrPhotosView: null,
        sidebarRegionsView: null,
        initialize: function() {
            this.flickrPhotosView = new FlickrPhotosView({
                text: 'peru tourism culture',
                perPage: 15
            });

            this.sidebarRegionsView = new SidebarRegionsView();
        },
        render: function() {
            this.$el.find('#sidebar-regions').html(this.sidebarRegionsView.$el);
            this.$el.find('article').append(this.flickrPhotosView.$el);

            return this;
        },
        closeView: function() {
            this.$el.addClass('active-view to-left');
        },
        openView: function() {
            this.$el.removeClass('active-view to-left');
        }
    });

    return IndexView;
});
