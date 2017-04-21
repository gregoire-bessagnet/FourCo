angular.module("components")

    .component("home", {

        templateUrl: '/js/components/questions/home/home.html',

        bindings: {
            quest: '<',

        },

        controller: ['QuestionService', 'AuthService', function (QuestionService, AuthService) {


            this.$onInit = () => {
                this.quest = [];
                this.getQuest();
                console.log(this)
            };
            this.isAuthenticated = AuthService.isAuthenticated();


            this.getQuest = () => {
                QuestionService.getQuestions().then((items) => {
                    this.quest = items.data
                }).catch((err) => {});
            };

            this.disconnect = () => {
                AuthService.disconnect();
                this.isAuthenticated = null;
            }
        }]
    })