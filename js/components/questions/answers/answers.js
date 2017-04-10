angular.module("components")

    .component("answers", {

        // templateUrl: '/js/components/questions/answers/answers.html',
        template: '<div>COUCOU</div>',
        bindings: {
             answ: '<',
        },

        controller: function () {

            this.$onInit = () => {
                console.log(this.answ)
            }
        }
    });