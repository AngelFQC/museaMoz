requirejs.config({
    paths: {
        jquery: 'libs/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        templates: '../templates'
    }
});

requirejs(
    ['app'],
    function(App) {
        App.initialize();
    }
);
