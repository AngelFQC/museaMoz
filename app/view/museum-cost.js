define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/museum-cost.html'
], function($, _, Backbone, MuseumCostTemplate) {
    var MuseumCostView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(MuseumCostTemplate),
        initialize: function() {
            this.render();
        },
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.el.setAttribute('role', 'presentation');
            this.el.innerHTML = compiledTemplate;
        }
    });

    return MuseumCostView;
});
