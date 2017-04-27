angular.module("components")

    .component("home", {

        templateUrl: '/js/components/questions/home/home.html',

        bindings: {
            quest: '<',
        },

        controller: ['QuestionService', 'AuthService', function (QuestionService, AuthService) {



            this.$onInit = () => {
                this.quest = [];
                this.currentPage = 1;
                this.pageSize = 4;
                this.getQuest();
                this.pageChangeHandler();
                console.log(this)
            };
            this.isAuthenticated = AuthService.isAuthenticated();

            this.getQuest = () => {
                QuestionService.getQuestions().then((items) => {
                    this.quest = items.data
                }).catch((err) => { });
            };

            this.disconnect = () => {
                AuthService.disconnect();
                this.isAuthenticated = null;
            }

            this.pageChangeHandler = (num) => {
                console.log('quest page changed to ' + num);
            };
        }]
    })
