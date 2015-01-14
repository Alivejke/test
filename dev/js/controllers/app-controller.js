define([
    'app',
    'views/search-form-view',

    'marionette'
], function (App, SearchFormView) {
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {

        },

        index: function () {
            App.contentRegion.show(new SearchFormView());
        }
    });
});