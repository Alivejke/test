define([
    'app',
    'text!templates/search-form.html',

    'backbone.modelbinder',
    'marionette'
], function (
    app,
    searchFormTpl,
    ModelBinder
) {
    return Backbone.Marionette.ItemView.extend({
        className: 'search_form',
        tagName: 'form',

        template: searchFormTpl,

        events: {
            'submit':               'onSearchFormSubmit'
        },

        bindings: {
            '#owner_name':          'ownerName',
            '#repository_name':     'repositoryName'
        },

        initialize: function () {
            var self = this;

            self.modelBinder = new Backbone.ModelBinder();
        },

        onRender: function () {
            var self = this;

            self.modelBinder.bind(self.model, self.el);
        },

        onSearchFormSubmit: function (event) {
            event.preventDefault();

            var self = this;

            app.execute('fetchIssuesList', self.model.toJSON());
        }
    }); 
});