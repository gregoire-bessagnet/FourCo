angular.module("components")

    .component("answers", {

        templateUrl: '/js/components/questions/answers/answers.html',

        bindings: {
            question: '<',
        },

        controller: function () {

            this.$onInit = () => {
                console.log(this)
            }
        }
    })