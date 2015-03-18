define([
    'jquery',
    'underscore',
    'backbone',
    'views/museum-info',
    'views/museum-cost'
], function($, _, Backbone, MuseumInfoView, MuseumCostView) {
    var RegionView = Backbone.View.extend({
        el: '#museum',
        infoView: null,
        costView: null,
        locationView: null,
        initialize: function() {
            this.infoView = new MuseumInfoView({
                model: this.model
            });
            this.costView = new MuseumCostView({
                model: this.model
            });
        },
        render: function() {
            if (this.model) {
                this.$el.find('header h1 small').text(this.model.get('name'));

                this.$el.find('ul:first').html('');
                this.$el.find('ul:first').append(this.infoView.$el);
                this.$el.find('ul:first').append(this.costView.$el);
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

