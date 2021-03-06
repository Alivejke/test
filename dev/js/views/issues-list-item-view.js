define([
    'app',
    'text!templates/issues-list-item.html',

    'marionette'
], function (
    app,
    issuesListItemTpl
) {
    return Backbone.Marionette.ItemView.extend({
        className: 'issues_table_item',
        tagName: 'tr',

        template: _.template(issuesListItemTpl),

        events: {
            'click': 'onIssueClick'
        },

        onIssueClick: function () {
            event.preventDefault();

            var self = this;

            self.model.collection.trigger('select', self.model);
        }
    });
});