const URL_QUEST = "http://localhost:3000/questions/?_expand=user"
// const URL_QUEST = "http://localhost:3000/questions?_page="    

angular.module("services")

    .service("QuestionService", function ($http) {

        this.getQuestions = (page) => {
            return $http.get(URL_QUEST) 
        }     
    });

   //+ page + "&_limit=15"