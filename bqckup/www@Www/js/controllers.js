angular.module('starter.controllers', [])

.factory('Category', function() {
var all = function() {
return [
{
name: "Football",
id: 4,
items: [// Required: array, even empty
{
name: "Africa",
id: 0,
items: [

{
name: "Egypt",
id: 'Football-1'
}, {
name: "Ghana",
id: 'Football-2'
}, {
name: "Nigeria",
id: 'Football-3'
}, {
name: "South Africa",
id: 'Football-4'
}, {
name: "Tunisia",
id: 'Football-5'
}

]
},
{
name: "Asia",
id: 2,
items: [{
name: "China",
id: 'Football-7'
}, {
name: "Japan",
id: 'Football-8'
}, {
name: "Saudi Arabia",
id: 'Football-9'
}, {
name: "South Korea",
id: 'Football-10'
}]
},
{
name: "Australia",
id: 3,
items: [
{
name: "Australia",
id: 'Football-11'
}
]
},
{
name: "North America",
id: 4,
items: [
{
name: "USA",
id: 'Football-12'
}, {
name: "Mexico",
id: 'Football-13'
}, {
name: "Canada",
id: 'Football-47'
}
]
},
{
name: "South America",
id: 5,
items: [
{
name: "Argentina",
id: 'Football-14'
}, {
name: "Bolivia",
id: 'Football-15'
}, {
name: "Brazil",
id: 'Football-16'
}, {
name: "Chile",
id: 'Football-17'
}, {
name: "Colombia",
id: 'Football-18'
}, {
name: "Ecuador",
id: 'Football-19'
}, {
name: "Paraguay",
id: 'Football-20'
}, {
name: "Peru",
id: 'Football-21'
}, {
name: "Uruguay",
id: 'Football-22'
}, {
name: "Venezuela",
id: 'Football-23'
}
]
},
{
name: "Europe",
id: 6,
items: [
{
name: "Austria",
id: 'Football-24'
}, {
name: "Belgium",
id: 'Football-25'
}, {
name: "Croatia",
id: 'Football-26'
}, {
name: "Czech Republic",
id: 'Football-27'
}, {
name: "Denmark",
id: 'Football-28'
}, {
name: "England",
id: 'Football-29'
}, {
name: "Finland",
id: 'Football-30'
}, {
name: "France",
id: 'Football-31'
}, {
name: "Germany",
id: 'Football-32'
}, {
name: "Greece",
id: 'Football-33'
}, {
name: "Italy",
id: 'Football-34'
}, {
name: "Netherlands",
id: 'Football-35'
}, {
name: "Norway",
id: 'Football-36'
}, {
name: "Poland",
id: 'Football-37'
}, {
name: "Portugal",
id: 'Football-38'
}, {
name: "Russia",
id: 'Football-39'
}, {
name: "Scotland",
id: 'Football-40'
}, {
name: "Serbia",
id: 'Football-41'
}, {
name: "Spain",
id: 'Football-42'
}, {
name: "Sweden",
id: 'Football-43'
}, {
name: "Switzerland",
id: 'Football-44'
}, {
name: "Turkey",
id: 'Football-45'
}, {
name: "Ukraine",
id: 'Football-46'
}
]

},

]
},
{
name: "Motorsport ",
id: 0,
items: [// Required: array, even empty
{
name: "Formula1",
id: 1,
items:[

{
name: "Haas F1 Team",
id: "Motorsport-1"
}, {
name: "Manor Racing MRT",
id: "Motorsport-2"
}, {
name: "McLaren Honda Formula 1 Team",
id: "Motorsport-3"
}, {
name: "Mercedes AMG Petronas Formula One Team",
id: "Motorsport-4"
}, {
name: "Red Bull Racing",
id: "Motorsport-5"
}, {
name: "Renault Sport Formula 1 Team",
id: "Motorsport-6"
}, {
name: "Sahara Force India Formula One Team",
id: "Motorsport-7"
}, {
name: "Sauber F1 Team",
id: "Motorsport-8"
}, {
name: "Scuderia Ferrari",
id: "Motorsport-9"
}, {
name: "Scuderia Toro Rosso",
id: "Motorsport-10"
}, {
name: "Williams Martini Racing",
id: "Motorsport-11"
}
]
},
{
name: "Moto GP",
id: 2,
items:[
{
name: "Aprilia Racing Team Gresini",
id: "Motorsport-12"
}, {
name: "Avintia Racing",
id: "Motorsport-13"
}, {
name: "Ducati Team",
id: "Motorsport-14"
}, {
name: "Estrella Galicia 0,0 Marc VDS",
id: "Motorsport-15"
}, {
name: "LCR Honda",
id: "Motorsport-16"
}, {
name: "Monster Yamaha Tech 3",
id: "Motorsport-17"
}, {
name: "Movistar Yamaha MotoGP",
id: "Motorsport-18"
}, {
name: "OCTO Pramac Yakhnich",
id: "Motorsport-19"
}, {
name: "Pull & Bear Aspar Team",
id: "Motorsport-20"
}, {
name: "Repsol Honda Team",
id: "Motorsport-21"
}, {
name: "Team SUZUKI ECSTAR",
id: "Motorsport-22"
}
]
},
{
name: "Indy Racing League",
id: 3,
items:[
{
name: "AJ Foyt Enterprises",
id: "Motorsport-23"
}, {
name: "Andretti Autosport",
id: "Motorsport-24"
}, {
name: "Andretti Herta Autosport w\/Curb-Agajanian",
id: "Motorsport-25"
}, {
name: "Chip Ganassi Racing",
id:  "Motorsport-26"
}, {
name: "Dale Coyne Racing",
id: "Motorsport-27"
}, {
name: "Dale Coyne\/Jonathan Byrd's Racing",
id: "Motorsport-28"
}, {
name: "Dreyer & Reinbold Kingdom Racing",
id: "Motorsport-29"
}, {
name: "Ed Carpenter Racing",
id: "Motorsport-30"
}, {
name: "KV Racing Technology",
id: "Motorsport-31"
}, {
name: "KVSH Racing",
id: "Motorsport-32"
}, {
name: "Lazier\/Burns Racing",
id: "Motorsport-33"
}, {
name: "PIRTEK Team Murray",
id: "Motorsport-34"
}, {
name: "Rahal Letterman Lanigan Racing",
id: "Motorsport-35"
}, {
name: "Schmidt Peterson Motorsports",
id: "Motorsport-36"
}, {
name: "Team Penske",
id: "Motorsport-37"
}
]
},
{
name: "Nascar",
id: 4,
items:[
{
name: "BK Racing",
id: "Motorsport-38"
}, {
name: "Chip Ganassi Racing",
id: "Motorsport-39"
}, {
name: "Circle Sport Racing -Leavine Family Racing",
id: "Motorsport-40"
}, {
name: "Front Row Motorsports",
id: "Motorsport-41"
}, {
name: "Furniture Row Racing",
id: "Motorsport-42"
}, {
name: "Germain Racing",
id: "Motorsport-43"
}, {
name: "GoFAS Racing",
id: "Motorsport-44"
}, {
name: "Hendrick Motorsports",
id: "Motorsport-45"
}, {
name: "HScott Motorsports",
id: "Motorsport-46"
}, {
name: "Joe Gibbs Racing",
id: "Motorsport-47"
}, {
name: "JTG Daugherty Racing",
id: "Motorsport-48"
}, {
name: "Premium Motorsports",
id: "Motorsport-49"
}, {
name: "Richard Childress Racing",
id: "Motorsport-50"
}, {
name: "Richard Petty Motorsports",
id: "Motorsport-51"
}, {
name: "Roush Fenway Racing",
id: "Motorsport-52"
}, {
name: "Stewart-Haas Racing",
id: "Motorsport-53"
}, {
name: "Team Penske",
id: "Motorsport-54"
}, {
name: "Tommy Baldwin Racing",
id: "Motorsport-55"
}, {
name: "Wood Brothers Racing",
id: "Motorsport-56"
}
]
},
{
name: "Rally - WRC",
id: 5,
items:[
{
name: "Abu Dhabi Total World Rally team",
id: "Motorsport-57"
}, {
name: "DMACK World Rally Team",
id: "Motorsport-58"
}, {
name: "F.W.R.T.",
id: "Motorsport-59"
}, {
name: "Hyundai Motorsport",
id: "Motorsport-60"
}, {
name: "Hyundai Motorsport N",
id: "Motorsport-61"
}, {
name: "Jipocar Czech National Team",
id: "Motorsport-62"
}, {
name: "M-Sport World Rally Team",
id: "Motorsport-63"
}, {
name: "Volkswagen Motorsport",
id: "Motorsport-64"
}, {
name: "Volkswagen Motorsport II",
id: "Motorsport-65"
}, {
name: "Yazeed Racing",
id: "Motorsport-66"
}
]
}]
},
{
name: "NFL",
id: 0,
items:

[{
name: "Arizona Cardinals",
id: 'NFL-1',
// items:[{
// 	name: "Arizona Cardinals",
// id: 'NFL-1',

// }]

}, {
name: "Atlanta Falcons",
id: 'NFL-2',
// items:[{
// 	name: "Atlanta Falcons",
// id: 'NFL-2',

// }]
}, {
name: "Baltimore Ravens",
id: 'NFL-3'
}, {
name: "Buffalo Bills",
id: 'NFL-4'
}, {
name: "Carolina Panthers",
id: 'NFL-5'
}, {
name: "Chicago Bears",
id: 'NFL-6'
}, {
name: "Cincinnati Bengals",
id: 'NFL-7'
}, {
name: "Cleveland Browns",
id: 'NFL-8'
}, {
name: "Dallas Cowboys",
id: 'NFL-9'
}, {
name: "Denver Broncos",
id: 'NFL-10'
}, {
name: "Detroit Lions",
id: 'NFL-11'
}, {
name: "Green Bay Packers",
id: 'NFL-12'
}, {
name: "Houston Texans",
id: 'NFL-13'
}, {
name: "Indianapolis Colts",
id: 'NFL-14'
}, {
name: "Jacksonville Jaguars",
id: 'NFL-15'
}, {
name: "Kansas City Chiefs",
id: 'NFL-16'
}, {
name: "Los Angeles Rams",
id: 'NFL-17'
}, {
name: "Miami Dolphins",
id: 'NFL-18'
}, {
name: "Minnesota Vikings",
id: 'NFL-19'
}, {
name: "New England Patriots",
id: 'NFL-20'
}, {
name: "New Orleans Saints",
id: 'NFL-21'
}, {
name: "New York Giants",
id: 'NFL-22'
}, {
name: "New York Jets",
id: 'NFL-23'
}, {
name: "Oakland Raiders",
id: 'NFL-24'
}, {
name: "Philadelphia Eagles",
id: 'NFL-25'
}, {
name: "Pittsburgh Steelers",
id: 'NFL-26'
}, {
name: "San Diego Chargers",
id: 'NFL-27'
}, {
name: "San Francisco 49ers",
id: 'NFL-28'
}, {
name: "Seattle Seahawks",
id: 'NFL-29'
}, {
name: "Tampa Bay Buccaneers",
id: 'NFL-30'
}, {
name: "Tennessee Titans",
id: 'NFL-31'
}, {
name: "Washington Redskins",
id: 'NFL-32'
}]
}, 
{
name: "BASKETBALL ",
id: 0,
items: [// Required: array, even empty
{
name: "NBA",
id: 1,
items:
[{
name: "Atlanta Hawks",
id: "BASKETBALL-1"
}, {
name: "Boston Celtics",
id: "BASKETBALL-2"
}, {
name: "Brooklyn Nets",
id: "BASKETBALL-3"
}, {
name: "Charlotte Hornets",
id: "BASKETBALL-4"
}, {
name: "Chicago Bulls",
id: "BASKETBALL-5"
}, {
name: "Cleveland Cavaliers",
id: "BASKETBALL-6"
}, {
name: "Dallas Mavericks",
id: "BASKETBALL-7"
}, {
name: "Denver Nuggets",
id: "BASKETBALL-8"
}, {
name: "Detroit Pistons",
id: "BASKETBALL-9"
}, {
name: "Golden State Warriors",
id: "BASKETBALL-10"
}, {
name: "Houston Rockets",
id: "BASKETBALL-11"
}, {
name: "Indiana Pacers",
id: "BASKETBALL-12"
}, {
name: "Los Angeles Clippers",
id: "BASKETBALL-13"
}, {
name: "Los Angeles Lakers",
id: "BASKETBALL-14"
}, {
name: "Memphis Grizzlies",
id: "BASKETBALL-15"
}, {
name: "Miami Heat",
id: "BASKETBALL-16"
}, {
name: "Milwaukee Bucks",
id: "BASKETBALL-17"
}, {
name: "Minnesota Timberwolves",
id: "BASKETBALL-18"
}, {
name: "New Orleans Pelicans",
id: "BASKETBALL-19"
}, {
name: "New York Knicks",
id: "BASKETBALL-20"
}, {
name: "Oklahoma City Thunder",
id: "BASKETBALL-21"
}, {
name: "Orlando Magic",
id: "BASKETBALL-22"
}, {
name: "Philadelphia 76ers",
id: "BASKETBALL-23"
}, {
name: "Phoenix Suns",
id: "BASKETBALL-24"
}, {
name: "Portland Trail Blazers",
id: "BASKETBALL-25"
}, {
name: "Sacramento Kings",
id: "BASKETBALL-26"
}, {
name: "San Antonio Spurs",
id: "BASKETBALL-27"
}, {
name: "Toronto Raptors",
id: "BASKETBALL-28"
}, {
name: "Utah Jazz",
id: "BASKETBALL-29"
}, {
name: "Washington Wizards",
id: "BASKETBALL-30"
}
]

},
{
name: "Greece",
id: 2,
items:[]
},
{
name: "Crotia",
id: 3,
items:[]
},
{
name: "Serbia",
id: 4,
items:[]
},
{
name: "Spain",
id: 5,
items:[]
},
{
name: "Argentina",
id: 6,
items:[]
}

]},
{
name: "BASEBALL ",
id: 0,
items: [// Required: array, even empty
{
name: "MLB",
id: 1,
items:
[{
name: "Arizona Diamondbacks",
id: 1
}, {
name: "Atlanta Braves",
id: 2
}, {
name: "Baltimore Orioles",
id: 3
}, {
name: "Boston Red Sox",
id: 4
}, {
name: "Chicago Cubs",
id: 5
}, {
name: "Chicago White Sox",
id: 6
}, {
name: "Cincinnati Reds",
id: 7
}, {
name: "Cleveland Indians",
id: 8
}, {
name: "Colorado Rockies",
id: 9
}, {
name: "Detroit Tigers",
id: 10
}, {
name: "Houston Astros",
id: 11
}, {
name: "Kansas City Royals",
id: 12
}, {
name: "Los Angeles Angels",
id: 13
}, {
name: "Los Angeles Dodgers",
id: 14
}, {
name: "Miami Marlins",
id: 15
}, {
name: "Milwaukee Brewers",
id: 16
}, {
name: "Minnesota Twins",
id: 17
}, {
name: "New York Mets",
id: 18
}, {
name: "New York Yankees",
id: 19
}, {
name: "Oakland Athletics",
id: 20
}, {
name: "Philadelphia Phillies",
id: 21
}, {
name: "Pittsburgh Pirates",
id: 22
}, {
name: "San Diego Padres",
id: 23
}, {
name: "San Francisco Giants",
id: 24
}, {
name: "Seattle Mariners",
id: 25
}, {
name: "St. Louis Cardinals",
id: 26
}, {
name: "Tampa Bay Rays",
id: 27
}, {
name: "Texas Rangers",
id: 28
}, {
name: "Toronto Blue Jays",
id: 29
}, {
name: "Washington Nationals",
id: 30
}
]
},
{
name: "Japan",
id: 2,
items:[
]
}]

},
{
name: "ICE-Hockey",
id: 0,
items:[
{
name: "Anaheim Ducks",
id: 1
}, {
name: "Arizona Coyotes",
id: 2
}, {
name: "Boston Bruins",
id: 3
}, {
name: "Buffalo Sabres",
id: 4
}, {
name: "Calgary Flames",
id: 5
}, {
name: "Carolina Hurricanes",
id: 6
}, {
name: "Chicago Blackhawks",
id: 7
}, {
name: "Colorado Avalanche",
id: 8
}, {
name: "Columbus Blue Jackets",
id: 9
}, {
name: "Dallas Stars",
id: 10
}, {
name: "Detroit Red Wings",
id: 11
}, {
name: "Edmonton Oilers",
id: 12
}, {
name: "Florida Panthers",
id: 13
}, {
name: "Los Angeles Kings",
id: 14
}, {
name: "Minnesota Wild",
id: 15
}, {
name: "Montreal Canadiens",
id: 16
}, {
name: "Nashville Predators",
id: 17
}, {
name: "New Jersey Devils",
id: 18
}, {
name: "New York Islanders",
id: 19
}, {
name: "New York Rangers",
id: 20
}, {
name: "Ottawa Senators",
id: 21
}, {
name: "Philadelphia Flyers",
id: 22
}, {
name: "Pittsburgh Penguins",
id: 23
}, {
name: "San Jose Sharks",
id: 24
}, {
name: "St. Louis Blues",
id: 25
}, {
name: "Tampa Bay Lightning",
id: 26
}, {
name: "Toronto Maple Leafs",
id: 27
}, {
name: "Vancouver Canucks",
id: 28
}, {
name: "Washington Capitals",
id: 29
}, {
name: "Winnipeg Jets",
id: 30
}]
},
{
name: "CRICKET",
id: 0,
items:[
{
name: "Australia",
id: 1
}, {
name: "Bangladesh",
id: 2
}, {
name: "England",
id: 3
}, {
name: "India",
id: 4
}, {
name: "New Zeeland",
id: 5
}, {
name: "Pakistan",
id: 6
}, {
name: "South Africa",
id: 7
}, {
name: "Sri Lanka",
id: 8
}, {
name: "West Indies",
id: 9
}, {
name: "Zimbabwe",
id: 10
}]

},
{
name: "RUGBY",
id: 0,
items:[
{
name: "Australia",
id: 1
}, {
name: "England",
id: 2
}, {
name: "South Africa",
id: 3
}, {
name: "New Zeeland",
id: 4
}, {
name: "Fiji",
id: 5
}, {
name: "France",
id: 6
}, {
name: "Scotland",
id: 7
}, {
name: "Argentina",
id: 8
}, {
name: "Wales",
id: 9
}, {
name: "Ireland",
id: 10
}, {
name: "Italy",
id: 11
}, {
name: "Japan",
id: 12
}]

},
{
name: "Martial Arts",
id: 4,
items: [// Required: array, even empty
{
name: "MMA",
id: 1,
items:
[{
name: "Heavyweight",
id: 1
}, {
name: "Light Heavyweight",
id: 2
}, {
name: "Middleweight",
id: 3
}, {
name: "Welterweight",
id: 4
}, {
name: "Lightweight",
id: 5
}, {
name: "Featherweight",
id: 6
}, {
name: "Bantamweight",
id: 7
}, {
name: "Flyweight",
id: 8
}, {
name: "Women's Bantamweight",
id: 9
}, {
name: "Women's Strawweight",
id: 10
}]
},
{
name: "Boxing weightclasses",
id: 2,
items:
[{
name: "Heavyweight (unlimited)",
id: 11
}, {
name: "Cruiserweight\/Jr. Heavyweight (200 lbs)",
id: 12
}, {
name: "Light Heavyweight (175 lbs)",
id: 13
}, {
name: "Super Middleweight (168 lbs)",
id: 14
}, {
name: "Middleweight (160 lbs)",
id: 15
}, {
name: "Super Welterweight\/Jr. Middleweight (154 lbs)",
id: 16
}, {
name: "Welterweight (147 lbs)",
id: 17
}, {
name: "Super Lightweight\/Jr. Welterweight (140 lbs)",
id: 18
}, {
name: "Lightweight (135 lbs)",
id: 19
}, {
name: "Super Featherweight\/Jr. Lightweight (130 lbs)",
id: 20
}, {
name: "Featherweight (126 lbs)",
id: 21
}, {
name: "Super Bantamweight\/Jr. Featherweight(122 lbs)",
id: 22
}, {
name: "Bantamweight (118 lbs)",
id: 23
}, {
name: "Super Flyweight\/Jr. Bantamweight (115 lbs)",
id: 24
}, {
name: "Flyweight (112 lbs)",
id: 25
}, {
name: "Junior Flyweight\/Light Flyweight (108 lbs)",
id: 26
}, {
name: "Minimumweight\/Mini-Flyweight (105 lbs)",
id: 27
}]
},
]
},
{
name: "NCAA",
id:500 ,
items: [// Required: array, even empty
{
name: "Football",
id: 1,
items:[
{
name: "FBC",
id: 1
}, {
name: "FCS",
id: 2
}]

},
{
name: "BASKETBALL",
id: 2,
items:
[{
name: "America East Conference",
id: 1
}, {
name: "American Athletic Conference",
id: 2
}, {
name: "Atlantic 10 Conference",
id: 3
}, {
name: "Atlantic Coast Conference",
id: 4
}, {
name: "Atlantic Sun Conference",
id: 5
}, {
name: "Big 12 Conference",
id: 6
}, {
name: "Big East Conference",
id: 7
}, {
name: "Big Sky Conference",
id: 8
}, {
name: "Big South Conference",
id: 9
}, {
name: "Big Ten Conference",
id: 10
}, {
name: "Big West Conference",
id: 11
}, {
name: "Colonial Athletic Association",
id: 12
}, {
name: "Conference USA",
id: 13
}, {
name: "Horizon League",
id: 14
}, {
name: "Ivy League",
id: 15
}, {
name: "Metro Atlantic Athletic Conference",
id: 16
}, {
name: "Mid-American Conference",
id: 17
}, {
name: "Mid-Eastern Athletic Conference",
id: 18
}, {
name: "Missouri Valley Conference",
id: 19
}, {
name: "Mountain West Conference",
id: 20
}, {
name: "Northeast Conference",
id: 21
}, {
name: "Ohio Valley Conference",
id: 22
}, {
name: "Pac-12 Conference",
id: 23
}, {
name: "Patriot League",
id: 24
}, {
name: "Southeastern Conference",
id: 25
}, {
name: "Southern Conference",
id: 26
}, {
name: "Southland Conference",
id: 27
}, {
name: "Southwestern Athletic Conference",
id: 28
}, {
name: "Sun Belt Conference",
id: 29
}, {
name: "Summit League",
id: 30
}, {
name: "West Coast Conference",
id: 31
}, {
name: "Western Athletic Conference",
id: 32
}]

},



]
},
{
name: "Tennis",
id:500 ,
items: [// Required: array, even empty
{
name: "Men's Tennis",
id: 1
},
{
name: "Women's Tennis",
id: 1
}],
},
{
name: "Other Sports",
id:500 ,

}



]
}

// Should be a DB query in real life
var get = function(id) {
var categories = all();


for (var i = 0; i < categories.length; i++) {
var level1 = categories[i];
if (level1.id == id) {
return level1;
}
 if(localStorage['main_game']!='NFL')
 {
for (var j = 0; j < level1.items.length; j++) {
var level2 = level1.items[j];

if (level2.id == id) {
return level2;
}

for (var k = 0; k < level2.items.length; k++) {
var level3 = level2.items[k];

if (level3.id == id) {
return level3;
}
}
}
}
}

return null;
}

// Public API
return {
all: all,
get: get
}
})
.controller('forumCtrl',
function($scope, $http, Category, $stateParams, $ionicLoading,$state,$ionicPopup) {

$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
	 if(localStorage['main_game']=='NFL' || localStorage['main_game']=='BASKETBALL')
 {
		$scope.team_id=localStorage['nfl_id'];
		$scope.forum=localStorage['fourm_NFL'];
 }else{
		$scope.team_id=localStorage['hod'];
		$scope.forum=localStorage['gattu'];
}



console.log("ggggggggg"+localStorage['main_game']);

$ionicLoading.show({
template: 'Please Wait...'
});
 if(localStorage['main_game']=='Motorsport'){
  var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumMotorsport/'+localStorage['hod'];
 }else if(localStorage['main_game']=='Football'){
   var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumFootball/'+localStorage['hod'];
 }else if(localStorage['main_game']=='NFL'){
   var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumNfl/'+localStorage['nfl_id'];
 }


$http({
method: 'GET',
url: url_linlk,
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$scope.detail=data;
console.log("Balleee");
$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});
});  

