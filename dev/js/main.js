require([
    'routers/app-router', 
    'controllers/app-controller',
    'app'
], function (
    AppRouter, 
    AppController,
    app
) {

    app.appRouter = new AppRouter({
        controller: new AppController()
    });

    app.start();
});