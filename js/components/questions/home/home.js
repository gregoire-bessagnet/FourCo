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
                QuestionService.getQuestions().then((response) => {
                    this.quest = response.data
                }).catch((err) => {});
            };
        }]
    })
