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
        url: '/profile/:userId',
        component: 'userProfile',
        resolve: {
          user: function (UserService, $stateParams) {
            return UserService.getUser($stateParams.userId);
          }
        }
      })

      .state({
        name: 'usersList',
        url: '/usersList',
        component: 'usersList',
        resolve: {
          users: function (UsersService, $stateParams) {
            return UsersService.getUsers();
          }
        }
      })

      .state({
        name: 'registration',
        url: '/registration',
        component: 'registration'
      })

      .state({
        name: 'formulaireQ',
        url: '/formulaireQ',
        component: 'postQuestion'
      })

      .state({
        name: 'retourHome',
        url: '/home',
        component: 'home'
      })

      .state({
        name: 'validerQ',
        url: '/home',
        component: 'home',
        resolve: {
          questions: function (QuestionService, $stateParams) {
            return QuestionService.getQuestions($stateParams.questionId);
          }
        }
      })

    $urlRouterProvider.otherwise('/home')
  })