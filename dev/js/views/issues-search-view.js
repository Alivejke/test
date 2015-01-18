define([
    'app',
    'views/issues-list-item-view',
    'text!templates/issues-search.html',

    'backbone.modelbinder',
    'marionette'
], function (
    app,
    IssuesListItemView,
    issuesSearchTpl,
    ModelBinder
) {
    return Backbone.Marionette.CompositeView.extend({
        className: 'issues_search',
        tagName: 'div',

        childView: IssuesListItemView,
        childViewContainer: '#issues_list tbody',

        template: _.template(issuesSearchTpl),

        events: {
            'submit #search_form':      'onSearchFormSubmit'
        },

        bindings: {
            '#owner_name':              'ownerName',
            '#repository_name':         'repositoryName'
        },

        initialize: function () {
            var self = this;

            self.listenTo(self.collection, 'select', self.onCollectionItemSelect);

            self.modelBinder = new Backbone.ModelBinder();
        },

        onRender: function () {
            var self = this;

            self.modelBinder.bind(self.model, self.el);
        },

        onCollectionItemSelect: function (model) {
            var self = this,
                url = '/repos/' + self.model.get('ownerName') + '/' + self.model.get('repositoryName') + '/issues/' + model.get('number');

            app.appRouter.navigate(url, true)
        },

        onSearchFormSubmit: function (event) {
            event.preventDefault();

            var self = this,
                url = 'repos/' + self.model.get('ownerName') + '/' + self.model.get('repositoryName') + '/issues';

            app.appRouter.navigate(url)

            self.setCollectionUrl();

            self.collection.fetch({reset: true});
        },

        setCollectionUrl: function () {
            var self = this;

            self.collection.url = app.baseUrl + 'repos/' + self.model.get('ownerName') + '/' + self.model.get('repositoryName') + '/issues';
        }
    });
});