describe('projectionsService', function() {

beforeEach(module('ruthless'));

var projectionsService,
httpBackend;

beforeEach(inject(function ( $httpBackend, _projectionsService_) {
	projectionsService = _projectionsService_;
	httpBackend = $httpBackend;
}));

afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

it('should call the projections default when getDefault is called', function () {
	
	var projection = {
		name: 'test'	
	};
	
	httpBackend.expectGET('/projections/default').respond(projection);
	projectionsService.getDefault().$promise.then(function(response){
		expect(response.name).toBe(projection.name);
	});
	httpBackend.flush();
});

});