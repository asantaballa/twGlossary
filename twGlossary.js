var app = angular.module('myApp', []);
var GlossaryEntry = (function () {
    function GlossaryEntry() {
    }
    return GlossaryEntry;
})();
var Glossary = (function () {
    function Glossary() {
        this.Entries = new Array();
    }
    Glossary.prototype.Load = function (d) {
        var gs = d.Glossary;
        this.Name = gs.Name;
        for (var i in gs.Entries) {
            console.log(i);
            var e = new GlossaryEntry();
            e.Term = gs.Entries[i].Term;
            e.Definition = gs.Entries[i].Definition;
            this.Entries.push(e);
        }
    };
    return Glossary;
})();
app.controller('ListingController', ['$scope', function ($scope) {
        $scope.greeting = 'Hola, by way of $scope.greeting';
        $scope.theDate = Date();
        var g3 = new Glossary();
        g3.Load(_jgloss);
        $scope.Glossary = g3;
    }]);
