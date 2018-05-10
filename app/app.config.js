'use strict';

angular.
  module('phonecatApp').
  config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/phones');
      $stateProvider
        .state('phones', {
          url: '/phones',
          component: 'phoneList'
        })
        // for nested components
        // .state('phones.detail', {
        //   url: '/:id',
        //   component: 'phoneDetail'
        // })
        .state('detail', {
          url: '/phones/:id',
          component: 'phoneDetail'
        })
    }
  ]);
