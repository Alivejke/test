define([
    'marionette'
], function(Marionette) {
    return Backbone.Marionette.AppRouter.extend({
        appRoutes: {
           '':                                      'index',
           'repos/:owner/:repo/issues':             'showIssuesList',
           'repos/:owner/:repo/issues/:number':     'showIssue'
        }
    });
});