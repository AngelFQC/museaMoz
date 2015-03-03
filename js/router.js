define([
    'jquery',
    'underscore',
    'backbone',
    'views/index'
], function($, _, Backbone, IndexView) {
    var STATUS_INDEX = 'index',
        status = null;

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showIndex'
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;
        appRouter.on('route:showIndex', function() {
            if (status !== STATUS_INDEX) {
                var indexView = new IndexView();
                indexView.render();

                status = STATUS_INDEX;
            }
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
