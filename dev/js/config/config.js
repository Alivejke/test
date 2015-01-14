requirejs.config({

    baseUrl: './js/',

    // urlArgs: 'v=' + (new Date()).getTime(),

    paths: {
        'jquery':                 'vendor/jquery.min',
        'underscore':             'vendor/lodash.underscore.min',
        'backbone':               'vendor/backbone',
        'marionette':             'vendor/backbone.marionette.min',
        'backbone.wreqr':         'vendor/backbone.wreqr.min',
        'backbone.babysitter':    'vendor/backbone.babysitter.min',
        'text':                   'vendor/text'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        marionette: {
            deps: ['underscore', 'backbone', 'jquery', 'backbone.wreqr', 'backbone.babysitter'],
            exports: 'Marionette'
        }
    }
});