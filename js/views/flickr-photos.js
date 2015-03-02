define([
    'jquery',
    'underscore',
    'backbone',
    'views/flickr-photo'
], function($, _, Backbone, FlickrPhotoView) {
    var FlickrPhotosView = Backbone.View.extend({
        tagName: 'ul',
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
