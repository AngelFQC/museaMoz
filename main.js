requirejs.config({
    baseUrl: 'app',
    urlArgs: "v=" +  (new Date()).getTime(),
    paths: {
        jquery: '../libs/jquery-min',
        underscore: '../libs/underscore-min',
        backbone: '../libs/backbone-min',
        text: '../libs/text'
    }
});

requirejs(
    ['app'],
    function(App) {
        App.initialize();
    }
);
