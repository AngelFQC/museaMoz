define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var MuseumModel = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            name: null,
            collection: new Array(),
            ubigeo: {
                region: 0,
                province: 0,
                district: 0
            },
            address: null,
            phones: new Array(),
            emails: new Array(),
            tariff: new Array(),
            schedule: new Array(),
            comments: new Array()
        }
    });

    return MuseumModel;
});
