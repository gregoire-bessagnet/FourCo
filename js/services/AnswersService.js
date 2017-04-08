const URL_ANSWER = "http://localhost:3000/"

angular.module("services")

    .service("AnswersServices", function ($http) {


        this.getAnswers = (value) => {
            return $http.get(URL_ANSWER + "answers?questionId=" + value + "&_expand=user")
        };

        this.getQuestion = (value) => {
            return $http.get(URL_ANSWER + "questions/" + value + "?_expand=user")
        }

    });