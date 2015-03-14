define([
    'jquery',
    'underscore',
    'backbone',
    'views/museums'
], function($, _, Backbone, MuseumsView) {
    var ProvinceView = Backbone.View.extend({
        el: '#province',
        museumsView: null,
        initialize: function() {
            if (this.model) {
                this.museumsView = new MuseumsView({
                    model: this.model
                });
            }
        },
        render: function() {
            if (this.model) {
                this.$el.find('header h1').text(this.model.get('nombre'));
                this.$el.find('article').html(this.museumsView.$el);
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

    return ProvinceView;
});
