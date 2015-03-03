define([
    'jquery',
    'underscore',
    'backbone',
    'views/flickr-photos',
    'views/sidebar-regions',
    'text!templates/index.html'
], function($, _, Backbone, FlickrPhotosView, SidebarRegionsView, IndexTemplate) {
    var IndexView = Backbone.View.extend({
        el: 'body',
        flickrPhotosView: null,
        sidebarRegionsView: null,
        template: _.template(IndexTemplate),
        initialize: function() {
            this.flickrPhotosView = new FlickrPhotosView({
                text: 'peru tourism culture',
                perPage: 15
            });

            this.sidebarRegionsView = new SidebarRegionsView();
        },
        render: function() {
            var compiledTemplate = this.template({});

            this.$el.append(compiledTemplate);
            this.$el.find('#sidebar-regions').html(this.sidebarRegionsView.$el);
            this.$el.find('#main-content').html(this.flickrPhotosView.$el);

            return this;
        }
    });

    return IndexView;
});
