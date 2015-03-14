define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/province-museum.html'
], function($, _, Backbone, ProvinceMuseumTemplate) {
    var ProvinceMuseum = Backbone.View.extend({
        tagName: 'li',
        template: _.template(ProvinceMuseumTemplate),
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.$el.html(compiledTemplate);
        }
    });

    return ProvinceMuseum;
});
