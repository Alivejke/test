define([
    'models/issues-list-item-model',

    'marionette'
], function (IssuesListItemModel) {
    return Backbone.Collection.extend({
        model: IssuesListItemModel
    }); 
});