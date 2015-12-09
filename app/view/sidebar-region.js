define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/sidebar-region.html'
], function($, _, Backbone, SidebarRegionTemplate) {
    var SidebarRegionView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(SidebarRegionTemplate),
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.$el.html(compiledTemplate);

            return this;
        }
    });

    return SidebarRegionView;
});
