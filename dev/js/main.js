require([
    'routers/app-router', 
    'controllers/app-controller',
    'app'
], function (
    AppRouter, 
    AppController,
    App
) {

    App.appRouter = new AppRouter({
        controller: new AppController()
    });

    App.start();
});