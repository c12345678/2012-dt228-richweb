'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('hoverOver', function() {
        return function(scope, elm, attrs) {
            elm.bind('mouseover', function() {
               $(this).popover({
                   content: attrs.hoverOver,
                   trigger: 'hover',
                   placement: 'bottom',
                   title: 'Angular Directive'
               });
            });
        };
    });
