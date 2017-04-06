angular.module("components")

    .component("userProfile", {

        templateUrl: '/js/components/users/profile/profile.html',

        bindings: {
            list: '<',

        },
        controller: ['UserService', function (UserService) {

            this.list = [];

            this.$onInit = () => {
                this.getUser();
            };

            this.getUser = () => {

                UserService.getUserPromo().then((items) => {

                    this.list = items.data

                    UserService.getSchool(this.list.promo.schoolId).then((items) => {
                        this.list.school = items.data
                        console.log(this.list)
                    }).catch((err) => { });

                    UserService.getUserTags(this.list.id).then((items) => {
                        this.list.tags = items.data
                    }).catch((err) => { });

                }).catch((err) => { });


            };
        }]
    })
