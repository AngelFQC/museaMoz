define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var UbigeoModel = Backbone.Model.extend({
        defaults: {
            coddpto: 0,
            codprov: 0,
            coddist: 0,
            nombre: ''
        }
    });

    return UbigeoModel;
});
