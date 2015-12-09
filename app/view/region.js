define([
    'jquery',
    'underscore',
    'backbone',
    'views/provinces'
], function($, _, Backbone, ProvincesView) {
    var RegionView = Backbone.View.extend({
        el: '#region',
        provincesView: null,
        initialize: function() {
            if (this.model) {
                this.provincesView = new ProvincesView({
                    model: this.model
                });
            }
        },
        render: function() {
            if (this.model) {
                this.$el.find('header h1').text(this.model.get('nombre'));
                this.$el.find('article').html(this.provincesView.$el);
            }

            return this;
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
