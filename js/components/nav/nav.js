angular.module("components")

    .component("nav", {

        templateUrl: '/js/components/nav/nav.html',

        bindings:{
            query:'<'
        }, 

        controller: function (NavService) {

            this.$onInit = () => {
                console.log(this)
            }

            this.likeQuestion = ()=>{
                AnswersService.likeQuestion(this.question.id,this.question);
            }
            this.likeAnswer = (answer) => {
                AnswersService.likeAnswer(answer.id,answer);
            }
        }

    })