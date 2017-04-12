const URL_USER = "http://localhost:3000/";

angular.module("services")

    .service("UserService", function ($http) {

        this.getUser = (id) => {

            var defer = $q.defer();

            $http.get(URL_USER + "users/" + id + "?_expand=promo").then((response) => {

                var user = response.data;

                $http.get(URL_USER + "schools?id=" + value)

            })




        }







        // this.getUserPromo = (value) => {
        //     return $http.get(URL_USER + "users/" + value + "?_expand=promo")
        // }
        // this.getSchool = (value) => {
        //     return $http.get(URL_USER + "schools?id=" + value)
        // }
        // this.getUserTags = (value) => {
        //     return $http.get(URL_USER + "user_tag?userId=" + value + "&_expand=tag")
        // }


    });

this.getUser = () => {

    UserService.getUserPromo(1).then((items) => {

        this.list = items.data

        UserService.getSchool(this.list.promo.schoolId).then((items) => {
            this.list.school = items.data
        }).catch((err) => { });

        UserService.getUserTags(this.list.id).then((items) => {
            this.list.tags = items.data
        }).catch((err) => { });

    }).catch((err) => { });

