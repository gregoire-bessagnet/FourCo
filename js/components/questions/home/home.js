angular.module("components")

    .component("home", {

        templateUrl: '/js/components/questions/home/home.html',

        bindings: {
            quest: '<',

        },

        controller: ['QuestionService', function (QuestionService) {

            this.quest = [];

            this.$onInit = () => {
                this.getQuest();
                console.log(this)
            };

            this.getQuest = () => {
                QuestionService.getQuestions().then((items) => {
                    this.quest = items.data
                    console.log(this.quest)

                }).catch((err) => { });
            };
        }]
    })