$scope.addQuote=function(name, desc){
console.log(name);
localStorage['current_quote']="<blockquote></b>"+name+'</b>:-'+desc.substring(desc.lastIndexOf("</blockquote>")+1).replace('/blockquote>', '')+"</blockquote>";
console.log(localStorage['current_quote']);
$state.go('app.forum2');
}
$scope.forum1=function(id){
var team_id=id;
localStorage.setItem('team_id',team_id);
console.log("team_id"+ localStorage ['team_id']);
$state.go("app.forum2");
}
$scope.myVar=[false];
$scope.toggle = function($index) {
//$scope.myVar=false;
  console.log('toggle'+$index)
$scope.myVar[$index] = !$scope.myVar[$index];
};
$scope.myVar1=[false];
$scope.toggle1 = function($index) {
//$scope.myVar=false;
  console.log('toggle1'+$index)
$scope.myVar1[$index] = !$scope.myVar1[$index];
};
$scope.myVar2=[];
$scope.toggle2 = function($index) {
$scope.myVar2[$index] = !$scope.myVar2[$index];
};
$scope.likes=function(id){
var postid=id;
console.log("postid"+postid);
$ionicLoading.show({
template: 'Please Wait...'
});
if(localStorage['main_game']=='Motorsport'){
	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumLikes'
}
else if(localStorage['main_game']=='Football'){
	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumLikes'
}
$http({
method: 'POST',
url: url_linlk, 
data: 
{  
'id':postid,
'user_id': localStorage ['user_login_id'],
}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail();

//$state.go('app.login');

}else{
regsuc(); 
//$scope.rplytext="";
$state.reload();

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});

}
regsuc = function() {

};
regfail = function() {

};








