define([
    'marionette'
], function () {
    return Backbone.Model.extend({
        defaults: {
            ownerName: '',
            repositoryName: ''
        }
    }); 
});