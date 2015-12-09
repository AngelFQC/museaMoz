define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/museum-contact.html'
], function($, _, Backbone, MuseumContactTemplate) {
    var MuseumContactView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(MuseumContactTemplate),
        initialize: function() {
            this.render();
        },
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.el.setAttribute('role', 'presentation');
            this.el.innerHTML = compiledTemplate;
        }
    });

    return MuseumContactView;
});
