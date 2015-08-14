describe('scoringSettingsController', function () {

    beforeEach(module('ruthless'));

    var scope,
        createController,
        scoringRules;

    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        scoringRules = [
            {
                field: "rushyards",
                requiredPer: 10,
                pointsFor: 1,
                position: "RB"
            }];

        scope.$parent = {
            scoringView: {
                scoringRules: scoringRules
            }
        };

        createController = function () {
            return $controller('scoringSettingsController', {
                '$scope': scope, addScoringRule: function () { }, editScoringRule: function () { }
            });
        };
    }));

    it('should initialize the view model with the parent $scope variables', function () {

        var controller = createController();

        expect(controller.scoringRules).toBe(scoringRules);
    });

    it('should return the correct class for each position', function () {

        var positionColorMap =
            {
                "RB": 'danger',
                "WR": 'info',
                "TE": 'success',
                "QB": 'active',
                "K": 'warning',
                "DST": ""
            };

        var controller = createController();
        
        for(var position in positionColorMap){
            expect(controller.colorRule(position)).toBe(positionColorMap[position]);
        }
    });

});