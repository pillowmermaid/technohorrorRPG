define(
    [
        'backbone',
        'playerMenu/player/tummy/Food',
    ],
    function(Backbone, Food) {
        var Tummy = Backbone.Collection.extend({
            model: Food,
        });
        return Tummy;
    }
);