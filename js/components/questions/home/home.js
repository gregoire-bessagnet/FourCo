angular.module("components")

    .component("home", {

        templateUrl: '/js/components/questions/home/home.html',

        bindings: {
            quest: '<',

        },

        controller: ['QuestionService' ,function (QuestionService) {

            this.quest = [];
            // this.currentPage = 1;

            this.$onInit = () => {
                this.getQuest(this.currentPage);
                console.log(this)
            };

            this.getQuest = () => {
                QuestionService.getQuestions().then((items) => {
                    this.quest = items.data
                }).catch((err) => { });
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

