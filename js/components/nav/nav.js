angular.module("components")

    .component("nav",  {

        templateUrl: '/js/components/nav/nav.html',

        bindings:{
            query: '<'
        }, 

        controller: function (navService) {

            this.$onInit = () => {
                console.log(this)
            }

            this.getSearchquestion = (query)=>{
                AnswersService.getSearchquestion(this.question.id, this.question);
            }
    }
})
    