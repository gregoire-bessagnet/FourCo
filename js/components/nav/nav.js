angular.module("components")

    .component("nav", {

        templateUrl: '/js/components/nav/nav.html',

        bindings:{
            query:'<'
        }, 

        controller: function (navService) {

            this.$onInit = () => {
                console.log(this)
            }
        }
    });

    