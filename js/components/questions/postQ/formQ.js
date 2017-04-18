angular.module("components")
    .component('postQuestion', {

        templateUrl: '/js/components/questions/postQ/formQ.html',

        bindings: {
            questions: "<"
        },

        controller: ['formService', function (formService) {

            this.add = () => {
                var submit = {
                    title: this.name,
                    content: this.body,
                    date: new Date(),
                }
                formService.valide(submit);
            };
        }]
    });