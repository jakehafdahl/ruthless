describe('projectionsController', function () {

    beforeEach(module('ruthless'));

    var scope,
        createController,
        scoringRules,
        projections;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        scoringRules = [
            {
                field: "rushyards",
                requiredPer: 10,
                pointsFor: 1,
                position: "RB"
            }];
        projections = {
            name: "test"
        };

        scope.prepView = {
            scoringRules: scoringRules,
            projections: projections
        };

        var scoringFieldOptions = [{
            field: "rushyards",
            fieldDisplay: "Rush Yards"
        }];

        var positionFieldOptions = [
            {
                position: "RB",
                positionDisplay: "Runningbacks"
            }
        ];

        createController = function () {
            return $controller('projectionsController', {
                '$scope': scope,
                scoringFieldOptions: scoringFieldOptions,
                positionFieldOptions: positionFieldOptions,
                updatePlayer: function () { }
            });
        };
    }));

    it('should initialize the view model with the parent $scope variables and set up the tables object correctly', function () {

        var controller = createController();

        expect(controller.scoringRules).toEqual(scoringRules)
        expect(controller.projections).toEqual(projections)
        expect(controller.tables["RB"].title).toEqual("Runningbacks");
        expect(controller.tables["RB"].columns.length).toBe(1);
        expect(controller.tables["RB"].columns[0].name).toBe("Rush Yards");
        expect(controller.tables["RB"].columns[0].field).toBe("rushyards");
    });

});