angular.module("components")

    .component("answers", {

        templateUrl: '/js/components/questions/answers/answers.html',

        bindings: {
            question: '<',
        },

        controller: function (AnswersService) {

            this.likeQuestion = ()=>{
                AnswersService.likeQuestion(this.question.id,this.question);
            }
            this.likeAnswer = (answer) => {
                AnswersService.likeAnswer(answer.id,answer);
            }
        }
    })