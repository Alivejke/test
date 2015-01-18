define([
    'app',
    'text!templates/issue.html',

    'marionette'
], function (
    app,
    issuesListItemTpl
) {
    return Backbone.Marionette.ItemView.extend({
        className: 'issue',
        tagName: 'ul',

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