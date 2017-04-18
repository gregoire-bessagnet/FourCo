angular.module("components")

    .component("nav",  {

        templateUrl: '/js/components/nav/nav.html',

        bindings:{
            query:'<'
        }, 

        controller: function (navService) {

            this.$onInit = () => {
                console.log(this)
            }

        searchquestion.filter('searchFor', function(){
            return function(arr, query){
                if(!query){
                return arr;
        }
        var result = [];
        query = query.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(query) !== -1){
            result.push(item);
        }
        });
        return result;
    };
});

        }
    });

    