////////////////////////////////


$scope.subrely2=function(id,id2){
var rply_id=id;
var subplytext=id2;
console.log("rply_id"+rply_id);
console.log("subplytext"+subplytext);

$ionicLoading.show({
template: 'Please Wait...'
});

if(localStorage['main_game']=='Motorsport'){

    var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='2';
    var teamm_id=localStorage ['hod'];
 }else if(localStorage['main_game']=='Football'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='1';
     var teamm_id=localStorage ['hod'];
 }else if(localStorage['main_game']=='NFL'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='3';
    var teamm_id=localStorage['nfl_id'];
 }

$http({
method: 'POST',
url:url_linlk , 
data: 
{  

'user_id': localStorage ['user_login_id'],
'reply_id':rply_id,
'name': localStorage ['name'],
'description':subplytext,
'main_game_id': main_game_id,
'team_id':teamm_id,





}, 


headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
	$scope.myVar2=[false];

$ionicLoading.hide();

// 
if (data=='failed') {
regfail3();

//$state.go('app.login');

}else{
regsuc3(); 
//$scope.rplytext="";
$state.reload();

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});

}
regsuc3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your reply has been successfully added! '
});
alertPopup.then(function(res) {
//$state.reload("app.forum");                              

console.log('reply added!');
});
};
regfail3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});
};

