define([
    'jquery',
    'underscore',
    'backbone',
    'collections/flickr-photos',
    'views/flickr-photo'
], function($, _, Backbone, FlickrPhotosCollection, FlickrPhotoView) {
    var FlickrPhotosView = Backbone.View.extend({
        tagName: 'ul',
        initialize: function(options) {
            var self = this;

            this.collection = new FlickrPhotosCollection();

            var photosFetch = this.collection.fetch({
                dataType: 'json',
                data: {
                    text: options.text,
                    per_page: options.perPage ? options.perPage : 6
                }
            });

            $.when(photosFetch).done(function() {
                self.render();
            });
        },
        render: function() {
            _.each(this.collection.models, this.addPhoto, this);

            return this;
        },
        addPhoto: function(flickrPhotoModel) {
            var flickrPhotoView = new FlickrPhotoView({
                model: flickrPhotoModel
            });
            flickrPhotoView.render();

            this.$el.append(flickrPhotoView.$el);
        }
    });

    return FlickrPhotosView;
});
