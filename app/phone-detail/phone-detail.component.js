'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$state', '$stateParams', 'Phone',
      function PhoneDetailController($state, $stateParams, Phone) {
        var self = this;
        var phoneId = $stateParams.id;
        console.log(1);
        
        
        self.phone = Phone.get({phoneId: phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
