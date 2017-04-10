'use strict'

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
        url: '/answers',
        component: 'answers',
        resolve: {
          question: function (AnswersService) {
            return AnswersService.getQuestion(1);
          }
        }
      })
      .state({
        name: 'user',
        url: '/user',
        component: 'userProfile'
      });

    $urlRouterProvider.otherwise('/home');
  });
