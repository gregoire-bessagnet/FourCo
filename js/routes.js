'use strict'

angular.module("app")


  //   $stateProvider

  //     .state({
  //       name: 'answers',
  //       url: '/answers',
  //       component: 'answers'
  //       // resolve: {

  //       //   answ: function (AnswersServices) {
  //       //     AnswersServices.getQuestion(1).then((items) => {
  //       //       var answ = items.data;
  //       //       AnswersServices.getAnswers(answ.id).then((items) => {
  //       //         answ.answers = items.data;
  //       //         return answ;
  //       //       }).catch((err) => { });
  //       //     }).catch((err) => { });
  //       //   }
  //       // }
  //     })

  //     .state({
  //       name: 'user',
  //       url: '/user',
  //       component: 'userProfile'
  //     });

  //   $urlRouterProvider.otherwise('/');
  // });

  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state({
          name: 'answers',
          url: '/answers',
          component: 'answers'
        });

      $urlRouterProvider.otherwise('/');
    });