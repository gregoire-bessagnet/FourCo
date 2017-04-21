angular.module("components")

    .component("registration", {

        templateUrl: '/js/components/users/registration/registration.html',

        bindings: {
            redirect: '<'
        },

        controller: ['RegistrationServices', 'AuthService','$state', function (RegistrationServices, AuthService, $state) {


            this.$onInit = () => {
                RegistrationServices.getPromos().then((response) => {
                    this.promos = response.data;
                    console.log(this.promos)
                }).catch((err) => {});

                this.errorMessage = '';
                this.user = {};
                
                console.log(this.redirect)
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
                if (this.reg.promoId == 0) {
                    this.alert.promo = "chanp obligatoire"
                } else {
                    RegistrationServices.postUsers(this.reg)
                }
            }
            this.submit = (user) => {

                AuthService.connect(user.email, user.password).then(() => {
                    $state.go(this.redirect ? this.redirect : 'home');
                }).catch(() => {
                    this.errorMessage = `Utilisateur introuvable ou mot de passe invalide`;
                })
            }
        }]
    })