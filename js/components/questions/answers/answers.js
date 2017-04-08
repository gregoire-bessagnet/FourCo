angular.module("components")

    .component("answers", {

        templateUrl: '/js/components/questions/answers/answers.html',

        bindings: {
            answ: '<',

        },

        controller: ['AnswersServices', function (AnswersServices) {

            this.answ = [];

            this.$onInit = () => {
                this.getAnsw();
                console.log(this)

            }

            this.getAnsw = () => {
                AnswersServices.getQuestion(1).then((items) => {
                    this.answ = items.data;
                    AnswersServices.getAnswers(this.answ.id).then((items) => {
                        this.answ.answers = items.data
                    }).catch((err) => { });
                }).catch((err) => { });
            }
        }]
    })