define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/museum-info.html'
], function($, _, Backbone, MuseumInfoTemplate) {
    var MuseumInfo = Backbone.View.extend({
        tagName: 'li',
        className: 'active',
        template: _.template(MuseumInfoTemplate),
        initialize: function() {
            this.render();
        },
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.el.setAttribute('role', 'presentation');
            this.el.innerHTML = compiledTemplate;
        }
    });

    return MuseumInfo;
});
