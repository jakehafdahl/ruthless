describe('articleService', function() {

beforeEach(module('ruthless'));

var userService,
httpBackend;

beforeEach(inject(function ( $httpBackend, _userService_) {
	userService = _userService_;
	httpBackend = $httpBackend;
}));

afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

it('should call the user endpoint on successful login', function () {
	var creds = {
		username: "test",
		password: "test"
	};
	
	httpBackend.expectPOST('/login', 'grant_type=password&username=test&password=test').respond({});
	httpBackend.expectGET('/user').respond({});
	userService.login(creds, false).then(function(response){});
	httpBackend.flush();
});

});