/////////


$scope.subrely=function(id,id2){
var rply_id=id;
var subplytext=id2;
console.log("rply_id"+rply_id);
console.log("subplytext"+subplytext);

$ionicLoading.show({
template: 'Please Wait...'
});
if(localStorage['main_game']=='Motorsport'){

    var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='2';
    var teamm_id=localStorage ['hod'];
 }else if(localStorage['main_game']=='Football'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='1';
    var teamm_id=localStorage ['hod'];
 }else if(localStorage['main_game']=='NFL'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQouteReply/';
    var main_game_id='3';
    var teamm_id=localStorage['nfl_id'];
 }

$http({
method: 'POST',
url:url_linlk , 
data: 
{  

'user_id': localStorage ['user_login_id'],
'reply_id':rply_id,
'name': localStorage ['name'],
'description':subplytext,
'main_game_id': main_game_id,
'team_id':teamm_id,
}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$scope.myVar1=[false];
$ionicLoading.hide();

// 
if (data=='failed') {
regfail3();

//$state.go('app.login');

}else{
regsuc3(); 
//$scope.rplytext="";
$state.reload();

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});

}
regsuc3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your reply has been successfully added! '
});
alertPopup.then(function(res) {
//$state.reload("app.forum");                              

console.log('reply added!');
});
};
regfail3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});
};



