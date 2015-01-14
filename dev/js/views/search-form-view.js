define([
    'text!templates/search-form.html',
    'marionette'
], function (searchFromTpl) {
    return Backbone.Marionette.ItemView.extend({
        template: searchFromTpl
    }); 
});