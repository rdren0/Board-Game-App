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
  },
  {
    "name": "Tabletop Tap",
    "address": "3394 S Broadway, Englewood, CO 80113",
    "website": "https://www.facebook.com/tabletoptap",
    "hasFood": false,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1200,
    "weekdayClose": 2300,
    "weekendOpen": 1200,
    "weekendClose": 2300,
    "googleMapsLink": "https://goo.gl/maps/duQYiYhDrPr",
    "bringYourOwnGame": true,
    "gamesOffered": [8, 52, 53, 54]
  },
  {
    "name": "Whiskey Bar",
    "address": "2203 Larimer St, Denver, CO 80205",
    "website": "http://www.whiskeybardenver.com/",
    "hasFood": false;
    "hasDrinks": true;
    "sellsGames": false;
    "weekdayOpen": 1600;
    "weekdayClose": 0200;
    "weekendOpen": 1600;
    "weekendClose": 0200;
    "googleMapsLink": "https://goo.gl/maps/L6qVhjpEhXU2"
    "bringYourOwnGame": false;
    "gamesOffered": [52, 53, 54]
  },
  {
    "name": "Wyman's",
    "address": "2033 E 13th Ave, Denver, CO 80206",
    "website": "https://wymansno5.com/",
    "hasFood": true;
    "hasDrinks": true;
    "sellsGames": false;
    "weekdayOpen": 1400,
    "weekdayClose": 0200,
    "weekendOpen": 1100,
    "weekendClose": 0200,
    "googleMapsLink": "https://goo.gl/maps/yMhwgrvVNeT2"
    "bringYourOwnGame": false;
    "gamesOffered": [8, 25, 52, 53, 54]
  },
  {
    "name": "Fainting Goat Pub",
    "address": "846 Broadway, Denver, CO 80203",
    "website": "http://thefaintinggoatdenver.com",
    "hasFood": true,
    "hasDrinks": true,
    "sellsGames": false,
    "weekdayOpen": 1100,
    "weekdayClose": 0200,
    "weekendOpen": 1100,
    "weekendClose": 0200,
    "googleMapsLink": "https://goo.gl/maps/3n5j2P2x3bo"
    "bringYourOwnGame": false,
    "gamesOffered": [52, 53, 54]
  }
]

