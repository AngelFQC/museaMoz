define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/region-province.html'
], function($, _, Backbone, RegionProvinceTemplate) {
    var RegionProvince = Backbone.View.extend({
        tagName: 'li',
        template: _.template(RegionProvinceTemplate),
        render: function() {
            var compiledTemplate = this.template(this.model.toJSON());

            this.$el.html(compiledTemplate);
        }
    });

    return RegionProvince;
});
