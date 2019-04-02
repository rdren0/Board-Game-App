const localGameParlours = [
  {
    "name": "Board Game Republic",
    "address": "900 W. 1st Ave. Ste. 130, Denver, CO 80223",
    "website": "http://www.boardgamerepublic.com",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1600,
    "weekdayClose": 2200,
    "weekendOpen": 1100,
    "weekendClose": 2200,
    "googleMapsLink": "https://goo.gl/maps/cRFrmM57bzE2",
    "bringYourOwnGame": true,
    "gamesOffered": [1, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 49]
  },
  {
    "name": "The Game Lounge",
    "address": "1490 Eudora St., Denver, CO 80220",
    "website": "http://www.denvergamelounge.com",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1600,
    "weekdayClose": 2300,
    "weekendOpen": 1300,
    "weekendClose": 0100,
    "googleMapsLink": "https://goo.gl/maps/KrMBtpUw15k",
    "bringYourOwnGame": true,
    "gamesOffered": [8, 9, 36, 37, 52, 53, 54]
  },
  {
    "name": "Grandma's House",
    "address": "1710 South Broadway, Denver, CO 80210",
    "website": "http://www.grandmasbeer.co",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1200,
    "weekdayClose": 2200,
    "weekendOpen": 1200,
    "weekendClose": 2400,
    "googleMapsLink": "https://goo.gl/maps/9yTLtJHqiZC2",
    "bringYourOwnGame": true,
    "gamesOffered": [52, 53, 54]
  },
  {
    "name": "Bardo Coffee House",
    "address": "238 South Broadway, Denver, CO 80209",
    "website": "http://www.bardocoffee.com",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 0600,
    "weekdayClose": 2400,
    "weekendOpen": 0600,
    "weekendClose": 2400,
    "googleMapsLink": "https://goo.gl/maps/z4hGoDryFU42",
    "bringYourOwnGame": true,
    "gamesOffered": [7, 8, 15, 52, 53, 54]
  },
  {
    "name": "Enchanted Grounds",
    "address": "8800 South Colorado Blvd., Highlands Ranch, CO 80126",
    "website": "http://www.enchantedgrounds.com",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": true,
    "weekdayOpen": 0600,
    "weekdayClose": 2200,
    "weekendOpen": 0700,
    "weekendClose": 2400,
    "googleMapsLink": "https://goo.gl/maps/9PD2Fmp4Ja82",
    "bringYourOwnGame": true,
    "gamesOffered": [1, 4, 8, 11, 12, 17, 19, 23, 26, 31, 40, 42, 50]
  },
  {
    "name": "Denver Central Games",
    "address": "10101 East Hampden Ave., Ste. 102, Denver, CO 80231",
    "website": "http://www.denvercentralgames.com",
    "hasFood": false,
    "hasDrinks": false,
    "sellsGames": true,
    "weekdayOpen": 1200,
    "weekdayClose": 2300,
    "weekendOpen": 1200,
    "weekendClose": 2000,
    "googleMapsLink": "https://goo.gl/maps/r4YGMYKEZwF2",
    "bringYourOwnGame": true,
    "gamesOffered": [1, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 19, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 38, 39, 40, 41, 49, 51]
  },
  {
    "name": "The Wizard's Chest",
    "address": "451 Broadway, Denver, CO 80203",
    "website": "http://www.wizardschest.com",
    "hasFood": false,
    "hasDrinks": false,
    "sellsGames": true,
    "weekdayOpen": 1000,
    "weekdayClose": 1900,
    "weekendOpen": 1000,
    "weekendClose": 1900,
    "googleMapsLink": "https://goo.gl/maps/xmJTZBwLMG22",
    "bringYourOwnGame": true,
    "gamesOffered": [1, 8, 23, 46, 47, 50]
  },
  {
    "name": "Level 7 Games",
    "address": "1535 South Kipling Pkwy. Unit J, Lakewood, CO 80232",
    "website": "www.level7games.com",
    "hasFood": false,
    "hasDrinks": false,
    "sellsGames": true,
    "weekdayOpen": 1000,
    "weekdayClose": 2100,
    "weekendOpen": 1000,
    "weekendClose": 2200,
    "googleMapsLink": "https://goo.gl/maps/mWgXKJRvCg42",
    "bringYourOwnGame": true,
    "gamesOffered": [1, 4, 7, 8, 15, 19, 23, 26, 35, 41, 42, 43, 44]
  },
  {
    "name": "Denver Beer Company",
    "address": "1695 Platte St, Denver, CO 80202",
    "website": "http://denverbeerco.com/",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1100,
    "weekdayClose": 2300,
    "weekendOpen": 1100,
    "weekendClose": 2300,
    "googleMapsLink": "https://goo.gl/maps/tHGVH9Uv2vB2",
    "bringYourOwnGame": true,
    "gamesOffered": [8, 9, 52, 54]
  },
  {
    "name": "Woods Boss Brewing",
    "address": "1210 California St, Denver, CO 80205",
    "website": "https://www.woodsbossbrewing.com/",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1400,
    "weekdayClose": 2200,
    "weekendOpen": 1200,
    "weekendClose": 2200,
    "googleMapsLink": "https://goo.gl/maps/TZQz89KDYGo",
    "bringYourOwnGame": true,
    "gamesOffered": [3, 9, 36, 52]
  }
]

