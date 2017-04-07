const URL_USER = "http://localhost:3000/";

angular.module("services")

    .service("UserService", function ($http) {

        this.getUser = () => {
            return $http.get(URL_USER + "users/1")
        }
        this.getUserPromo = () => {
            return $http.get(URL_USER + "users/2?_expand=promo")
        }
        this.getSchool = (value) => {
            return $http.get(URL_USER + "schools?id=" + value)
        }
        this.getUserTags = (value) => {
            return $http.get(URL_USER + "user_tag?userId=" + value + "&_expand=tag")
        }


    });