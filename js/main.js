import _ from 'underscore';
import moment from 'moment';
import angular from 'angular';
import LikeMyController from './controllers/likecontroller';

console.log('Hello, World');

angular.module('like',[])

.controller('LikeMyController',LikeMyController);