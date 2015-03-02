define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var FlickrPhotoView = Backbone.View.extend({
        tagName: 'li',
        render: function() {
            var image = new Image();
            image.src = this.model.get('src');
            image.alt = this.model.get('alt');

            this.$el.html(image);

            return this;
        }
    });

    return FlickrPhotoView;
});
