describe('scoringController', function () {

    beforeEach(module('ruthless'));

    var scope,
        createController;

    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        createController = function () {
            return $controller('scoringController', {
                '$scope': scope, loadScoring: function () { }
            });
        };
    }));

    it('should initialize the view model with the parent $scope variables', function () {
        var roster = {
            numberTeams: 12,
            rosterSize: 16,
            roster: {
                quarterbacks: 1,
                runningbacks: 2,
                widereceivers: 2,
                tightends: 1,
                wrrbflex: 0,
                wrrbteflex: 1,
                qbwrrbteflex: 0,
                kickers: 1,
                dst: 1
            }
        };

        var scoringRules = [
            {
                field: "rushyards",
                requiredPer: 10,
                pointsFor: 1,
                position: "RB"
            }];
        scope.prepView = {
            roster: roster,
            scoringRules: scoringRules
        };

        var controller = createController();
        expect(controller.roster).toBe(roster);
        expect(controller.scoringRules).toBe(scoringRules);
    });

});