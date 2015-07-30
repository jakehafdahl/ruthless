describe('articleService', function() {

beforeEach(module('ruthless'));

var articleService,
httpBackend;

beforeEach(inject(function ( $httpBackend, _articleService_) {
	articleService = _articleService_;
	httpBackend = $httpBackend;
}));

afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

it('should return a list of articles from the server when frontPageArticles is called', function () {
	var articlesObject = [
		{
			title: "test1"
		},
		{
			title: "test2"
		}
	];
	httpBackend.expect('GET','/articles').respond(articlesObject);
	articleService.frontPageArticles().then(function(response){
		expect(response.length).toEqual(2);	
		expect(response[0].title).toEqual("test1");	
		expect(response[1].title).toEqual("test2");	
	});
	httpBackend.flush();
});

it('should return a list of articles from the server when getArticles is called', function () {
	var articlesObject = [
		{
			title: "test1"
		},
		{
			title: "test2"
		}
	];
	httpBackend.expect('GET','/articles?page=1').respond(articlesObject);
	articleService.getArticles({page: 1}).then(function(response){
		expect(response.length).toEqual(2);	
		expect(response[0].title).toEqual("test1");	
		expect(response[1].title).toEqual("test2");	
	});
	httpBackend.flush();
});

});