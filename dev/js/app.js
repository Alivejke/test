define([
    'marionette'
], function (
    Marionette
) {
    var App = new Backbone.Marionette.Application();

    App.addInitializer(function () {
        Backbone.history.start({pushState: true});
    });

    App.addRegions({
        contentRegion: '#content'
    });

    return App;
});