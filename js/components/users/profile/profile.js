angular.module("components")

    .component("userProfile", {

        templateUrl: '/js/components/questions/question/users/profile/profile.html',

        bindings: {
            user: '<',
        },
        
        controller: function () {

            this.$onInit = () => {
                console.log(this)
            }
        }
    })
