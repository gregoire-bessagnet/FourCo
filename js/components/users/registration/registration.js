angular.module("components")

    .component("registration", {

        templateUrl: '/js/components/questions/question/users/registration/registration.html',

        controller: ['RegistrationServices', function (RegistrationServices) {

            this.reg = {
                firstname: "",
                lastname: "",
                age: "",
                mail: "",
                social1: "",
                promoId: 0
            };
            this.alert = [];
            this.promos = [];

            this.$onInit = () => {
                RegistrationServices.getPromos().then((response) =>{
                    this.promos = response.data;
                    console.log(this.promos)
                }).catch((err) => { });
            }

            this.submit = () => {
                this.postUser();
            };

            this.postUser = () => {
                    
                if (this.reg.firstname == "") {
                    this.alert.firstname = "chanp obligatoire";
                }
                if (this.reg.lastname == "") {
                    this.alert.lastname = "chanp obligatoire";
                }
                if (this.reg.age == "") {
                    this.alert.age = "chanp obligatoire";
                }
                if (this.reg.mail == "") {
                    this.alert.mail = "chanp obligatoire"
                }
                if (this.reg.promoId == 0){
                    this.alert.promo = "chanp obligatoire"
                }
                else {
                    RegistrationServices.postUsers(this.reg)
                }
            }
        }]
    })