define([
    'text!templates/issues-search-layout.html',

    'marionette'
], function (
    issuesSearchLayoutTpl
) {
    return Backbone.Marionette.LayoutView.extend({
        template: issuesSearchLayoutTpl,

        regions: {
            searchForm: {
                selector: "#search_form"
            },
            issuesList: {
                selector: "#issues_list"
            }
        }
    });
});