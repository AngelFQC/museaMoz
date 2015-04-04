define([
    'jquery',
    'underscore',
    'backbone',
    'views/museum-info',
    'views/museum-cost',
    'views/museum-contact',
    'views/museum-location'
], function($, _, Backbone, MuseumInfoView, MuseumCostView, MuseumContactView, MuseumLocationView) {
    var RegionView = Backbone.View.extend({
        el: '#museum',
        infoView: null,
        costView: null,
        contactView: null,
        locationView: null,
        initialize: function() {
            this.infoView = new MuseumInfoView({
                model: this.model
            });
            this.costView = new MuseumCostView({
                model: this.model
            });
            this.contactView = new MuseumContactView({
                model: this.model
            });
            this.locationView = new MuseumLocationView({
                model: this.model
            });
        },
        render: function() {
            if (this.model) {
                this.$el.find('header h1 small').text(this.model.get('name'));

                this.$el.find('ul:first').html('');
                this.$el.find('ul:first').append(this.infoView.$el);
                this.$el.find('ul:first').append(this.costView.$el);
                this.$el.find('ul:first').append(this.contactView.$el);
                this.$el.find('ul:first').append(this.locationView.$el);
            }

            return this;
        },
        events: {
            'click .bb-tablist li a': 'tabOnClick'
        },
        openView: function() {
            this.el.className = 'inactive-view to-left';
        },
        closeView: function() {
            this.el.className = 'inactive-view to-left to-right';
        },
        tabOnClick: function(e) {
            e.preventDefault();

            this.$el.find('li[role=presentation]').removeClass('active');

            e.currentTarget.parentNode.className = 'active';
        }
    });

    return RegionView;
});

