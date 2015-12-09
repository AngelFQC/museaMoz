define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/museum-location.html'
], function($, _, Backbone, MuseumLocationTemplate) {
    var MuseumLocationView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(MuseumLocationTemplate),
        initialize: function() {
            this.render();
        },
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.el.setAttribute('role', 'presentation');
            this.el.innerHTML = compiledTemplate;
        }
    });

    return MuseumLocationView;
});