const boardGames = [
  {
    "name": "7 Wonders",
    "players": "2-7",
    "weight": "medium",
    "timeToPlay": 30,
    "type": [
      "city building",
      "manage resources"],
    "gameId": 1
  },
  {
    "name": "Agricola",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": [
      "city building",
      "manage resources"
    ],
    "gameId": 2
  },
  {
    "name": "BANG!",
    "players": "4-7",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "bluff / deceive",
      "social",
      "laugh out loud"
    ],
    "gameId": 3
  },
  {
    "name": "Betrayal at House on the Hill",
    "players": "3-6",
    "weight": "medium",
    "timeToPlay": 60,
    "type": [
      "cooperative",
      "bluff / deceive",
      "exploration",
      "survive"
    ],
    "gameId": 4
  },
  {
    "name": "Boss Monster",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 20,
    "type": [
      "survive"
    ],
    "gameId": 5
  },
  {
    "name": "Camel Up",
    "players": "2-8",
    "weight": "medium",
    "timeToPlay": 30,
    "type": [
      "laugh out loud",
      "family"
    ],
    "gameId": 6
  },
  {
    "name": "Carcassone",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 45,
    "type": [
      "think critically",
      "territory control"
    ],
    "gameId": 7
  },
  {
    "name": "Catan",
    "players": "3-6",
    "weight": "medium",
    "timeToPlay": 100,
    "type": [
      "trade",
      "risk take",
      "manage resources"
    ],
    "gameId": 8
  },
  {
    "name": "Codenames",
    "players": "2-8",
    "weight": "light",
    "timeToPlay": 15,
    "type": [
      "social",
      "guessing",
      "think critically"
    ],
    "gameId": 9
  },
  {
    "name": "Coup",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 15,
    "type": [
      "bluff / deceive",
      "negotiate"
    ],
    "gameId": 10
  },
  {
    "name": "Dark Moon",
    "players": "3-7",
    "weight": "medium",
    "timeToPlay": 75,
    "type": [
      "bluff / deceive",
      "negotiate",
      "persuasion"
    ],
    "gameId": 11
  },
  {
    "name": "Dinosaur Island",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": [
      "economic",
      "science fiction"
    ],
    "gameId": 12
  },
  {
    "name": "Enchanted Forest",
    "players": "2-6",
    "weight": "light",
    "timeToPlay": 60,
    "type": [
      "family",
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
    "type": [
      "strategy",
      "mythology"
    ],
    "gameId": 14
  },
  {
    "name": "Forbidden Island",
    "players": "1-4",
    "weight": "light",
    "timeToPlay": 120,
    "type": [
      "cooperative",
      "family",
      "science fiction"
    ],
    "gameId": 15
  },
  {
    "name": "Great Western Trail",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 150,
    "type": [
      "strategy",
      "american west",
      "animals"
    ],
    "gameId": 16
  },
  {
    "name": "Galaxy Trucker",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 60,
    "type": [
      "thematic",
      "science fiction",
      "transportation"
    ],
    "gameId": 17
  },
  {
    "name": "Good Dog, Bad Zombie",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 90,
    "type": [
      "cooperative",
      "zombies",
      "animals"
    ],
    "gameId": 18
  },
  {
    "name": "Hive",
    "players": "2",
    "weight": "medium",
    "timeToPlay": 20,
    "type": [
      "strategy",
      "abstract"
    ],
    "gameId": 19
  },
  {
    "name": "Istanbul",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 60,
    "type": [
      "strategy",
      "economic",
      "pick-up and deliver"
    ],
    "gameId": 20
  },
  {
    "name": "Jaipur",
    "players": "2",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "family",
      "animals",
      "card game"
    ],
    "gameId": 21
  },
  {
    "name": "Lanterns: The Harvest Festival",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "family",
      "hand management"
    ],
    "gameId": 22
  },
  {
    "name": "Lords of Waterdeep",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 120,
    "type": [
      "strategy",
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
    "type": [
      "family",
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
    "type": [
      "children's",
      "roll / spin"
    ],
    "gameId": 25
  },
  {
    "name": "New York 1901",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 60,
    "type": [
      "family",
      "tile placing",
      "card drafting"
    ],
    "gameId": 26
  },
  {
    "name": "Niagara",
    "players": "3-5",
    "weight": "light",
    "timeToPlay": 45,
    "type": [
      "family",
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
    "type": [
      "cooperative",
      "strategy",
      "deck building",
      "card drafting"
    ],
    "gameId": 28
  },
  {
    "name": "Patchwork",
    "players": "2",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "abstract",
      "tile placement"
    ],
    "gameId": 29
  },
  {
    "name": "Pina Pirata",
    "players": "2-6",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "family",
      "hand management"
    ],
    "gameId": 30
  },
  {
    "name": "Scythe",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 115,
    "type": [
      "strategy",
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
    "type": [
      "strategy",
      "hand management"
    ],
    "gameId": 32
  },
  {
    "name": "Sagrada",
    "players": "1-4",
    "weight": "medium",
    "timeToPlay": 45,
    "type": [
      "family",
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
    "type": [
      "family",
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
    "type": [
      "party",
      "auction",
      "hand management"
    ],
    "gameId": 34
  },
  {
    "name": "Small World",
    "players": "2-5",
    "weight": "medium",
    "timeToPlay": 80,
    "type": [
      "strategy",
      "dice rolling",
      "area control"
    ],
    "gameId": 35
  },
  {
    "name": "Splendor",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 30,
    "type": [
      "family",
      "card drafting"
    ],
    "gameId": 36
  },
  {
    "name": "Sushi Go!",
    "players": "2-5",
    "weight": "light",
    "timeToPlay": 15,
    "type": [
      "family",
      "card drafting",
      "hand management"
    ],
    "gameId": 37
  },
  {
    "name": "Takenoko",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 45,
    "type": [
      "family",
      "modular board",
      "dice rolling"
    ],
    "gameId": 38
  },
  {
    "name": "Tokaido",
    "players": "2-5",
    "weight": "light",
    "timeToPlay": 45,
    "type": [
      "family",
      "set collection"
    ],
    "gameId": 39
  },
  {
    "name": "Terraforming Mars",
    "players": "1-5",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": [
      "strategy",
      "card drafting",
      "tile placement"
    ],
    "gameId": 40
  },
  {
    "name": "Viticulture",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 90,
    "type": [
      "strategy",
      "hand management",
      "worker placement"
    ],
    "gameId": 41
  },
  {
    "name": "Twighlight Struggle",
    "players": "2",
    "weight": "heavy",
    "timeToPlay": 180,
    "type": [
      "strategy",
      "area control",
      "dice rolling",
      "hand management"
    ],
    "gameId": 42
  },
  {
    "name": "Colt Express",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 40,
    "type": [
      "family",
      "modular board",
      "memory"
    ],
    "gameId": 43
  },
  {
    "name": "Gloomhaven",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": [
      "strategy",
      "cooperative",
      "modular board",
      "campaign"
    ],
    "gameId": 44
  },
  {
    "name": "Spirit Island",
    "players": "1-4",
    "weight": "heavy",
    "timeToPlay": 120,
    "type": [
      "strategy",
      "cooperative",
      "hand management",
      "area control"
    ],
    "gameId": 45
  },
  {
    "name": "Twilight Imperium",
    "players": "3-6",
    "weight": "heavy",
    "timeToPlay": 300,
    "type": [
      "strategy",
      "area control",
      "dice rolling"
    ],
    "gameId": 46
  },
  {
    "name": "Star Wars: Rebellion",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 240,
    "type": [
      "strategy",
      "dice rolling",
      "area movement",
      "thematic"
    ],
    "gameId": 47
  },
  {
    "name": "Power Grid",
    "players": "2-6",
    "weight": "medium",
    "timeToPlay": 120,
    "type": [
      "strategy",
      "auction",
      "route building"
    ],
    "gameId": 48
  },
  {
    "name": "Photosynthesis",
    "players": "2-4",
    "weight": "medium",
    "timeToPlay": 60,
    "type": [
      "strategy",
      "action point allowance"
    ],
    "gameId": 49
  },
  {
    "name": "Root",
    "players": "2-4",
    "weight": "heavy",
    "timeToPlay": 90,
    "type": [
      "strategy",
      "area control",
      "hand management"
    ],
    "gameId": 50
  },
  {
    "name": "Black Fleet",
    "players": "3-4",
    "weight": "light",
    "timeToPlay": 60,
    "type": [
      "family",
      "area movement",
      "pick-up and deliver"
    ],
    "gameId": 51
  },
  {
    "name": "Cards Against Humanity",
    "players": "4-30",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "party",
      "hand management"
    ],
    "gameId": 52
  },
  {
    "name": "Sorry!",
    "players": "2-4",
    "weight": "light",
    "timeToPlay": 30,
    "type": [
      "children's",
      "roll / spin and move"
    ],
    "gameId": 53
  },
  {
    "name": "Connect Four",
    "players": "2",
    "weight": "light",
    "timeToPlay": 10,
    "type": [
      "children's",
      "pattern building"
    ],
    "gameId": 54
  },

]

module.exports = {
  localGameParlours,
  boardGames
}