$scope.postrply=function(id,id2){
var postid=id;
var rplytext=id2;
console.log("postid"+postid);
console.log("postid"+postid);

$ionicLoading.show({
template: 'Please Wait...'
});
///////

if(localStorage['main_game']=='Motorsport'){

    var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQoute/';
    var main_game_id='2';
 }else if(localStorage['main_game']=='Football'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumQoute/';
    var main_game_id='1';
 }

$http({
method: 'POST',
url:url_linlk , 
data: 
{  

'user_id': localStorage ['user_login_id'],
'post_id':postid,
'name': localStorage ['name'],
'description':rplytext,
'main_game_id': main_game_id,
'team_id':localStorage ['hod'],





}, 

headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$scope.myVar=[false];
$ionicLoading.hide();
// $scope.replytext="";
// 
if (data=='failed') {
regfail3();

//$state.go('app.login');

}else{
regsuc3(); 
//$scope.replytext="";
$state.reload();

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});

}
regsuc3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your reply has been successfully added! '
});
alertPopup.then(function(res) {
//$state.reload("app.forum");                              

console.log('reply added!');
});
$state.reload('app.forum');
};
regfail3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});
};






})

.controller('forum2Ctrl',
function($scope, $http, Category, $stateParams, $ionicLoading,$state,$ionicPopup) {
$scope.descr=localStorage['current_quote'];

// localStorage['current_quote']="";
console.log($scope.descr);
console.log("forum2"+localStorage['main_game']);



$scope.name=localStorage ['name']

if(localStorage['auth']!='true'){

$state.go('app.login');

}else{
$state.reload("");



$scope.forumadd=function(){
//var article_id=id;

// console.log("article_id"+article_id);
console.log("userid"+localStorage['user_login_id']);
// console.log('state'+$stateParams);
//console.log('artical id'+$stateParams.id);
// console.log('artical_id see local'+localStorage['artical_id']);

console.log("forum145242"+localStorage['main_game']);

$ionicLoading.show({
template: 'Please Wait...'
});
 if(localStorage['main_game']=='Motorsport'){

    var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jmotorsportForumPosts/';
    var game_id='2';
    var team_id=localStorage['hod'];
 }else if(localStorage['main_game']=='Football'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jforumPosts';
    var game_id='1';
    var teamm_id=localStorage['hod'];
 }
 else if(localStorage['main_game']=='NFL'){
 	var url_linlk='http://europa.promaticstechnologies.com/zportix/webservices/jnflForumPosts';
    var game_id='3';
    var teamm_id=localStorage['nfl_id'];
 }

$http({
method: 'POST',
url:url_linlk , 
data: 
{  

'user_id': localStorage['user_login_id'],
'name': localStorage['name'],
'description':$scope.descr,
'main_game_id':game_id,
'team_id':teamm_id,

// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
localStorage['current_quote']="";
regfail2();

//$state.go('app.login');

}else{
localStorage['current_quote']="";
regsuc2(); 
$scope.text="";
$state.go("app.forum");

}
}).error(function (data, status, header, config, message) {
localStorage['current_quote']="";
$ionicLoading.hide();
});

}
regsuc2 = function() {

$ionicLoading.show({
template: 'Please Wait...'
});
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your comment has been successfully added! '
});
alertPopup.then(function(res) {


console.log('Comment added!');
});
};
regfail2 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});
};







}



})


.controller('HomeCtrl', function($scope,$cordovaSocialSharing, $http, Category, $stateParams,  $ionicLoading,$ionicPopup,$state) {
console.log($stateParams);

$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'GET',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/index/1',
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$scope.artical_k_liye = angular.fromJson(data[0]);

//$scope.data = data;
$scope.articles=data;
console.log("Balleee");
console.log($scope.articles);
// for welcome name  $scope.name=(""+localStorage ['Email']);
// console.log("name1"+$scope.name);
$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});
$scope.homecomment1=function(id){
var article_id=id;
console.log("article_id"+article_id);
// console.log('state'+$stateParams);
//console.log('artical id'+$stateParams.id);
// console.log('artical_id see local'+localStorage['artical_id']);
$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsonComments/', 
data: 
{  


'article_id':article_id,

'user_id': localStorage['user_login_id'],
'text':$scope.text,
// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail();

//$state.go('app.login');

}else{
regsuc(); 
$state.reload("app.seecomment");

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}
regsuc = function() {
var alertPopup = $ionicPopup.alert({
title: 'Congratulations !',
template: 'Comment added! '
});
alertPopup.then(function(res) {
// $state.reload("app.seecomment");
console.log('Comment added!');
});
};
regfail = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Comment not added!');
});
};

