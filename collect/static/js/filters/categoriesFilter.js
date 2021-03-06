angular.module('wibeeApp')
.filter('category', function () {
   return function (places, category) {
       if (!category) {
           return places;
       }
       return places.filter(function (place) {
           return place.category === category;
       });
   };
})
.filter('visited', function () {
    return function (places, status) {
        if (!status) {
            return places;
        }
        return places.filter(function (place) {
            return place.status;
        });
    };
});