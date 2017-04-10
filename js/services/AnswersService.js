const URL_ANSWER = "http://localhost:3000/"

angular.module("services")

  .service("AnswersService", function ($http, $q) {

    this.getQuestion = (id) => {

      var defer = $q.defer();

      $http.get(URL_ANSWER + "questions/" + id + "?_expand=user").then((response) => {

        var question = response.data;

        $http.get(URL_ANSWER + "answers?questionId=" + id + "&_expand=user").then((response) => {

          question.answers = response.data;
          defer.resolve(question);

        }).catch((response) => {
          defer.reject(response.statusText);
        });
      }).catch((response) => {
        defer.reject(response.statusText);
      });

      return defer.promise;
    }

  });