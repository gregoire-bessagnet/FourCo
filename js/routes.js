angular.module("app")

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state({
        name: 'home',
        url: '/home',
        component: 'home'
      })

      .state({
        name: 'nav',
        url: '/home',
        component: 'nav'
      })


      .state({
        name: 'answers',
        url: '/answers/:questionId',
        component: 'answers',
        resolve: {
          question: function (AnswersService, $stateParams) {
            return AnswersService.getQuestion($stateParams.questionId);
          }
        }
      })
      .state({
        name: 'profile',
        url: '/profile/:userId',
        component: 'userProfile',
        resolve:{
          user: function (UserService,$stateParams) {
            return UserService.getUser($stateParams.userId);
          }
        }
      })

      .state({
        name: 'registration',
        url: '/registration',
        component: 'registration'
      })

    $urlRouterProvider.otherwise('/home')
  })