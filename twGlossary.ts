declare var angular: any;
var app = angular.module('myApp', []);

declare var _jgloss: any;   // -- The "included" glossary

class GlossaryEntry {
  Term: string;
  Definition: string;

  constructor() {}
}

class Glossary {
  Name: string;
  Entries: Array<GlossaryEntry>;

  constructor() {
    this.Entries = new Array<GlossaryEntry>();
  }

  Load(d: any) {
    var gs = d.Glossary;

    this.Name = gs.Name;
    for (var i in gs.Entries) {
      console.log(i);
      var e = new GlossaryEntry();
      e.Term = gs.Entries[i].Term;
      e.Definition = gs.Entries[i].Definition;
      this.Entries.push(e);
    }
  }
}

app.controller('ListingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola, by way of $scope.greeting';
  $scope.theDate = Date();
  var g3 = new Glossary();
  g3.Load(_jgloss);
  $scope.Glossary = g3;
}]);
