define([
    'app',

    'views/issues-search-view',
    'models/search-form-model',
    'collections/issues-list-collection',

    'views/issue-view',
    'models/issue-model',

    'marionette'
], function (
    app, 
    IssuesSearchView,
    SearchFormModel,
    IssuesListCollection,

    IssueView,
    IssueModel
) {
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {

        },

        index: function () {
            app.contentRegion.show( new IssuesSearchView({
                model: new SearchFormModel(),
                collection: new IssuesListCollection() 
            }) );
        },

        showIssuesList: function (owner, repo) {
            var issuesListCollection = new IssuesListCollection();

            app.contentRegion.show( new IssuesSearchView({
                model: new SearchFormModel({
                    ownerName: owner,
                    repositoryName: repo
                }),
                collection: issuesListCollection
            }) );

            issuesListCollection.setCollectionUrl();
            issuesListCollection.fetch({reset: true});
        },

        showIssue: function (owner, repo, number) {
            console.log(1);
            
            var issueModel = new IssueModel();

            issueModel.url = app.baseUrl + 'repos/' + owner + '/' + repo + '/issues/' + number;

            issueModel.fetch({
                success: function() {
                    console.log(issueModel);
                    app.contentRegion.show( new IssueView({
                        model: issueModel
                    }) );
                }
            });
        }
    });
});