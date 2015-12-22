/**
 * Created by hongbojing on 12/22/15.
 */
(function() {
    'use strict';
angular
    .module('myApp')
    .controller('myController', myController);

function myController() {
    var vm = this;
    vm.test = 'hello world';
}

})();
