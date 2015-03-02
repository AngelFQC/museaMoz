define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var FlickrPhotoModel = Backbone.Model.extend({
        defaults: {
            src: null,
            alt: null
        }
    });

    return FlickrPhotoModel;
});
