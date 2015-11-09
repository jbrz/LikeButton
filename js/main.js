import angular from 'angular';
import LikeMyController from './controllers/likecontroller';

console.log('angular v'+angular.version.full);

angular.module('like',[])

.controller('LikeMyController',LikeMyController);