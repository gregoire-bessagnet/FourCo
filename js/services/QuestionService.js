const URL_QUEST = "http://localhost:3000/"

angular.module("services")

    .service("QuestionService", function ($http) {

        this.getQuestions = () => {
            return $http.get(URL_QUEST + "questions/?_expand=user") 
        }   
    });