$scope.share=function(ad_title,desc){
var title=ad_title;
var message =desc;
var image ='img/background.png';
//var fileddd='abc.com';
//var link = 'http://test.com';

console.log("share");
$cordovaSocialSharing.share(message,title,null, "http://europa.promaticstechnologies.com/zportix") // Share via native share sheet
.then(function(result) {
// Success!

}, function(err) {
// An error occured. Show a message to the user

});
}

/*$scope.showConfirm = function() {
var confirmPopup = $ionicPopup.confirm({
title: 'submit your comment',
template: '<input type="text" ng-model="textcomment">',
});

confirmPopup.then(function(res) {
if(res) {

console.log('comment submitted !');
} else {
console.log('cancel !');
}
});*/



/*
$scope.logout=function(){

var confirmPopup = $ionicPopup.confirm({
title: 'Alert',
template: 'Are you sure you want to logout ?'
});

confirmPopup.then(function(res) {
if(res) {
localStorage.clear();
console.log('sb clear ho gya');
console.log('You are sure');
$state.reload("app.home")
} else {
console.log('You are not sure');

}
});

// localStorage.clear();
//  console.log('sb clear ho gya');
$state.reload("app");

//$ionicHistory.clearCache();
//$ionicHistory.clearHistory();
//$state.go("loginAsRequester");
};*/






})
.controller('AppCtrl', function($scope, Category,$state,$ionicPopup,$ionicSideMenuDelegate) {
$ionicSideMenuDelegate.toggleLeft(false);
$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
$ionicSideMenuDelegate.toggleLeft(false);
$scope.categories = Category.all();
$scope.name=localStorage['name'];


if(localStorage['auth']!='true'){
$scope.check="khali hai";                     
}else{
$scope.check="bhara hai";       
}
//toggleLeft
});

$state.reload();


//$state.reload('app');


console.log('ppppp' + localStorage ['name']);

$scope.logout=function(){
$ionicSideMenuDelegate.toggleLeft(true);

var confirmPopup = $ionicPopup.confirm({
title: 'Alert',
template: 'Are you sure you want to logout ?'
});

confirmPopup.then(function(res) {
if(res) {
localStorage.clear();
console.log('sb clear ho gya');
console.log('You are sure');
$state.reload("");


} else {
console.log('You are not sure');
$state.go("app.home");

}
});

// localStorage.clear();
//  console.log('sb clear ho gya');
// $state.reload("app");

//$ionicHistory.clearCache();
//$ionicHistory.clearHistory();
//$state.go("loginAsRequester");
};

})


.controller('seeCommentCtrl', function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {


$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
console.debug('[StoryController] $ionicView.beforeEnter');             
// $scope.artical_id=localStorage['artical_id'];

//  console.log('articl'+$scope.artical_id);

$scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true

$http({
method: 'GET',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/comments/'+$stateParams.id,

headers: { 
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$scope.artical_k_liye = angular.fromJson(data[0]);
//  $scope.data = data.post;
// console.log('data'+$scope.data);
$scope.details=angular.fromJson(data);
//$scope.details=angular.fromJson(data.post);
// console.log("Balleee"+$scope.artical_k_liye);
console.log($scope.details);






//$scope.auditions.applied = $scope.AppliedAuditions;

$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');

})
});


$scope.addcomment=function(id){
var article_id=id;

console.log("article_id"+article_id);
console.log("userid"+localStorage['user_login_id']);
// console.log('state'+$stateParams);
//console.log('artical id'+$stateParams.id);
// console.log('artical_id see local'+localStorage['artical_id']);
if(localStorage['auth']!='true'){

$state.go('app.login');

}else{


$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsonComments/', 
data: 
{  


'article_id':article_id,

'user_id': localStorage['user_login_id'],
'text':$scope.text,
// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail1();

//$state.go('app.login');

}else{
regsuc1(); 
$scope.text="";
$state.reload('app.seecomment');

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}
}
regsuc1 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your comment has been successfully added! '
});
alertPopup.then(function(res) {

console.log('Comment added!');
});
};
regfail1 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: 'Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});
};

$scope.myVar=[];
$scope.toggle = function($index) {
//$scope.myVar=false;
//  console.log('toggle'+$index)
$scope.myVar[$index] = !$scope.myVar[$index];
};


$scope.myVar1=[false];
//$scope.myVar1=false;
$scope.toggle1= function($index) {
//$scope.myVar1[$index] = false;    
console.log('toggle'+$index)
$scope.myVar1[$index] = !$scope.myVar1[$index];

};



$scope.replycomment=function(id,id2, reply){
var article_id=id;
var comment_id=id2;
var reply1=reply;
console.log("article_id reply "+article_id);
console.log("comments_id"+comment_id);
console.log("reply"+reply1);

$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsonReply/', 
data: 
{  


'article_id':article_id,
'comment_id':comment_id,
'user_id': localStorage['user_login_id'],
'reply':reply1,
// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail2();

//$state.go('app.login');

}else{
regsuc2(); 

$state.reload("app.seecomment");

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}
regsuc2 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your reply has been successfully added! '
});
alertPopup.then(function(res) {
// $state.reload("app.seecomment");
console.log('reply added!');
});
};
regfail2 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});

}
$scope.subreplycomment=function(id,id2){
var reply_id=id;
var subplytext=id2;

console.log("reply_id "+reply_id);
console.log("subplytext"+subplytext);
//console.log("reply"+reply1);

$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsonSubReply/', 
data: 
{  


'reply_text':subplytext,

'user_id':localStorage['user_login_id'],
'reply_id':reply_id,
// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail3();

//$state.go('app.login');

}else{
regsuc3(); 
$state.reload('app.seecomment');

}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}
regsuc3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Thank you',
template: 'Your reply has been successfully added! '
});
alertPopup.then(function(res) {
// $state.reload("app.seecomment");
console.log('reply added!');
});
};
regfail3 = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Error!');
});

}


})


