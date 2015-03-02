define([
    'jquery',
    'underscore',
    'backbone',
    'collections/flickr-photos',
    'views/flickr-photos',
    'collections/ubigeos',
    'views/sidebar-regions',
    'text!templates/index.html'
], function($, _, Backbone, FlickrPhotosCollection, FlickrPhotosView, UbigeosCollection, SidebarRegionsView, IndexTemplate) {
    var IndexView = Backbone.View.extend({
        el: 'body',
        template: _.template(IndexTemplate),
        initialize: function() {
            this.render();

            var self = this;

            var flickrPhotosCollection = new FlickrPhotosCollection(),
                photosFetch = flickrPhotosCollection.fetch({
                    dataType: 'json',
                    data: {
                        text: 'peru tourism culture',
                        per_page: 15
                    }
                });

            var ubigeosCollection = new UbigeosCollection(),
                ubigeosFetch = ubigeosCollection.fetch();

            $.when(photosFetch).done(function() {
                var flickrPhotosView = new FlickrPhotosView({
                    collection: flickrPhotosCollection
                });
                flickrPhotosView.render();

                self.$el.find('#main-content').html(flickrPhotosView.$el);
            });

            $.when(ubigeosFetch).done(function() {
                var sidebarRegionsView = new SidebarRegionsView({
                    collection: ubigeosCollection
                });
                sidebarRegionsView.render();

                self.$el.find('#sidebar-regions').html(sidebarRegionsView.$el);
            });
        },
        render: function() {
            var compiledTemplate = this.template({});

            this.$el.append(compiledTemplate);

            return this;
        }
    });

    return IndexView;
});
