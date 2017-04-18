angular.module("components")

    .component("answers", {

        templateUrl: '/js/components/questions/answers/answers.html',

        bindings: {
            question: '<',
        },

        controller: function (AnswersService) {

            this.submit = () => {
                this.postAnswers();
            }

            this.postAnswers = () => {
                this.answer = {
                    content: this.answer.content,
                    userId: "1",
                    questionId: this.question.id,
                    date: new Date(), 
                    likes: 0
                }
                AnswersService.postAnswers(this.answer)
            }

            this.likeQuestion = ()=>{
                AnswersService.likeQuestion(this.question.id,this.question);
            }
            this.likeAnswer = (answer) => {
                AnswersService.likeAnswer(answer.id,answer);
            }
        }
    })