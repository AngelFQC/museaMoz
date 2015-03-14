define([
    'jquery',
    'underscore',
    'backbone',
    'views/index',
    'views/region',
    'collections/ubigeos',
    'views/province'
], function($, _, Backbone, IndexView, RegionView, UbigeosCollection, ProvinceView) {
    var STATUS_INDEX = 'index',
        status = null;

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showIndex',
            'region/:id': 'showRegion',
            'region/:coddpto/province/:codprov': 'showProvince'
        }
    });

    var indexView = null,
        regionView = null,
        provinceView = null;

    var initialize = function() {
        var appRouter = new AppRouter;
        appRouter.on('route:showIndex', function() {
            if (status !== STATUS_INDEX) {
                indexView = new IndexView();
                indexView.render();

                status = STATUS_INDEX;
            }
        });
        appRouter.on('route:showRegion', function(coddpto) {
            var ubigeosCollection = new UbigeosCollection();

            var ubigeosFetch = ubigeosCollection.fetch();

            $.when(ubigeosFetch).done(function() {
                var regionModel = ubigeosCollection.findWhere({
                    coddpto: parseInt(coddpto),
                    codprov: 0,
                    coddist: 0
                });

                regionView = new RegionView({
                    model: regionModel
                });
                regionView.render();
                regionView.openView();
            });
        });
        appRouter.on('route:showProvince', function(coddpto, codprov) {
            var ubigeosCollection = new UbigeosCollection();

            var ubigeosFetch = ubigeosCollection.fetch();

            $.when(ubigeosFetch).done(function() {
                var provinceModel = ubigeosCollection.findWhere({
                    coddpto: parseInt(coddpto),
                    codprov: parseInt(codprov),
                    coddist: 0
                });

                provinceView = new ProvinceView({
                    model: provinceModel
                });
                provinceView.render();
                provinceView.openView();
            });
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
