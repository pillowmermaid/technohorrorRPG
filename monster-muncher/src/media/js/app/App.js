define(
    [
        'backbone',
        'app/AppRouter',
        'areas/arena/Arena',
        'playerMenu/player/PlayerView',
    ],
    function(Backbone, AppRouter, Arena, PlayerView) {
        'use strict';

        var App = {
            start: function() {
                PlayerView.render();
                Arena.render();
                var router = new AppRouter();
                Backbone.history.start();
            },
            restart: function(){

            }
        }
        return App;
    }
);