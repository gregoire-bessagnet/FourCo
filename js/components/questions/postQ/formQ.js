angular.module("components")
    .component('postQuestion', {

        templateUrl: '/js/components/questions/postQ/formQ.html',

        bindings: {
            questions: "<"
        },

        controller: ['formService', 'AuthService', function (formService, AuthService) {

            this.$onInit = () => {
                this.user = AuthService.getCurrentUser();
                console.log(this)
            }

            this.add = () => {
                var submit = {
                    title: this.name,
                    content: this.body,
                    date: new Date(),
                    userId: this.user.id,
                    likes: 0
                }
                formService.valide(submit);
            };
        }]
    });