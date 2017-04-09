const URL_REG = "http://localhost:3000/users"

angular.module("services")

    .service("RegistrationServices", function ($http) {

        this.postUsers = (reg) => {
            return $http.post(URL_REG, reg)
        }


    })