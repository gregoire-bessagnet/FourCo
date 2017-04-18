// const API_URL = "http://localhost:3000/questions"

angular.module("services")

    .service('formService', ['$http', function ($http) {

        this.valide = (questions) => {
            $http.post(URL_QUEST, questions)
                .then((response) => {
                    var data = response.data;
                });
        }
        
    }]);