.controller('signupCtrl', function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {



$scope.signup=function(){
$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/registration/', 
data: 
{  
'first_name':$scope.firstname,
'last_name':$scope.lastname,
'nick_name':$scope.nickname,
'eemail':$scope.email,
'pass':$scope.password,
'phone':$scope.phone,
'city':$scope.city,
'year_of_birth':$scope.dob,



}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();
if(data){
// 

regsuc(); 
$state.go('app.login');

}else{
regfail(); 
}
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
regfail();
});
}
regsuc = function() {
var alertPopup = $ionicPopup.alert({
title: 'Success! ',
template: 'Registration Successful please check your email to verify you email address. ! '
});
alertPopup.then(function(res) {
console.log('User Registered');
});
};
regfail = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' Email Address is Already Registered! '
});
alertPopup.then(function(res) {
$state.reload('signup');
console.log('User Not Registered');
});
};



})

.controller('loginCtrl',
function ($scope, $state, $http, $ionicPopup,$cordovaToast, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {
$ionicSideMenuDelegate.canDragContent(false);  
$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
$ionicSideMenuDelegate.toggleLeft(false);


console.debug('[StoryController] $ionicView.beforeEnter');

viewData.enableBack = true;
if(localStorage['auth']!='true'){


var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: 'Please login to continue'
});

}

});


$scope.login = function () {
$ionicLoading.show({
template: 'Redirecting...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsLogin',
data: {
'email': $scope.logindata,
'password': $scope.password
},
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function (data, status, header, config, message) {
$ionicLoading.hide();

//console.log("name: " + JSON.stringify(data[0].first_name));
localStorage.setItem('name', data[0].first_name);


console.log('usernickname' + localStorage ['name']);



if (data=='failed') {
logfail();


//localStorage.setItem('status', data.result.status);
} else {
localStorage.setItem('auth', "true");
localStorage.setItem('Email', $scope.logindata);
console.log('user_id' + localStorage ['Email']);
localStorage.setItem('user_login_id',angular.fromJson(data[0].id));
console.log('user_login_id',+localStorage['user_login_id']);
logsuc();
$state.go("app.home");
}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}

logsuc = function () {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: 'Logged-In successfully! '
});
alertPopup.then(function (res) {
console.log('Logged-In successfully! ');
// $state.go('app.home');

});
console.log('Login successfull');

}
logfail = function () {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: 'Either Email or Password is incorrect!'
});
alertPopup.then(function (res) {
//  $state.reload('login');
console.log(res);
console.log('User not login');
});
};
/*  $scope.logout=function(){
localStorage.clear();
console.log('sb clear ho gya');
//$ionicHistory.clearCache();
//$ionicHistory.clearHistory();
//$state.go("loginAsRequester");
}*/
$scope.signup=function(){
$state.go("app.signup");
}

})

.controller('CategoryCtrl', function($scope, Category, $stateParams) {
$scope.category = Category.get($stateParams.id);
console.log("category"+JSON.stringify($scope.category));
console.log('inside category ctrl');
$scope.title=localStorage['main_game']

// localStorage['category']=$stateParams.id.split('-')[0];
// console.log('mahapagal' +localStorage['category']);


})
.controller('commentCtrl',function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {

console.log('s'+$stateParams);
console.log('vv'+$stateParams.id);

$scope.comment=function(){
console.log('artical_id see local'+localStorage['artical_id']);
$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'POST',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/jsonComments/', 
data: 
{  


'article_id':$stateParams.id,

'user_id': localStorage['user_login_id'],
'text':$scope.text,
// 'email': $scope.user.email,
//s 'user_id':




}, 
headers: 
{
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$ionicLoading.hide();

// 
if (data=='failed') {
regfail();

//$state.go('app.login');

}else{
regsuc(); 
}
}).error(function (data, status, header, config, message) {
$ionicLoading.hide();
});
}
regsuc = function() {
var alertPopup = $ionicPopup.alert({
title: 'Congratulations !',
template: 'Comment added! '
});
alertPopup.then(function(res) {
//$state.go("app.seeComment");
console.log('Comment added!');
});
};
regfail = function() {
var alertPopup = $ionicPopup.alert({
title: 'Alert',
template: ' error '
});
alertPopup.then(function(res) {
//$state.reload('signup');
console.log('Comment not added!');
});
};
})
.controller('FootballCtrl', function($http,$scope, Category,$state, $stateParams, $ionicLoading) {


console.log("main_game"+localStorage['main_game'])
console.log($stateParams);

$ionicLoading.show({
template: 'Please Wait...'
});
if(localStorage['main_game']=="Football"){


var url_ladka='http://europa.promaticstechnologies.com/zportix/webservices/countryArticle/'+$stateParams.id.split('-')[1];
}
else if(localStorage['main_game']=="Motorsport"){

url_ladka="http://europa.promaticstechnologies.com/zportix/webservices/players/"+$stateParams.id.split('-')[1];
}
else if(localStorage['main_game']=="NFL"){
  console.log("inside football controller nfl");
//url_ladka="http://europa.promaticstechnologies.com/zportix/webservices/nflArticle/"+localStorage['nfl_id'];
$state.go('app.articles');
}

$http({
method: 'GET',
url: url_ladka,
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

$scope.articles = data;
$scope.tasks=data;
console.log(data);






//$scope.auditions.applied = $scope.AppliedAuditions;

$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});



$scope.$on('$ionTreeList:ItemClicked', function(event, item) {
console.log('$ionTreeList:ItemClicked');
// process 'item'
console.log("Balle shava mundia");



console.log(item);

localStorage['gattu']=item.name;
console.log('hod mach gai gattu_1'+localStorage['gattu']);
console.log("game id"+item.id);
if(angular.isDefined(item.id)){
console.log('here only');
$state.go('app.articles',{id: item.id});
}
});

//console.log("jai ho"+localStorage['gattu']);

/*console.log('hod mach gai gattu_1'+localStorage['gattu']);
console.log("game id"+item.game_id);
if(angular.isDefined(item.game_id)){
console.log('here only');
$state.go('app.articles',{id: item.id});
}
});
*/
$scope.$on('$ionTreeList:LoadComplete', function(event, items) {
// process 'items'
console.log("Balle shava mundiaaaaaaaaaaaaa");

console.log(items);
});


})
.controller('ArticleCtrl', function($scope, $cordovaSocialSharing, $ionicPopup, $state,$http, Category, $stateParams, $ionicLoading,$ionicActionSheet)
{

console.log($stateParams);
console.log('state id'+$stateParams.id);
$scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true
$ionicLoading.show({
template: 'Please Wait...'
});
console.log("gattu_2"+localStorage['gattu']);

localStorage['hod']=$stateParams.id;
console.log('pagal hai sb'+localStorage['hod']);




// // if(localStorage['gattu']== 'Haas F1 Team'||'Manor Racing MRT' || 'McLaren Honda Formula 1 Team' || 'Mercedes AMG Petronas Formula One Team' ||'Red Bull Racing'||'Renault Sport Formula 1 Team'||'Sahara Force India Formula One Team'||'Sauber F1 Team'||'Scuderia Ferrari'||'Scuderia Toro Rosso'){
// if(localStorage['main_game']== 'Motorsport' ){
// console.log("motar artical"+localStorage['main_game']);
// $http({
// method: 'GET',
// url: 'http://europa.promaticstechnologies.com/zportix/webservices/motorsportArticle/'+$stateParams.id,
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }
// }).success(function(data, status, header, config, message) {

// //$scope.data = data;
// $scope.articles=data;
// console.log(data);
// //$scope.auditions.applied = $scope.AppliedAuditions;

// $ionicLoading.hide();
// }).error(function(data, status, header, config, message) {
// $ionicLoading.hide();
// //LoadingSpinner.hide('pageLoading');
// });


// }else if(localStorage['main_game']=='Football'){
// $http({
// method: 'GET',
// url: 'http://europa.promaticstechnologies.com/zportix/webservices/footballArticles/'+$stateParams.id,
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }
// }).success(function(data, status, header, config, message) {