const boardGames = [
  {
    "name": "7 Wonders",
    "players": "2-7",
    "weight": "medium",
    "timeToPlay": 30,
    "type": "strategy",
    "features": [
      "card drafting",
      "hand management"
    ],
    "gameId": 1
  },
  {
    "name": "Agricola",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "economic",
      "worker placement"
    ],
    "gameId": 2
  },
  {
    "name": "BANG!",
    "players": "4-7",
    "weight": "light",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "bluffing",
      "card game",
      "hand management"
    ],
    "gameId": 3
  },
  {
    "name": "Betrayal at House on the Hill",
    "players": "3-6",
    "weight": "medium",
    "timeToPlay": 60,
    "type": "thematic",
    "features": [
      "adventure",
      "hidden traitor",
      "dice rolling",
      "cooperative"
    ],
    "gameId": 4
  },
  {
    "name": "Boss Monster",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 20,
    "type": "strategy",
    "features": [
      "auction",
      "family"
    ],
    "gameId": 5
  },
  {
    "name": "Camel Up",
    "players": "2-8",
    "weight": "medium",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "dice rolling",
      "family",
      "wagering"
    ],
    "gameId": 6
  },
  {
    "name": "Carcassonne",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 45,
    "type": "strategy",
    "features": [
      "city building",
      "family"
    ],
    "gameId": 7
  },
  {
    "name": "Catan",
    "players": "3-6",
    "weight": "medium",
    "timeToPlay": 100,
    "type": "strategy",
    "features": [
      "trading",
      "dice rolling",
      "family"
    ],
    "gameId": 8
  },
  {
    "name": "Codenames",
    "players": "2-8",
    "weight": "light",
    "timeToPlay": 15,
    "type": "party",
    "features": [
      "card game",
      "deduction",
      "memory"
    ],
    "gameId": 9
  },
  {
    "name": "Coup",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 15,
    "type": "party",
    "features": [
      "bluffing",
      "card game",
      "memory"
    ],
    "gameId": 10
  },
  {
    "name": "Dark Moon",
    "players": "3-7",
    "weight": "medium",
    "timeToPlay": 75,
    "type": "thematic",
    "features": [
      "bluffing",
      "dice rolling",
      "hidden traitor"
    ],
    "gameId": 11
  },
  {
    "name": "Dinosaur Island",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "worker placement",
      "science fiction",
      "dice rolling"
    ],
    "gameId": 12
  },
  {
    "name": "Enchanted Forest",
    "players": "2-6",
    "weight": "light",
    "timeToPlay": 60,
    "type": "children's",
    "features": [
      "adventure",
      "card game",
      "memory"
    ],
    "gameId": 13
  },
  {
    "name": "Five Tribes",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 80,
    "type": "strategy",
    "features": [
      "area control",
      "auction"
    ],
    "gameId": 14
  },
  {
    "name": "Forbidden Island",
    "players": "1-4",
    "weight": "light",
    "timeToPlay": 120,
    "type": "family",
    "features": [
      "cooperative",
      "adventure",
      "modular board"
    ],
    "gameId": 15
  },
  {
    "name": "Great Western Trail",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 150,
    "type": "strategy",
    "features": [
      "set collection",
      "deck building"
    ],
    "gameId": 16
  },
  {
    "name": "Galaxy Trucker",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 60,
    "type": "thematic",
    "features": [
      "dice rolling",
      "tile placement"
    ],
    "gameId": 17
  },
  {
    "name": "Good Dog, Bad Zombie",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "cooperative",
      "hand management",
      "area movement"
    ],
    "gameId": 18
  },
  {
    "name": "Hive",
    "players": "2",
    "weight": "medium",
    "timeToPlay": 20,
    "type": "abstract",
    "features": [
      "grid movement",
      "tile placement"
    ],
    "gameId": 19
  },
  {
    "name": "Istanbul",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 60,
    "type": "strategy",
    "features": [
      "modular board",
      "grid movement",
      "pick-up and deliver"
    ],
    "gameId": 20
  },
  {
    "name": "Jaipur",
    "players": "2",
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "set collection"
    ],
    "gameId": 21
  },
  {
    "name": "Lanterns: The Harvest Festival",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "tile placement",
      "hand management"
    ],
    "gameId": 22
  },
  {
    "name": "Lords of Waterdeep",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "set collection",
      "card drafting",
      "worker placement"
    ],
    "gameId": 23
  },
  {
    "name": "Machi Koro",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "dice rolling"
    ],
    "gameId": 24
  },
  {
    "name": "Mouse Trap",
    "players": "4",
    "weight": "light",
    "timeToPlay": 30,
    "type": "children's",
    "features": [
      "roll / spin and move"
    ],
    "gameId": 25
  },
  {
    "name": "New York 1901",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 60,
    "type": "family",
    "features": [
      "area control",
      "tile placement",
      "card drafting"
    ],
    "gameId": 26
  },
  {
    "name": "Niagara",
    "players": "3-5",
    "weight": "light",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "hand management",
      "pick-up and deliver"
    ],
    "gameId": 27
  },
  {
    "name": "Paperback",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 45,
    "type": "strategy",
    "features": [
      "cooperative",
      "card drafting"
    ],
    "gameId": 28
  },
  {
    "name": "Patchwork",
    "players": "2",
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "card drafting",
      "tile placement"
    ],
    "gameId": 29
  },
  {
    "name": "Pina Pirata",
    "players": "2-6",
    "weight": "light",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "hand management"
    ],
    "gameId": 30
  },
  {
    "name": "Scythe",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 115,
    "type": "strategy",
    "features": [
      "area control",
      "grid movement"
    ],
    "gameId": 31
  },
  {
    "name": "Race For the Galaxy",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 60,
    "type": "strategy",
    "features": [
      "card game",
      "hand management"
    ],
    "gameId": 32
  },
  {
    "name": "Sagrada",
    "players": "1-4",
    "weight": "medium",
    "timeToPlay": 45,
    "type": "abstract",
    "features": [
      "card drafting",
      "dice rolling"
    ],
    "gameId": 33
  },
  {
    "name": "Sheriff of Nottingham",
    "players": "3-5",
    "weight": "medium",
    "timeToPlay": 60,
    "type": "party",
    "features": [
      "card drafting",
      "bluffing"
    ],
    "gameId": 34
  },
  {
    "name": "Skull",
    "players": "3-6",
    "weight": "light",
    "timeToPlay": 45,
    "type": "party",
    "features": [
      "auction",
      "hand management"
    ],
    "gameId": 35
  },
  {
    "name": "Small World",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 80,
    "type": "srategy",
    "features": [
      "dice rolling",
      "area control"
    ],
    "gameId": 36
  },
  {
    "name": "Splendor",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 30,
    "type": "family",
    "features": [
      "set collection",
      "card drafting"
    ],
    "gameId": 37
  },
  {
    "name": "Sushi Go!",
    "players": "2-5",
    "weight": "light",
    "timeToPlay": 15,
    "type": "family",
    "features": [
      "card drafting",
      "hand management"
    ],
    "gameId": 38
  },
  {
    "name": "Takenoko",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "grid movement",
      "modular board",
      "dice rolling"
    ],
    "gameId": 39
  },
  {
    "name": "Tokaido",
    "players": "2-5",
    "weight": "light",
    "timeToPlay": 45,
    "type": "family",
    "features": [
      "set collection"
    ],
    "gameId": 40
  },
  {
    "name": "Terraforming Mars",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "hand management",
      "card drafting",
      "tile placement"
    ],
    "gameId": 41
  },
  {
    "name": "Viticulture",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "hand management",
      "worker placement"
    ],
    "gameId": 42
  },
  {
    "name": "Twighlight Struggle",
    "players": "2",
    "weight": "heavy",
    "timeToPlay": 180,
    "type": "strategy",
    "features": [
      "area control",
      "dice rolling",
      "hand management"
    ],
    "gameId": 43
  },
  {
    "name": "Colt Express",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 40,
    "type": "family",
    "features": [
      "family",
      "modular board",
      "memory"
    ],
    "gameId": 44
  },
  {
    "name": "Gloomhaven",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "grid movement",
      "cooperative",
      "modular board",
      "campaign"
    ],
    "gameId": 45
  },
  {
    "name": "Spirit Island",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "cooperative",
      "hand management",
      "area control"
    ],
    "gameId": 46
  },
  {
    "name": "Twilight Imperium",
    "players": "3-6",
    "weight": "heavy",
    "timeToPlay": 300,
    "type": "strategy",
    "features": [
      "grid movement",
      "area control",
      "dice rolling"
    ],
    "gameId": 47
  },
  {
    "name": "Star Wars: Rebellion",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 240,
    "type": "strategy",
    "features": [
      "dice rolling",
      "area control",
      "hand management"
    ],
    "gameId": 48
  },
  {
    "name": "Power Grid",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 120,
    "type": "strategy",
    "features": [
      "auction",
      "route building"
    ],
    "gameId": 49
  },
  {
    "name": "Photosynthesis",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 60,
    "type": "abstract",
    "features": [
      "action point allowance"
    ],
    "gameId": 50
  },
  {
    "name": "Root",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 90,
    "type": "strategy",
    "features": [
      "dice rolling",
      "area control",
      "hand management"
    ],
    "gameId": 51
  },
  {
    "name": "Black Fleet",
    "players": "3-4",
    "weight": "light",
    "timeToPlay": 60,
    "type": "family",
    "features": [
      "area movement",
      "pick-up and deliver"
    ],
    "gameId": 52
  },
  {
    "name": "Cards Against Humanity",
    "players": "4-30",
    "weight": "light",
    "timeToPlay": 30,
    "type": "party",
    "features": [
      "hand management"
    ],
    "gameId": 53
  },
  {
    "name": "Sorry!",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 30,
    "type": "children's",
    "features": [
      "roll / spin and move"
    ],
    "gameId": 54
  },
  {
    "name": "Connect Four",
    "players": "2",
    "weight": "light",
    "timeToPlay": 10,
    "type": "children's",
    "features": [
      "pattern building"
    ],
    "gameId": 55
  },
]

module.exports = {
  localGameParlours,
  boardGames
}