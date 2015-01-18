define([
    'marionette'
], function (
    Marionette
) {
    var app = new Backbone.Marionette.Application();

    app.addInitializer(function () {
        Backbone.history.start({pushState: true});
    });

    app.addRegions({
        contentRegion: '#content'
    });

    app.baseUrl = 'https://api.github.com/';

    return app;
});