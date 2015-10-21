/**
 * Copyright (c) 2015 Leonardo Cardoso (http://leocardz.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.0
 */
app.directive('linkPreview', function () {
    return {
        restrict: 'E',
        scope: {
            type: '@type',
            placeholder: '@placeholder',
            imageAmount: '@iamount',
            buttonClass: '@bclass',
            buttonText: '@btext',
            loadingText: '@ltext',
            loadingImage: '@limage',
            thubmnailText: '@ttext',
            noThubmnailText: '@nttext',
            thumbnailPagination: '@tpage'
        },
        controller: function ($scope) {
            $scope.preview = {
                image: "http://leocardz.com/util/assets/images/lc.png",
                title: "LeoCardz",
                url: "http://leocardz.com",
                description: "Everything about tech news, tutorials, development, projects, programming."
            };

            $scope.posts = [$scope.preview];

            $scope.type = angular.isDefined($scope.type) ? $scope.type : 'right';
            $scope.imageAmount = angular.isDefined($scope.imageAmount) ? $scope.imageAmount : -1;
            $scope.buttonClass = angular.isDefined($scope.buttonClass) ? $scope.buttonClass : 'primary';
            $scope.buttonText = angular.isDefined($scope.buttonText) ? $scope.buttonText : 'Post';
            $scope.loadingText = angular.isDefined($scope.loadingText) ? $scope.loadingText : 'Loading';
            $scope.loadingImage = angular.isDefined($scope.loadingImage) ? $scope.loadingImage : 'src/link-preview/img/empty.png';
            $scope.thubmnailText = angular.isDefined($scope.thubmnailText) ? $scope.thubmnailText : 'Choose a thumbnail';
            $scope.noThubmnailText = angular.isDefined($scope.noThubmnailText) ? $scope.noThubmnailText : 'No thumbnail';
            $scope.thumbnailPagination = angular.isDefined($scope.thumbnailPagination) ? $scope.thumbnailPagination : '%N of %N';
        },
        // do not remove lp-* classes, you can customize them though
        templateUrl: 'src/link-preview/template/link-preview.html'
    };
});