define([
    "underscore",
    "backbone",
    "model/flickr-photo"
], function(_, Backbone, FlickrPhotoModel) {
    var FlickrPhotosCollection = Backbone.Collection.extend({
        model: FlickrPhotoModel,
        url: function() {
            var method = "flickr.photos.search",
                apiKey = "3f88989f019d9839a86b272ef9de2c2c",
                sort = "relevance";

            return "https://api.flickr.com/services/rest/?method=" + method + "&api_key=" + apiKey
                + "&sort=" + sort + "&extras=url_q&page=1"
                + "&format=json&jsoncallback=?";
        },
        parse: function(flickrResponse) {
            if (!flickrResponse.photos || !flickrResponse.photos.photo) {
                return [];
            }

            var flickrPhotos = new Array();

            _.each(flickrResponse.photos.photo, function(item) {
                flickrPhotos.push({
                    src: item.url_q,
                    alt: item.title
                });
            });

            return flickrPhotos;
        }
    });

    return FlickrPhotosCollection;
});
