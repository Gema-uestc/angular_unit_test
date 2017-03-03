
describe('angular-test', function() {

    var scope, $httpBackend;

    beforeEach(module('httpApp'));

    beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {

        //设置$httpBackend冲刷$http请求
        $httpBackend = _$httpBackend_;
        $httpBackend
            .when('GET', 'http.json')
            .respond({
                content: "hello"
            });

        //创建一个空的 scope
        scope = $rootScope.$new();

        //声明 Controller并且注入已创建的空的 scope
        $controller('httpCtrl', {
            $scope: scope
        });
    }));

    // 测试从这里开始
    it('should get word hello', function() {

        $httpBackend.flush();

        expect(scope.content.should.equal('hello'));

        console.log(scope.content)

    });

});