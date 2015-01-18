define([
    'app',
    'views/issues-list-item-view',

    'marionette'
], function (
    app,
    IssuesListItemView
) {
    return Backbone.Marionette.CollectionView.extend({
        className: 'issues_list',
        tagName: 'table',
        childView: IssuesListItemView,

        initialize: function () {
            var self = this;
            
            app.commands.setHandler('fetchIssuesList', function(data) {
                self.setCollectionUrl(data);

                self.collection.fetch({
                    reset: true
                });
            });
        },

        setCollectionUrl: function (options) {
            var self = this;

            self.collection.url = app.baseUrl + 'repos/' + options.ownerName + '/' + options.repositoryName + '/issues';
        }
    });
});