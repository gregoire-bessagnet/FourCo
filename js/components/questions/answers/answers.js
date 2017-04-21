angular.module("components")

    .component("answers", {

        templateUrl: '/js/components/questions/answers/answers.html',

        bindings: {
            question: '<',
        },

        controller: function (AnswersService,AuthService) {

            this.$onInit = () => {
                this.isAuthenticated = AuthService.isAuthenticated();
                this.currentUser = AuthService.getCurrentUser();
            }

            this.submit = () => {
                this.postAnswers();
            }

            this.postAnswers = () => {
                this.answer = {
                    content: this.answer.content,
                    userId: this.currentUser.id,
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