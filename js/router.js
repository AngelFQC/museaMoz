define([
    'jquery',
    'underscore',
    'backbone',
    'views/index',
    'views/region',
    'collections/ubigeos'
], function($, _, Backbone, IndexView, RegionView, UbigeosCollection) {
    var STATUS_INDEX = 'index',
        status = null;

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showIndex',
            'region/:id': 'showRegion'
        }
    });

    var indexView = null,
        regionView = null;

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

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
