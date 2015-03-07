define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var FlickrPhotoView = Backbone.View.extend({
        tagName: 'img',
        render: function() {
            this.el.src = this.model.get('src');
            this.el.alt = this.model.get('alt');

            return this;
        }
    });

    return FlickrPhotoView;
});
