const URL = "http://localhost:3000/";

angular.module("services",[])

    .service("UserService", function ($http) {


        this.getUserPromo = () => {
            return $http.get(URL + "users/2?_expand=promo")
        }
        this.getSchool = (value) => {
            return $http.get(URL + "schools?id=" + value)
        }
        this.getUserTags = (value) => {
            return $http.get(URL + "user_tag?userId=" + value + "&_expand=tag")
        }


    });