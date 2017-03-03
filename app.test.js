describe('angular-test', function() {

    var scope;

    beforeEach(function() {

        module('firstApp'); // 获取angular的app

        inject(['$rootScope', '$controller',
            function($rootScope, $controller) {

                scope = $rootScope.$new();

                $controller('firstCtrl', {$scope: scope})
            }]); // 获取controller，将$scope赋值给scope

    });

    /**
     * 使用chai断言库。
     */
    it('text-contains', function() {
        expect(scope.text.should.contains('hello'));
    });

    it('text-equal', function() {
        expect(scope.text.should.equal('hello world'));
    });

    it('add', function() {
        expect(scope.add(1, 2).should.equal(3));
    });

});