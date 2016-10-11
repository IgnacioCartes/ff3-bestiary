angular.module('ff3-bestiary.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, dataService) {
    
    dataService.load('/js/data/bestiary.json').then(function(response) {
        $scope.bestiary = response.data;
    });
    
    // Additional data
    $scope.elements = {
        names: ["Drain", "Dark", "Bolt", "Ice", "Fire", "Air", "Earth", "Holy"],
    };
    
    $scope.itemnames = ["Nothing","Kaiser","Cat Claws","Dragon Claws","Fairy Claws","Hell Claws","Nunchuck","Tonfa","Three Part","Mithril Rod","Fire Rod","Ice Rod","Bolt Rod","Ultimate Rod","Staff","Burning Staff","Freeze Staff","Bolt Staff","Golem Staff","Rune Staff","Eldest Staff","Hammer (Dummy)","Thor Hammer","Battle Axe","Great Axe","M.Star","Thunder Spear","Wind Spear","Blood Lance","Holy Lance","Knife","Dagger","Mithril Knife","Main Gauche","Orichalcum","Air Knife","Long Sword","Wight Slayer","Golden Sword","Mithril Sword","Serpent Sword","Freezing Sword","Tyrfing","Salamander","King Sword","Tomahawk","Ancient Sword","Ashura","Blood Sword","Defender","Triton Hammer","Kotetsu","Kiku Ichimonji","Break Blade","Excalibur","Masamune","Ragnarok","Onion Sword","Fire Book","Ice Book","Inferno Book","Light Book","Illumina Book","Boomerang","Full Moon","Shuriken","Blizzard Book","Diamond Bell","Earth Bell","Rune Bell","Madura Harp","Dream Harp","Lamia Harp","Loki Harp","Bow","Great Bow","Killer Bow","Rune Bow","Yoichi Bow","Wooden Arrow","Holy Arrow","Iron Arrow","Light Arrow","Fire Arrow","Ice Arrow","Medusa Arrow","Yoichi Arrow","---","Leather Shield","Onion Shield","Mithril Shield","Ice Shield","Hero Shield","Demon Shield","Diamond Shield","Aegis Shield","Genji Shield","Crystal Shield","Leather Cap","Onion Helm","Mithril Helm","Carapace Helm","Ice Helm","Headband","Scholar Hat","Black Cowl","Chakra Band","Viking Helm","Dragon Helm","Feather Hat","Diamond Helm","Genji Helm","Crystal Helm","Ribbon","Cloth","Leather Armor","Onion Armor","Mitril Armor","Carapace Armor","Ice Armor","Flame Mail","Kenpo Gi","Black Garb","Mage Robe","Viking Mail","Black Belt","Knight Armor","Dragon Mail","Bard Vest","Scholar Vest","Gaia Vest","Demon Mail","Diamond Mail","Reflect Mail","White Robe","Black Robe","Genji Armor","Crystal Armor","Rusty Armor","Bronze Ring","Onion Gloves","Mithril Gloves","Mithril Ring","Thief Gloves","Gauntlets","Power Ring","Rune Ring","Diamond Ring","Diamond Gloves","Protect Ring","Genji Gloves","Crystal Gloves","Magic Key","Carrot","Horn","Eye",null,"Eureka Key","Wind Fang","Fire Fang","Water Fang","Earth Fang","Lute","Sylx Key","MidgBread","----","Potion","HiPotion","Elixir","FenixDown","Soft","MaidKiss","EchoHerb","LuckMallet","Eyedrop","Antidote","Otterhead","BombShard","SouthWind","Zeus Rage","Bombr Arm","NorthWind","Gods Rage","Earthdrum","LamiaScl.","God's Wine","TurtlShell","Devil's Sigh","BlackHole","DarkScent","LilithKiss","Imp's Yawn","SplitShell","Paralyzer","Mutecharm","Pillow","BombHead","Barrier","ChocoRage","WhiteScent","Flare","Death","Meteo","WWind","Life2","Holy","Bahamut","Quake","Brak2","Drain","Cure4","Heal","Wall","Leviathan","Fire3","Bio","Warp","Aero2","Soft","Haste","Odin","Bolt3","Kill","Erase","Cure3","Life1","Safe","Titan","Break","Ice3","Shade","Libra","Confu","Mute","Ifrit","Fire2","Ice2","Bolt2","Cure2","Exit","Wash","Ramuh","Bolt","Venom","Blind","Aero","Toad","Mini","Shiva","Fire","Ice","Sleep","Cure1","Pure","Sight","Chocobo"];
    
    $scope.byteToArray = function(b) {
        var arr = [];
        for (var i=0; i<8; i++) {
            if (b & 1) arr.push(i);
            b = b >> 1;
        };
        return arr;
    };
    
})

.controller('MainCtrl', function($scope) {
    
})

.controller('BeastCtrl', function($scope, $stateParams) {
    $scope.beast = $scope.bestiary.find(function(d) {return d.id == $stateParams.beastId;});

    $scope.beast.elem_array = $scope.byteToArray($scope.beast.atk_elem);
    $scope.beast.elem_resist_array = $scope.byteToArray($scope.beast.elem_resist);
    $scope.beast.elem_weak_array = $scope.byteToArray($scope.beast.elem_weak);
});