// //$scope.data = data;
// $scope.articles=data;
// console.log(data);






// //$scope.auditions.applied = $scope.AppliedAuditions;

// $ionicLoading.hide();
// }).error(function(data, status, header, config, message) {
// $ionicLoading.hide();
// //LoadingSpinner.hide('pageLoading');
// });
// }
// /*else if(localStorage['main_game']=='NFL') {
// $http({
// method: 'GET',
// url: 'http://europa.promaticstechnologies.com/zportix/webservices/jforumNfl/'+$stateParams.id,
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }
// }).success(function(data, status, header, config, message) {

// //$scope.data = data;
// $scope.articles=data;
// console.log(data);






// //$scope.auditions.applied = $scope.AppliedAuditions;

// $ionicLoading.hide();
// }).error(function(data, status, header, config, message) {
// $ionicLoading.hide();
// //LoadingSpinner.hide('pageLoading');
// });
// }*/

if(localStorage['main_game']=="Football"){


var url_ladka='http://europa.promaticstechnologies.com/zportix/webservices/footballArticles/'+$stateParams.id;
}
else if(localStorage['main_game']=="Motorsport"){

url_ladka='http://europa.promaticstechnologies.com/zportix/webservices/motorsportArticle/'+$stateParams.id;
}
else if(localStorage['main_game']=="NFL"){
url_ladka="http://europa.promaticstechnologies.com/zportix/webservices/nflArticle/"+localStorage['nfl_id'];
// $state.go('app.articles');
}
else if(localStorage['main_game']=="BASKETBALL"){
url_ladka="http://europa.promaticstechnologies.com/zportix/webservices/basketArticle/"+localStorage['nfl_id'];
// $state.go('app.articles');
}
// if(localStorage['gattu']== 'Haas F1 Team'||'Manor Racing MRT' || 'McLaren Honda Formula 1 Team' || 'Mercedes AMG Petronas Formula One Team' ||'Red Bull Racing'||'Renault Sport Formula 1 Team'||'Sahara Force India Formula One Team'||'Sauber F1 Team'||'Scuderia Ferrari'||'Scuderia Toro Rosso'){

console.log("motar artical"+localStorage['main_game']);
$http({
method: 'GET',
url: url_ladka,
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// 'Access-Control-Allow-Origin' :'*',
// 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
}
}).success(function(data, status, header, config, message) {

//$scope.data = data;
$scope.articles=data;
console.log(data);
//$scope.auditions.applied = $scope.AppliedAuditions;

$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});



$scope.art = function(a,b) {
var ad_title=a;
var description=b;
console.log("title"+ad_title);
console.log("description"+description);

$ionicActionSheet.show({
titleText: 'Portsmouth - Crawley Town ',
buttons: [
{ text: '<i class="icon ion-ios-more assertive assertive"></i> <span class="assertive"> view more </span>' },
{ text: '<i class="icon ion-android-share-alt  assertive"></i><span class="assertive" > Share </span>' },

{text:'<i class="icon ion-compose assertive assertive"></i><span class="assertive">comment </span>'},


],

buttonClicked: function(index) {
if(index === 0){
console.log("view more");

console.log(+$stateParams.id);

$ionicLoading.show({
template: 'Please Wait...'
});
$http({
method: 'GET',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/description/'+$stateParams.id,
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {

//$scope.data = data;
$scope.detail=data;
console.log("Balleee");
console.log($scope.detail);






//$scope.auditions.applied = $scope.AppliedAuditions;

$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});


}
if (index==1) {
var title=ad_title;
var message =description;
var image ='img/background.png';
//var fileddd='abc.com';
//var link = 'http://test.com';

console.log("share");
$cordovaSocialSharing.share(message,title,null, "http://europa.promaticstechnologies.com") // Share via native share sheet
.then(function(result) {
// Success!

}, function(err) {
// An error occured. Show a message to the user
});
};
if(index==2){
$state.go("app.login");
/*

$scope.data = {};
$ionicPopup.show({
template: ' <input type="username" placeholder="Username" ng-model="username" style="width:100%; height:35px;"><br> <input type="password" name="password" placeholder="password" style="width:100%; height:35px;" ng-model="password">',

title: 'Login',

subTitle: 'Please Enter Username or password',
scope: $scope,
buttons: [
{
text: 'Cancel',
type: 'positive',

handler: data => {
console.log('Cancel clicked');
}
},
{
text: 'Save',
type: 'positive',
handler: data => {

console.log('Saved clicked');
}
}
]
});

console.log("comment");



*/
}
},
destructiveButtonClicked: function() {
console.log('DESTRUCT');
return true;
}
});
};


})
.controller('DetailCtrl', function($scope, $http, Category, $stateParams, $ionicLoading,$state) {
console.log(+$stateParams.id);

/*$ionicLoading.show({
template: 'Please Wait...'
});*/
$http({
method: 'GET',
url: 'http://europa.promaticstechnologies.com/zportix/webservices/description/'+$stateParams.id,
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).success(function(data, status, header, config, message) {
$state.reload('app.detail');

//$scope.data = data;
$scope.detail=data;
console.log("Balleee");
console.log($scope.detail);






//$scope.auditions.applied = $scope.AppliedAuditions;

$ionicLoading.hide();
}).error(function(data, status, header, config, message) {
$ionicLoading.hide();
//LoadingSpinner.hide('pageLoading');
});

$scope.app_seeComment=function(id){
//console.log('artical_id see'+id);
var artical_id=id;
// localStorage.setItem('artical_id', artical_id);
console.log('artical_id see local'+artical_id);
$state.go("app.seeComment");
}
})
