define([
    'marionette'
], function(Marionette) {
    return Backbone.Marionette.AppRouter.extend({
        appRoutes: {
           '': 'index'
        }
    });
});