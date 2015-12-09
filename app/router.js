define([
    'jquery',
    'underscore',
    'backbone',
    'view/index',
    'view/region',
    'collection/ubigeos',
    'view/province',
    'collection/museums',
    'view/museum'
], function($, _, Backbone, IndexView, RegionView, UbigeosCollection, ProvinceView, MuseumsCollection, MuseumView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showIndex',
            'drawer': 'showIndex',
            'region/:id': 'showRegion',
            'region/:coddpto/province/:codprov': 'showProvince',
            'museum/:id': 'showMuseum'
        }
    });

    var indexView = null,
        regionView = null,
        provinceView = null,
        museumView = null;

    var initialize = function() {
        var appRouter = new AppRouter;
        appRouter.on('route:showIndex', function() {
            if (regionView !== null) {
                regionView.closeView();
            }

            if (indexView === null) {
                indexView = new IndexView();
                indexView.render();
            }
        });
        appRouter.on('route:showRegion', function(coddpto) {
            var ubigeosCollection = new UbigeosCollection();

            var ubigeosFetch = ubigeosCollection.fetch();

            $.when(ubigeosFetch).done(function() {
                if (provinceView !== null) {
                    provinceView.closeView();
                }

                var regionModel = ubigeosCollection.getRegion(coddpto);

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
                if (museumView !== null) {
                    museumView.closeView();
                }

                var provinceModel = ubigeosCollection.getProvince(coddpto, codprov);

                provinceView = new ProvinceView({
                    model: provinceModel
                });
                provinceView.render();
                provinceView.openView();
            });
        });
        appRouter.on('route:showMuseum', function(id) {
            var museumsCollection = new MuseumsCollection();

            var museumsFetch = museumsCollection.fetch();

            $.when(museumsFetch).done(function() {
                var museumModel = museumsCollection.findWhere({
                    _id: parseInt(id)
                });

                museumView = new MuseumView({
                    model: museumModel
                });
                museumView.render();
                museumView.openView();
            });
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
