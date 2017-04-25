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

           
            // this.nextQuest = () => {
            //     this.currentPage += 1;
            //     this.getQuest(this.currentPage);
            // }

            // this.prevQuest = () => {
            //     this.currentPage -= 1;
            //     this.getQuest(this.currentPage);
            // } page A mettre en paramétre à the getQuest et getQuestions

        }]
    })
