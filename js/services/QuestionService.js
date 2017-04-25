const URL_QUEST = "http://localhost:3000/questions"
 

angular.module("services")

    .service("QuestionService", function ($http) {

        this.getQuestions = (page) => {
            return $http.get(URL_QUEST) 
        }     
    });

   