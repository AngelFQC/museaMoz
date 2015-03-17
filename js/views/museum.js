define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {
    var RegionView = Backbone.View.extend({
        el: '#museum',
        initialize: function() {
        },
        render: function() {
            if (this.model) {
                this.$el.find('header h1 small').text(this.model.get('name'));
            }

            return this;
        },
        events: {
            'click header a': 'backOnClick'
        },
        backOnClick: function(e) {
            this.closeView();
        },
        openView: function() {
            this.el.className = 'inactive-view to-left';
        },
        closeView: function() {
            this.el.className = 'inactive-view to-left to-right';
        }
    });

    return RegionView;
});
