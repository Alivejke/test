define([
    'app',
    'views/issues-search-layout-view',
    'views/search-form-view',
    'views/issues-list-view',
    'models/search-form-model',
    'collections/issues-list-collection',

    'marionette'
], function (
    app, 
    IssuesSearchLayout,
    SearchFormView,
    IssuesListView,
    SearchFormModel,
    IssuesListCollection
) {
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {

        },

        index: function () {
            var indexLayout = new IssuesSearchLayout();

            app.contentRegion.show(indexLayout);

            indexLayout.getRegion('searchForm').show( new SearchFormView({
                model: new SearchFormModel()
            }) );
            
            indexLayout.getRegion('issuesList').show( new IssuesListView({
                collection: new IssuesListCollection() 
            }) );
        }
    });
});