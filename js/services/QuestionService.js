const URL_QUEST = "http://localhost:3000/"
// const URL_QUEST = "http://localhost:3000/questions?_page="    

angular.module("services")

    .service("QuestionService", function ($http) {

        this.getQuestions = (page) => {
            return $http.get(URL_QUEST + "question_tag?_expand=question&_expand=tag") 
        }     
        
    });

   //+ page + "&_limit=15"