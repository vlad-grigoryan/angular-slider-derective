'use strict';
const sliderComponent = {
    transclude:true,
    bindings: {
        items: '<'
    },

    template: function ($element, $attrs) {
        return `<h1 class="text-center">Slider</h1>
                <div class="slideshow-container">
                      <div class="mySlides fade" ng-repeat="item in $ctrl.items" ng-show="item.visible">
                          <div ng-bind-html="item.data"></div>
                      </div>
                      <a class="prev" ng-click="$ctrl.prev()">&#10094;</a>
                      <a class="next" ng-click="$ctrl.next()">&#10095;</a>
                </div>
                <div class="dot-container" >
                   <span class="dot" 
                         ng-repeat="(key, item) in $ctrl.items"
                         ng-class="{'active': key==$ctrl.currentIndex}"
                         ng-click="$ctrl.showSlide(key)">
                   </span>
                </div>
                `
    },

    controller: function ($document, $scope) {
        let ctrl = this;
        ctrl.currentIndex = 0;

        ctrl.next = function() {
            ctrl.currentIndex < ctrl.items.length - 1 ? ctrl.currentIndex++ : ctrl.currentIndex = 0;
        };

        ctrl.prev = function() {
            ctrl.currentIndex > 0 ? ctrl.currentIndex-- : ctrl.currentIndex = ctrl.items.length - 1;
        };

        ctrl.showSlide = function (key) {
            ctrl.currentIndex = key
        };

        $scope.$watch('$ctrl.currentIndex', function() {
            ctrl.items.forEach(function(item) {
                item.visible = false; // make every image invisible
            });

            ctrl.items[ctrl.currentIndex].visible = true; // make the current image visible
        });


    }
};
sliderComponent.$inject = ['$document', '$scope'];


export default sliderComponent;
