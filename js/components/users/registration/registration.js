angular.module("components")

    .component("registration", {

        templateUrl: '/js/components/users/registration/registration.html',

        controller: ['RegistrationServices', function (RegistrationServices) {

            this.reg = {
                firstname: "",
                lastname: "",
                age: "",
                mail: "",
                social1: ""
            };
            this.alert = [];

            this.submit = () => {
                this.postUser();
            };

            this.postUser = () => {
                    
                if (this.reg.firstname == "") {
                    this.alert.firstname = "RENTRE UN PRENOM";
                }
                if (this.reg.lastname == "") {
                    this.alert.lastname = "RENTRE UN NOM";
                }
                if (this.reg.age == "") {
                    this.alert.age = "RENTRE TON AGE";
                }
                if (this.reg.mail == "") {
                    this.alert.mail = "RENTRE TON MAIL"
                }
                if (this.reg.firstname == "") {
                    this.alert.social1 = "RENTRE TON SOCIAL"
                }
                else {
                    RegistrationServices.postUsers(this.reg)
                }
            }
        }]
    })