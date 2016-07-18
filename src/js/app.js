var MissileListApp = angular.module('MissileListApp', []);

MissileListApp.controller('MissileListControl', function($scope) {
  $scope.headings = [
    {
      "title": "ID #",
      "filter": "id",
      "selected": true
    },
    {
      "title": "DOD Name",
      "filter": "dod_name",
      "selected": true
    },
    {
      "title": "NATO Name",
      "filter": "nato_name",
      "selected": true
    },
    {
      "title": "Meaning of NATO Name",
      "filter": "nato_meaning",
      "selected": false
    },
    {
      "title": "GRAU",
      "filter": "grau",
      "selected": false
    },
    {
      "title": "Domestic Name",
      "filter": "domestic_name",
      "selected": true
    },
    {
      "title": "Meaning of Domestic Name",
      "filter": "domestic_meaning",
      "selected": false
    },
    {
      "title": "Country",
      "filter": "country",
      "selected": true
    },
    {
      "title": "Description",
      "filter": "description",
      "selected": true
    },
    {
      "title": "MANPADS",
      "filter": "manpads",
      "selected": true
    },
    {
      "title": "RF Tracking",
      "filter": "rf_tracking",
      "selected": true
    },
    {
      "title": "IR Tracking",
      "filter": "ir_tracking",
      "selected": true
    },
    {
      "title": "Radars",
      "filter": "radars",
      "selected": true
    },
    {
      "title": "Command Guidance",
      "filter": "command_guidance",
      "selected": true
    },
    {
      "title": "Homing Guidance",
      "filter": "homing_guidance",
      "selected": true
    },
    {
      "title": "IOC Year",
      "filter": "ioc_year",
      "selected": true
    }
  ];

  $scope.missiles = [
    {
      "id": "1",
      "dod_name": "SA-1",
      "nato_name": "Guild",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-25 Berkut",
      "domestic_meaning": "Golden Eagle",
      "country": "RU",
      "description": "First operational SAM in USSR. Used only to defend Moscow. No longer in use.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "B-200",
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1955"
    },
    {
      "id": "2",
      "dod_name": "SA-2",
      "nato_name": "Guideline",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-75 Dvina",
      "domestic_meaning": "After the Dvina river",
      "country": "RU",
      "description": "High altitude air defense system.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "SR, FS, KR",
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1957"
    },
    {
      "id": "3",
      "dod_name": "SA-3",
      "nato_name": "Goa",
      "nato_meaning": "A state in southwestern India",
      "grau": null,
      "domestic_name": "S-125 Neva/Pechora",
      "domestic_meaning": "After Neva river and town of Pechora",
      "country": "RU",
      "description": "Complements SA-1 and SA-2. More effective against maneuverable targets.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "FF, SE, LB, SN",
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1961"
    },
    {
      "id": "4",
      "dod_name": "SA-4",
      "nato_name": "Ganef",
      "nato_meaning": "Yiddish meaning \"\"thief\"\"",
      "grau": null,
      "domestic_name": "9M8 Krug",
      "domestic_meaning": "Circle",
      "country": "RU",
      "description": "Medium range, medium-to-high altitude.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "Maybe",
      "radars": "LT, PH, TS",
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1965"
    },
    {
      "id": "5",
      "dod_name": "SA-5",
      "nato_name": "Gammon",
      "nato_meaning": "A hind leg of pork after curing by dry-salting or brining",
      "grau": null,
      "domestic_name": "S-200 Volga",
      "domestic_meaning": "After Volga river",
      "country": "RU",
      "description": "Very long range, medium-to-high altitude. Defends large areas from bomber attacks.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "TK, BB, BN, BT, BL, SN, OP, SE",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1967"
    },
    {
      "id": "6",
      "dod_name": "SA-6",
      "nato_name": "Gainful",
      "nato_meaning": null,
      "grau": "2K12",
      "domestic_name": "3M9 Kub/Kvadrat",
      "domestic_meaning": "Cube and Quadrat",
      "country": "RU",
      "description": "Low-to-medium altitude. Mobile. Defends ground forces from air attack.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "SF",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1970"
    },
    {
      "id": "7",
      "dod_name": "SA-7",
      "nato_name": "Grail",
      "nato_meaning": null,
      "grau": "9K32",
      "domestic_name": "9K32 Strela-2",
      "domestic_meaning": "Arrow",
      "country": "RU",
      "description": null,
      "manpads": "Yes",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1968"
    },
    {
      "id": "8",
      "dod_name": "SA-8",
      "nato_name": "Gecko",
      "nato_meaning": null,
      "grau": "9K33",
      "domestic_name": "9K33 Osa",
      "domestic_meaning": "Wasp",
      "country": "RU",
      "description": "Highly mobile, low altitude, short range.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "LR, LT, FF, TS",
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1971"
    },
    {
      "id": "9",
      "dod_name": "SA-9",
      "nato_name": "Gaskin",
      "nato_meaning": "The hind leg of a horse",
      "grau": "9K31",
      "domestic_name": "9K31 Strela-1",
      "domestic_meaning": "Arrow",
      "country": "RU",
      "description": "Highly mobile, low altitude, short range. IR",
      "manpads": "No",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": "N/A",
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1968"
    },
    {
      "id": "10",
      "dod_name": "SA-10",
      "nato_name": "Grumble",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-300P/PS/PT",
      "domestic_meaning": null,
      "country": "RU",
      "description": "Aircraft, cruise missile, and ballistic missile defense.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "Maybe",
      "radars": "Numerous",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1978"
    },
    {
      "id": "11",
      "dod_name": "SA-11",
      "nato_name": "Gadfly",
      "nato_meaning": "A fly that bites livestock",
      "grau": "9K37",
      "domestic_name": "9K37 Buk",
      "domestic_meaning": "Beech (tree)",
      "country": "RU",
      "description": "Medium range. Defends against cruise missiles, smart bombs, aircraft, and UAVs.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "Numerous",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1979"
    },
    {
      "id": "12",
      "dod_name": "SA-12",
      "nato_name": "Gladiator/Giant",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-300V",
      "domestic_meaning": null,
      "country": "RU",
      "description": "Aircraft, cruise missile, and ballistic missile defense. Adopted for ground forces.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "Numerous",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1983"
    },
    {
      "id": "13",
      "dod_name": "SA-13",
      "nato_name": "Gopher",
      "nato_meaning": null,
      "grau": "9K35",
      "domestic_name": "9K35 Strela-10",
      "domestic_meaning": "Arrow",
      "country": "RU",
      "description": "Highly mobile, visually aimed, optical/infrared, low altitude, short range.",
      "manpads": "No",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1976"
    },
    {
      "id": "14",
      "dod_name": "SA-14",
      "nato_name": "Gremlin",
      "nato_meaning": "A creature commonly depicted as mischievous and mechanically oriented, with a specific interest in aircraft.",
      "grau": "9K36",
      "domestic_name": "9K36 Strela-3",
      "domestic_meaning": "Arrow",
      "country": "RU",
      "description": null,
      "manpads": "Yes",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1974"
    },
    {
      "id": "15",
      "dod_name": "SA-15",
      "nato_name": "Gauntlet",
      "nato_meaning": "A stout glove with a long loose wrist.",
      "grau": "9K330/9K331/9K332",
      "domestic_name": "Tor",
      "domestic_meaning": "Torus",
      "country": "RU",
      "description": "All weather. Low-to-medium altitude. Short range.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1986"
    },
    {
      "id": "16",
      "dod_name": "SA-16",
      "nato_name": "Gimlet",
      "nato_meaning": "A small screw-tipped tool for boring holes",
      "grau": "9K310",
      "domestic_name": "9K310 Igla-1",
      "domestic_meaning": "Needle",
      "country": "RU",
      "description": "Early variant of SA-18.",
      "manpads": "Yes",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1981"
    },
    {
      "id": "17",
      "dod_name": "SA-17",
      "nato_name": "Grizzly",
      "nato_meaning": null,
      "grau": "9K37",
      "domestic_name": "9K37 Buk-M1-2",
      "domestic_meaning": "Beech (tree)",
      "country": "RU",
      "description": "Improved SA-11 system capable of shooting down ballistic missiles and surface targets.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": "Numerous",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1998"
    },
    {
      "id": "18",
      "dod_name": "SA-18",
      "nato_name": "Grouse",
      "nato_meaning": "A type of bird.",
      "grau": "9K38",
      "domestic_name": "9K38 Igla",
      "domestic_meaning": "Needle",
      "country": "RU",
      "description": null,
      "manpads": "Yes",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "1981"
    },
    {
      "id": "19",
      "dod_name": "SA-19",
      "nato_name": "Grison",
      "nato_meaning": "A type of slender animal with short legs.",
      "grau": "2K22",
      "domestic_name": "2K22 Tunguska",
      "domestic_meaning": "After Tunguska river",
      "country": "RU",
      "description": "All weather, day/night protection of ground forces.",
      "manpads": "No",
      "rf_tracking": null,
      "ir_tracking": null,
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": "1982"
    },
    {
      "id": "20",
      "dod_name": "SA-20",
      "nato_name": "Gargoyle",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-300PMU 1/2",
      "domestic_meaning": null,
      "country": "RU",
      "description": "Aircraft, cruise missile, and ballistic missile defense. TVM",
      "manpads": "No",
      "rf_tracking": null,
      "ir_tracking": null,
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "No",
      "ioc_year": "1992"
    },
    {
      "id": "21",
      "dod_name": "SA-21",
      "nato_name": "Growler",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-400 Triumf",
      "domestic_meaning": "Triumph",
      "country": "RU",
      "description": "Medium-to-extremely-long range. Three different missiles to cover performance envelope.",
      "manpads": "No",
      "rf_tracking": null,
      "ir_tracking": null,
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": "2007"
    },
    {
      "id": "22",
      "dod_name": "SA-22",
      "nato_name": "Greyhound",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "Pantsir-S1",
      "domestic_meaning": null,
      "country": "RU",
      "description": "Provides point air defence. Uses phased array radars for target acqusition and tracking.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "Yes",
      "radars": "Complex",
      "command_guidance": "Maybe",
      "homing_guidance": "No",
      "ioc_year": "2012"
    },
    {
      "id": "23",
      "dod_name": "SA-23",
      "nato_name": "Gladiator/Giant",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-300M \"\"Antley-2500\"\"",
      "domestic_meaning": null,
      "country": "RU",
      "description": "Anti-ballistic missile system.",
      "manpads": "No",
      "rf_tracking": null,
      "ir_tracking": null,
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": "2013"
    },
    {
      "id": "24",
      "dod_name": "SA-24",
      "nato_name": "Grinch",
      "nato_meaning": null,
      "grau": "9K338",
      "domestic_name": "9K338 Igla-S",
      "domestic_meaning": "Needle",
      "country": "RU",
      "description": null,
      "manpads": "Yes",
      "rf_tracking": "No",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": "No",
      "homing_guidance": "Yes",
      "ioc_year": "2004"
    },
    {
      "id": "25",
      "dod_name": "HQ1",
      "nato_name": "Guideline",
      "nato_meaning": null,
      "grau": null,
      "domestic_name": "S-75 Dvina",
      "domestic_meaning": null,
      "country": "CN",
      "description": null,
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "26",
      "dod_name": "HQ7",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Short range air defense. Reverse-engineered Crotale.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "1986"
    },
    {
      "id": "27",
      "dod_name": "HQ61",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Low-to-medium air defense.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": "1986"
    },
    {
      "id": "28",
      "dod_name": "HQ6",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Medium ranghe. SARH.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "Late 80s"
    },
    {
      "id": "29",
      "dod_name": "HQ64",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Improved HQ6. Four missiles per TEL instead of two.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "Late 80s"
    },
    {
      "id": "30",
      "dod_name": "HQ17",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Modernized Russian Tor-M1. Adds IFF and other improvements.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "31",
      "dod_name": "FL3000N",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Short range air defense.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "Yes",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": "90s"
    },
    {
      "id": "32",
      "dod_name": "KS1/HQ12",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "First Chinese system to adopt phased array radar.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "33",
      "dod_name": "FM-3000",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": null,
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "34",
      "dod_name": "Sky Dragon 12",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": null,
      "manpads": "No",
      "rf_tracking": null,
      "ir_tracking": null,
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "35",
      "dod_name": "Sky Dragon 50",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Air defense system. Tracks 144 targets, engages 12, has 24 missiles.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "Yes",
      "radars": "IBIS 130, IBIS 200",
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "2007"
    },
    {
      "id": "36",
      "dod_name": "DK10",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "ARH version of HQ61.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Maybe",
      "homing_guidance": "Yes",
      "ioc_year": "2012"
    },
    {
      "id": "37",
      "dod_name": "HQ16",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Likely Buk clone. Capable of hitting very-low-to-high altitude targets.",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "38",
      "dod_name": "FK3",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Improved KS1 with enhanced range and altitude",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": null,
      "homing_guidance": null,
      "ioc_year": null
    },
    {
      "id": "39",
      "dod_name": "HQ9",
      "nato_name": null,
      "nato_meaning": null,
      "grau": null,
      "domestic_name": null,
      "domestic_meaning": null,
      "country": "CN",
      "description": "Medium to long range. ARH",
      "manpads": "No",
      "rf_tracking": "Yes",
      "ir_tracking": "No",
      "radars": null,
      "command_guidance": "Yes",
      "homing_guidance": "Yes",
      "ioc_year": "2009"
    }
  ];

  // Function to get all of the unique elements used in a field.
  $scope.getOptionsFor = function getOptionsFor(field) {
    elements = [];

    function contains(a, obj) {
      var i = a.length;
      while (i--) {
       if (a[i] === obj) {
         return true;
       }
      }
      return false;
    };

    angular.forEach($scope.missiles, function(value, key) {
      if (!contains(elements, value[field])) {
        elements.push(value[field]);
      };
    });

    return elements;
  };

  // Check for subfilter
  function noSubFilter(subFilterObj) {
    for (var key in subFilterObj) {
      if (subFilterObj[key]) return false;
    }
    return true;
  };

  // Filter function
  $scope.filterByProperty = function filterByProperty(missile) {
    var matchesAND = true;
    for (var prop in $scope.filter) {
      if (noSubFilter($scope.filter[prop])) continue;
      if (!$scope.filter[prop][missile[prop]]) {
        matchesAND = false;
        break;
      }
    }

    return matchesAND;
  }

  // Change ID #'s from string to number so sorting we don't get 1, 10, 2
  angular.forEach($scope.missiles, function (missile) {
    missile.id = parseFloat(missile.id);
  });

  // Init filter
  $scope.filter = {};

  // Init default filter options
  $scope.sort = 'id';
});
