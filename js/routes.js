angular.module("app")

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state({
        name: 'home',
        url: '/home',
        component: 'home'
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
        url: '/profile',
        component: 'userProfile'
      })

      .state({
        name: 'registration',
        url: '/registration',
        component: 'registration'
      })

    $urlRouterProvider.otherwise('/home')
  })