const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Card details - extracted from cardsinfo.js
const cardDetails = {
    "Ancient Flagstone": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b2/Ancient_flagstone.png/revision/latest?cb=20250304085711",
        description: "Adds a Flagstone to the board. You can always move to this square no matter how far you are from it",
        maxAmount: 2,
        requirements: ""
    },
    "A Piercing Truth": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c1/A_Piercing_Truth.png/revision/latest?cb=20220523105508",
        description: "Your bullets have a 30% chance to pierce through targets",
        maxAmount: 2,
        requirements: ""
    },
    "August Presence": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b6/August_Presence.png/revision/latest?cb=20220523105509",
        description: "Non-king pieces can't come near your King",
        maxAmount: 1,
        requirements: ""
    },
    "Black Mist": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/12/Black_Mist.png/revision/latest?cb=20220523120329",
        description: "Protect you from death once per floor -1 fire range",
        maxAmount: 2,
        requirements: ""
    },
    "Blunderbuss": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b3/Blunderbuss.png/revision/latest?cb=20220523105511",
        description: "+2 firepower Fire arc +30°",
        maxAmount: 2,
        requirements: ""
    },
    "Cornered Despot": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/68/Cornered_Despot.png/revision/latest?cb=20220523105512",
        description: "+2 firepower Flip card if your King is not on the board's edge",
        maxAmount: 1,
        requirements: ""
    },
    "Courteous Jousting": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/14/Courteous_Jousting.png/revision/latest?cb=20220523105513",
        description: "Play an extra turn when you kill a Knight Fire arc -10°",
        maxAmount: 1,
        requirements: ""
    },
    "Crow's Blessing": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/ca/Crow%27s_Blessing.png/revision/latest?cb=20220523105514",
        description: "+2 fire range",
        maxAmount: 1,
        requirements: ""
    },
    "Elite Gem": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d5/Elite_Gem.png/revision/latest?cb=20220523105515",
        description: "+1 ammo regeneration +1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Engraved Scope": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/0/0e/Engraved_Scope.png/revision/latest?cb=20220523105517",
        description: "Right Click: +1 Fire Range, -45 fire arc Bonus resets when you move Activating this bonus costs a turn +1 search",
        maxAmount: 1,
        requirements: ""
    },
    "Egotic Maelstrom": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/0/0b/Egotic_Maelstorm.png/revision/latest?cb=20240220133806",
        description: "Every 10 turns: +1 Firepower",
        maxAmount: 1,
        requirements: ""
    },
    "Ermine Belt": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/fe/Ermine_Belt.png/revision/latest?cb=20220523105518",
        description: "+3 ammo max",
        maxAmount: 3,
        requirements: ""
    },
    "Extra Barrel": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/cd/Extra_Barrel.png/revision/latest?cb=20220523105519",
        description: "Charge +1 additional shell in your Royal Shotgun Fire arc +7°",
        maxAmount: 3,
        requirements: ""
    },
    "Gradual Absolution": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/38/Gradual_Absolution.png/revision/latest?cb=20220523105520",
        description: "+1 firepower for each empty Soul slot",
        maxAmount: 2,
        requirements: ""
    },
    "High Focus": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1c/High_Focus.png/revision/latest?cb=20220523105521",
        description: "+1 firepower Fire arc -18° Flip card is a piece is adjacent to you",
        maxAmount: 2,
        requirements: ""
    },
    "Holy Gunpowder": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/f0/Holy_Gunpowder.png/revision/latest?cb=20220523105523",
        description: "+1 firepower",
        maxAmount: 2,
        requirements: ""
    },
    "King's Shoulders": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/60/King%27s_Shoulders.png/revision/latest?cb=20220523105524",
        description: "Once per floor lift a non-king piece on your path without ending your turn",
        maxAmount: 1,
        requirements: "Not having blade"
    },
    "Kingdom Wealth": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/79/Kingdom_Wealth.png/revision/latest?cb=20220523105525",
        description: "+6 ammo max King: +2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Kingly Alms": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/4/40/Kingly_Alms.png/revision/latest?cb=20220523105507",
        description: "+1 Grenade +3 grenade damage +2 additional damage at the grenades' explosion center",
        maxAmount: 1,
        requirements: ""
    },
    "Majestic Censer": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/79/Majestic_Censer.png/revision/latest?cb=20220523120333",
        description: "+1 ammo max Adds 1 extra Soul slot",
        maxAmount: 3,
        requirements: ""
    },
    "Mystic Shackles": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ee/Mystic_shackles.png/revision/latest?cb=20250306092815",
        description: "-1 Ammo Max When Orb hovers on the piece, it will lock the pieces movement and must move where the orb predicts it will move Affected piece loses 1 speed",
        maxAmount: 1,
        requirements: "Seer's Orb"
    },
    "Rightful Curtsy": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ef/Rightful_Curtsy.png/revision/latest?cb=20220523120335",
        description: "+1 Ammo Max +50% chance to knock back enemies Pieces knocked back on the edge of the board are knocked out of the board and die instantly",
        maxAmount: 2,
        requirements: ""
    },
    "Ritual Dagger": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/22/Ritual_Dagger.png/revision/latest?cb=20220523120338",
        description: "-1 fire range King: -2 HP +1 blade",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Royal Loafers": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/7a/Royal_Loafers.png/revision/latest?cb=20220523120340",
        description: "Strafe mode: Right click a target and fire on your next move",
        maxAmount: 1,
        requirements: ""
    },
    "Sacred Crown": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/9/97/Sacred_Crown.png/revision/latest?cb=20220523120342",
        description: "You can play an extra turn after using a Soul card",
        maxAmount: 1,
        requirements: ""
    },
    "Small Fry Harvest": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/cc/Small_Fry_Harvest.png/revision/latest?cb=20220523120345",
        description: "+1 Ammo Max Killing a Pawn restores 1 ammo +1 Blade damage",
        maxAmount: 2,
        requirements: ""
    },
    "Subtle Poison": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/a4/Subtle_Poison.png/revision/latest?cb=20220523120348",
        description: "Queen: -1 hp King: -1 hp Queen's move limit: 1 square for 15 turn",
        maxAmount: 1,
        requirements: ""
    },
    "Elusive": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/62/Elusive.jpg/revision/latest?cb=20241017141221",
        description: "+1 Jump Pieces that are about to move will not be able to attack you",
        maxAmount: 1,
        requirements: ""
    },
    "Taunting Hop": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ed/Taunting_Hop.png/revision/latest?cb=20220523120350",
        description: "+1 Jump +1 Jump Damage",
        maxAmount: 2,
        requirements: ""
    },
    "The Moat": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e4/The_Moat.png/revision/latest?cb=20220523120353",
        description: "Non-knight pieces can't cross the Moat in one move",
        maxAmount: 1,
        requirements: ""
    },
    "Unfaithful Steed": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/56/Unfaithful_Steed.png/revision/latest?cb=20220523120355",
        description: "Move 1 square further Flip if there is no Knight on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Unjust Decree": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/ad/Unjust_Decree.png/revision/latest?cb=20220523120323",
        description: "-1 firepower King is allowed to right click to fire all loaded shells",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Downpour": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/de/Wand_of_Downpour.png/revision/latest?cb=20220523131257",
        description: "Deal 10 damage on random enemies",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Frenzy": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/14/Wand_of_Frenzy.png/revision/latest?cb=20220523120326",
        description: "Refill your ammo and reload your gun",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Gust": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/0/0c/Wand_of_Gust.png/revision/latest?cb=20220523131255",
        description: "Repel all white pieces northward",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Wings": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/75/Wand_of_Wings.png/revision/latest?cb=20220523131256",
        description: "Move up to 3 squares in any directions",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Wrath": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/85/Wand_of_Wrath.png/revision/latest?cb=20220523120324",
        description: "Deal firepower damage to a non-king target",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Souls": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/de/Wand_of_Souls_Image.png/revision/latest?cb=20241020000942",
        description: "Steal a soul from any non-Pawn and non-King piece even if they are alive.",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Execution": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/2e/Wand_of_Execution_Image.png/revision/latest?cb=20241020001736",
        description: "Instantly kill any pawn Reload this wand when you kill a non-Pawn piece",
        maxAmount: 1,
        requirements: ""
    },
    "Sawed-Off Justice": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/a5/Sawed-off_Justice.png/revision/latest?cb=20240413165800",
        description: "+2 Firepower -1 Fire range Shooting moves you backwards",
        maxAmount: 1,
        requirements: ""
    },
    "Welcome Gift": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/5f/Welcome-Gift.png/revision/latest?cb=20240413170132",
        description: "+4 Firepower Flip card if your shotgun has been reloaded",
        maxAmount: 1,
        requirements: ""
    },
    "Cannon Fodder": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e7/Cannon-Fodder.png/revision/latest?cb=20240413170417",
        description: "Use Pawn's souls to gain +2 Firepower on your next shot",
        maxAmount: 1,
        requirements: ""
    },
    "Philanthropy": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/ce/Philanthropy.png/revision/latest?cb=20240413170652",
        description: "+2 Grenades -1 Grenade damage",
        maxAmount: 1,
        requirements: ""
    },
    "Sacred Light": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/0/06/Sacred_Light.png/revision/latest?cb=20241020002345",
        description: "+1 Grenade -2 Grenade damage You are immune to grenade damage Exploded pieces are stunned for two turns Stunned pieces are unable to move nor attack until stun is over",
        maxAmount: 1,
        requirements: ""
    },
    "Ravenous Rats": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/8e/Ravenous-Rats.png/revision/latest?cb=20240413171349",
        description: "When you kill a piece, a rat bites the nearest piece for 1 dmg",
        maxAmount: 1,
        requirements: ""
    },
    "Unholy Call": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/63/Unholy-Call.png/revision/latest?cb=20240413171814",
        description: "Add 3 pentagrams on the board. Trigger one to get an extra turn. Trigger all to get +2 Firepower",
        maxAmount: 1,
        requirements: ""
    },
    "Undercover Mission": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/9/9d/Undercover-Mission.png/revision/latest?cb=20240413172023",
        description: "Add a question mark on the board When your king makes it to the square, you may choose a disruption Most effects last for the round",
        maxAmount: 1,
        requirements: ""
    },
    "Caltrops": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/59/Caltrops2.png/revision/latest?cb=20250309065520",
        description: "-1 Speed to bleeding pieces +10% for a piece to be inflicted with bleeding when that piece moves",
        maxAmount: 2,
        requirements: ""
    },
    "Nightbane": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/7d/Nightbane.png/revision/latest?cb=20240413172838",
        description: "Blade +3",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Bushido": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/7c/Bushido.png/revision/latest?cb=20221203050534",
        description: "Once per turn, execute a piece with your blade without ending your turn Blade: +2 -1 Firepower",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Bloodless Coup": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1f/Bloodless_Coup.png/revision/latest?cb=20221130204118",
        description: "Pawn can't attack you Flip this card if a pawn is killed",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Hypnosis": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/8e/WandofHypnosis.png/revision/latest?cb=20240413173547",
        description: "Play a white piece of your choice",
        maxAmount: 1,
        requirements: ""
    },
    "Presbyopia": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/8b/Presbyopia.png/revision/latest?cb=20240413173732",
        description: "Queen can't attack you at less than 2 range Bishop can't attack you at less than 2 range",
        maxAmount: 1,
        requirements: "Golden Aging"
    },
    "Golden Aging": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/23/GoldenAging.png/revision/latest?cb=20240413174037",
        description: "Queen: -1 hp King: -1 hp Every 10 turns: King: -1 speed, Queen: -1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "Fool Companion": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/3c/FoolCompanion.png/revision/latest?cb=20240413174300",
        description: "Jesters can move in all directions and always follow king. Earn an extra turn when you kill a jester",
        maxAmount: 1,
        requirements: "The Jester"
    },
    "Force Feeding": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/73/Forcefeeding.png/revision/latest?cb=20240413174516",
        description: "+1 Ammo Max Allows you to squeeze in more ammo than your shotgun can hold +1 Firepower if your shotgun is fully loaded to default max loaded ammo",
        maxAmount: 1,
        requirements: ""
    },
    "Possessed": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/18/Possessed.png/revision/latest?cb=20240622151515",
        description: "Add 1 Bishop Add 2 extra Soul Slots",
        maxAmount: 1,
        requirements: "Conclave, Unholy Call"
    },
    "Imperial Shot Put": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/fa/Cannonball.png/revision/latest?cb=20221129050803",
        description: "-1 Ammo Max Add a cannonball onto the board You can infinitely carry the cannonball and throw it",
        maxAmount: 1,
        requirements: "King's Shoulders"
    },
    "Church Organ": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/da/Church_Organ.jpg/revision/latest?cb=20241024183016",
        description: "+2 Ammo in your barrel +2 Ammo max",
        maxAmount: 1,
        requirements: "Cathedral"
    },
    "Black Plague": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c2/Plague.PNG/revision/latest?cb=20221129055534",
        description: "-1 Fire Range Every turn, 1 random piece takes 1 damage",
        maxAmount: 1,
        requirements: "Crow's Blessing, Ravenous Rats"
    },
    "Deep Waters": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e7/Deep_Waters.jpg/revision/latest?cb=20241024183315",
        description: "Pieces within the moat cannot attack you",
        maxAmount: 1,
        requirements: "The Moat"
    },
    "Indelible Memories": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c5/Indelible_memories.png/revision/latest?cb=20250309062735",
        description: "+1 Grenade Grenades inflict bleeding onto exploded pieces",
        maxAmount: 1,
        requirements: ""
    },
    "Monarch's Confidence": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/77/Monarch%E2%80%99s_Confidence.jpg/revision/latest?cb=20241016184426",
        description: "+1 Firepower for every missing shell in the barrel of your shotgun",
        maxAmount: 1,
        requirements: ""
    },
    "Tearing Bullets": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/27/Tearing_Bullets.jpg/revision/latest?cb=20241017170814",
        description: "Bullets inflict bleeding onto shot pieces",
        maxAmount: 1,
        requirements: ""
    },
    "The Mole": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/7f/The_mole.png/revision/latest?cb=20250309055330",
        description: "+1 Ammo Max +1 spy among the pawns Talk to the spy by moving next to him to conduct a secret meeting The meeting gives the same effects to as if you landed on the Undercover Mission square",
        maxAmount: 2,
        requirements: "6+ Pawns"
    },
    "Fearsome": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d1/Fearsome.png/revision/latest?cb=20250126083051",
        description: "+1 Ammo Max +1 Fright Radius Whenever you kill a non-Pawn piece, piece with in your fright radius become scared Scared pieces are unable to attack you until they move away from you on their next move",
        maxAmount: 2,
        requirements: ""
    },
    "Human Shield": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/a5/Human_shield.png/revision/latest?cb=20250309055914",
        description: "Fearsome is also applied on Pawn death +2 Ammo Max",
        maxAmount: 1,
        requirements: "Fearsome"
    },
    "Reign of Terror": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/6a/Reign_of_terror.png/revision/latest?cb=20250309062258",
        description: "-2 Ammo Max Fearsome is applied around killed non-Pawn pieces' squares",
        maxAmount: 1,
        requirements: "Fearsome"
    },
    
    // White Cards
    "Ammunition Depot": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/ff/Ammunition_Depot.png/revision/latest?cb=20220524142037",
        description: "Add 1 Rook Gains 2 ammo each time you kill a Rook",
        maxAmount: 2,
        requirements: ""
    },
    "Ascension": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/cb/Ascension.png/revision/latest?cb=20220524142038",
        description: "Bishops can move across any obstacles",
        maxAmount: 1,
        requirements: ""
    },
    "Assault": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e0/Assault.png/revision/latest?cb=20220524142039",
        description: "Add 1 Pawn Pawns can walk 2 squares on their first move",
        maxAmount: 1,
        requirements: ""
    },
    "Backups": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1f/Backups.png/revision/latest?cb=20220524142040",
        description: "Add 3 Pawns",
        maxAmount: 3,
        requirements: ""
    },
    "Bodyguard": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/87/Bodyguard.png/revision/latest?cb=20220524142043",
        description: "King can't be killed if a Knight is alive Knights: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Cardinal": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d2/Cardinal.png/revision/latest?cb=20220524142045",
        description: "Remove 1 Pawn Add 1 Bishop -1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Castle": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1f/Castle.png/revision/latest?cb=20220524142047",
        description: "King swaps position with a Rook whenever he (the King) would take damage Rooks: +1",
        maxAmount: 1,
        requirements: ""
    },
    "Cavalry": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/15/Cavalry.png/revision/latest?cb=20220524142050",
        description: "Add 2 knights at the start of turn 15",
        maxAmount: 1,
        requirements: ""
    },
    "Conclave": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/2c/Conclave.png/revision/latest?cb=20220524142054",
        description: "Add 2 bishops at the start of turn 15",
        maxAmount: 1,
        requirements: ""
    },
    "Conscription": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b1/Conscription.png/revision/latest?cb=20220524142055",
        description: "Add 1 Pawn every 5 turns",
        maxAmount: 2,
        requirements: ""
    },
    "Court of the King": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/68/Court_of_the_King.png/revision/latest?cb=20220524142057",
        description: "Add 2 Knights Add 1 Bishop Add 1 Rook All pieces: -1 speed",
        maxAmount: 2,
        requirements: ""
    },
    "Crusades": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/2a/Crusades.png/revision/latest?cb=20220524142100",
        description: "Remove 1 Bishop Add 2 Knights",
        maxAmount: 1,
        requirements: ""
    },
    "Entitle": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/4/40/Entitle.png/revision/latest?cb=20220524142101",
        description: "Remove 1 Pawn Add 1 Knight -1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Drag Queen": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/77/Crossdresser.png/revision/latest?cb=20220524142104",
        description: "Remove 1 Bishop Add 1 Queen at the start of turn 10",
        maxAmount: 1,
        requirements: ""
    },
    "Homecoming": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/5b/Homecoming.png/revision/latest?cb=20220524142106",
        description: "Add 1 Queen Attempting to reshuffle this card will allow to get the Tragic Homecoming Card. This card can only be avoided by using the card Bold Plan on this card",
        maxAmount: 1,
        requirements: ""
    },
    "Tragic Homecoming": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1e/Angryex.png/revision/latest?cb=20250126055350",
        description: "Add 1 queen Can be obtained by reshuffling Homecoming with the search mechanic Queen: +2 hearts Gives new messages for this card Examples: Better if you hadn't, She's clearly mad, You shouldn't have",
        maxAmount: 1,
        requirements: "Attempting to reshuffle Homecoming"
    },
    "Iron Maiden": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c0/Iron_Maiden.png/revision/latest?cb=20220524142109",
        description: "Remove 1 queen Queen: -2 Speed Queens can't die",
        maxAmount: 1,
        requirements: "Having at least two Queens on the board"
    },
    "King's Mistress": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/59/King%27s_Mistress.png/revision/latest?cb=20220524142111",
        description: "Add 1 Queen Queen's moves are limited to 3 squares",
        maxAmount: 1,
        requirements: ""
    },
    "Kite Shield": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b8/Kite_Shield.png/revision/latest?cb=20220524142113",
        description: "Add 1 Pawn Knights have a shield that absorb every damage on a single turn",
        maxAmount: 1,
        requirements: ""
    },
    "Lookout Tower": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/cc/Lookout_Tower.png/revision/latest?cb=20220524142116",
        description: "Add 1 Rook at the start of turn 20 White backups come 1 turn sooner for every piece you kill",
        maxAmount: 2,
        requirements: ""
    },
    "Militia": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e7/Militia.png/revision/latest?cb=20220524142119",
        description: "Add 1 Pawn Pawns can move/attack in four directions",
        maxAmount: 1,
        requirements: ""
    },
    "Peace": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/37/Peace.png/revision/latest?cb=20220524142121",
        description: "Remove 1 Knight Add 2 Bishops",
        maxAmount: 1,
        requirements: ""
    },
    "Pikemen": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/31/Pikemen.png/revision/latest?cb=20220524142122",
        description: "Pawns can attack on the first two squares in front of them Pawns can no longer attack diagonally Pawns: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Pillage": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/1e/Pillage.png/revision/latest?cb=20220524142124",
        description: "Remove 1 Rook Add 5 Pawns Pawn: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Remparts": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/15/Remparts.png/revision/latest?cb=20220524142126",
        description: "Removes 2 Pawns Add 1 Rook",
        maxAmount: 2,
        requirements: ""
    },
    "Revolution": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/2e/Revolution.png/revision/latest?cb=20220524142127",
        description: "Remove 1 Bishop Add 6 Pawns",
        maxAmount: 1,
        requirements: ""
    },
    "Ruins": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/6c/Ruins.png/revision/latest?cb=20220524142129",
        description: "Add 2 Pawns Add 1 Rook Rook: -2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Saboteur": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b3/Saboteur.png/revision/latest?cb=20220524142131",
        description: "Remove 2 Pawns Add 1 Bishop Doubles fire arc for 1 bullet",
        maxAmount: 2,
        requirements: ""
    },
    "Scouting": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/67/Scouting.png/revision/latest?cb=20220524142133",
        description: "Remove 1 Knight Add 2 Pawns Pawn: +1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "Sokoban": {
        image: "Image_missing.png",
        description: "Add 2 Pawns Rooks Can Push Pieces Up to 3 Times",
        maxAmount: 2,
        requirements: "2+ Rooks"
    },
    "The Red Book": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/87/The_Red_Book.png/revision/latest?cb=20220524142134",
        description: "Add 1 Bishop Bishops can move (not attack) orthogonally",
        maxAmount: 1,
        requirements: ""
    },
    "The Secret Heir": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d9/The_Secret_Heir.png/revision/latest?cb=20220524142136",
        description: "Add 1 Pawn One Pawn is the secret heir. The heir replaces the King if he dies.",
        maxAmount: 1,
        requirements: ""
    },
    "Theocracy": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/25/Theocracy.png/revision/latest?cb=20220524142137",
        description: "Remove 1 King Add 1 Bishop Bishop: +2 HP Win if all Bishops are dead",
        maxAmount: 1,
        requirements: "Having at least two bishops on the board"
    },
    "Throne Room": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ef/Throne_Room.png/revision/latest?cb=20220524142139",
        description: "Queen: +1 HP King: +2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Zealots": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b0/Zealots.png/revision/latest?cb=20220524142143",
        description: "Pawn: +1 speed Bishop: +1 speed Flip if there are no bishops on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Karma": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/3b/Karma1.jpg/revision/latest?cb=20241021181419",
        description: "-1 firepower on White Squares +30° Fire arc on Black Squares",
        maxAmount: 1,
        requirements: ""
    },
    "Undead Armies": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/5b/Undead_Armies.png/revision/latest?cb=20221115073534",
        description: "Pawn: -1 HP Replace Rooks, Knights, and Bishops with a Pawn after they die",
        maxAmount: 1,
        requirements: ""
    },
    "Shortage": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/1/10/Shortage.png/revision/latest?cb=20240413180001",
        description: "Remove 1 Pawn -3 ammo max -1 Grenade",
        maxAmount: 1,
        requirements: ""
    },
    "Succubus": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ec/Succubus.png/revision/latest?cb=20240413180100",
        description: "Add 1 Queen Add 1 Extra Soul Slot",
        maxAmount: 2,
        requirements: ""
    },
    "Cathedral": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/67/Cathedral_Card.jpg/revision/latest?cb=20241015173011",
        description: "Remove 1 Bishop Add 1 Rook Non-Rook pieces next to a Rook cannot take more than 2 damage",
        maxAmount: 1,
        requirements: "Cardinal"
    },
    "Sanctity": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/71/Sanctity.png/revision/latest?cb=20240413180219",
        description: "Add 1 Bishop Bishop Souls cannot be reaped",
        maxAmount: 1,
        requirements: "Conclave"
    },
    "Knightmare": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/3d/Knigtmare.png/revision/latest?cb=20230108070030",
        description: "Knights: -1 HP Knights can only be hit when moving Add 1 Knight",
        maxAmount: 1,
        requirements: "Black Mist"
    },
    "Highest Dungeon": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b0/HighestDungeon.png/revision/latest?cb=20240413180403",
        description: "All pieces: +1 HP Flip card if there is no Rook on the board",
        maxAmount: 1,
        requirements: "Remparts"
    },
    "Bunker": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/74/Bunker.jpg/revision/latest?cb=20241015173513",
        description: "Remove 1 Bishop Add 1 Rook Non-Rook pieces near a Rook can't take more than one damage per turn",
        maxAmount: 1,
        requirements: "Kingly Alms, Indelible Memories, Sacred Light, or Philanthropy"
    },
    "The Bridge": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/6d/TheBridge.png/revision/latest?cb=20240413180542",
        description: "Add a knight after 10 turns Open a path in the moat",
        maxAmount: 1,
        requirements: "The Moat"
    },
    "Divine Healing": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b2/DivineHealing.png/revision/latest?cb=20240413180633",
        description: "Bishops: +1 HP Bishops can heal nearby allies instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Last Guardian": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/50/LastGuardian.png/revision/latest?cb=20240413180735",
        description: "After killing a Pawn, promote another Pawn if it's the last one",
        maxAmount: 1,
        requirements: ""
    },
    "Trowel": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b7/Trowel.png/revision/latest?cb=20240413180816",
        description: "Rooks: +4 HP Flip card if there's no Pawn on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Full Plate Armor": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/8b/FullPlateArmor.png/revision/latest?cb=20240413180918",
        description: "All pieces: +1 HP All pieces: -1 Speed Blade: -1",
        maxAmount: 1,
        requirements: ""
    },
    "Military Academy": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b5/MilitaryAcademy.png/revision/latest?cb=20240413181017",
        description: "Add 1 knight every ten turns",
        maxAmount: 1,
        requirements: ""
    },
    "Witch's Curse": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/57/WitchCurse.png/revision/latest?cb=20240413181104",
        description: "Fire arc +10° -1 Fire Range -1 Firepower Flip this card if a Queen is killed",
        maxAmount: 1,
        requirements: "Homecoming"
    },
    "Saddle": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/ca/Saddle.png/revision/latest?cb=20240413181405",
        description: "Knights carry non-knight and non-rook pieces when they move Knights: -1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "The Jester": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c1/The_Jester.png/revision/latest?cb=20221203045458",
        description: "Add 1 pawn Jesters can move diagonally and have +2 speed. Jesters pass the hat when they die.",
        maxAmount: 1,
        requirements: "Throne Room"
    },
    "Guillotine": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/6/61/Guillotine.png/revision/latest?cb=20240413181654",
        description: "Remove 1 King",
        maxAmount: 1,
        requirements: "Revolution"
    },
    "Analysis Paralysis": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/a1/Analysis_Paralysis_1.jpg/revision/latest?cb=20241015182130",
        description: "White gains six free turns to move pieces, this bonus can be cancelled early if you are put in check +1 search",
        maxAmount: 2,
        requirements: "High Focus"
    },
    "Mausoleum": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/f5/Mausoleum.jpg/revision/latest?cb=20241015194754",
        description: "Adds 1 rook When a rook dies, kings take 2 damage",
        maxAmount: 2,
        requirements: ""
    },
    "Final Countdown": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/50/Final_Countdown.jpg/revision/latest?cb=20241015195031",
        description: "You have 12 turns to kill the last 6 pieces on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Mangonel": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/80/Mangonel_.jpg/revision/latest?cb=20241015195532",
        description: "Add 1 rook Rooks: -1 speed Rooks can choose to throw boulders at you instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Prison": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d0/Prison.png/revision/latest?cb=20250128063942",
        description: "Add 1 Knight Add 1 bishop Bishop and Knights get locked up when right next to a rook When they are locked up, they cannot move nor capture you",
        maxAmount: 1,
        requirements: "Having at least 1 rook, bishop, and knight on the board"
    },
    "The Royal Hunt": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/3d/The_Royal_Hunt.jpg/revision/latest?cb=20241015200348",
        description: "King can shoot arrows at you +1 arrow speed",
        maxAmount: 2,
        requirements: ""
    },
    "Buckler of Limos": {
        image: "",
        description: "Kings: -1 speed Kings cant take more than 3 damage per turn",
        maxAmount: 1,
        requirements: ""
    },
    "King's Look-Alike": {
        image: "",
        description: "Add 1 king Kings: +1 heart The king added is a false king when the false king is damaged, replace him with a knight",
        maxAmount: 3,
        requirements: ""
    },
    "Emergency Call": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b1/Emergency_Call.jpg/revision/latest?cb=20241017171515",
        description: "Add 1 pawn When a king takes damage for the first time, it will cry out for help and promotes the nearest pawn if any",
        maxAmount: 1,
        requirements: ""
    },
    "Lady in the Tower": {
        image: "",
        description: "Add 1 rook When a rook is supposed to capture you, it will instead promote into a queen and will move to the nearest valid square closest to you",
        maxAmount: 1,
        requirements: ""
    },
    "Vampirism": {
        image: "",
        description: "King and Queen: +1 Health Kings and Queens are immune to Bleeding Kings and Queens may absorb a bleeding piece's blood that are next to them. When they do this, they restore 1 heart",
        maxAmount: 1,
        requirements: "Tearing Bullets or Caltrops"
    },
    "Inquisition": {
        image: "",
        description: "Remove 1 Pawn Add 1 Bishop Bishops attempt to cancel Undercover Mission squares and execute spies on the board Bishops may attack you even while stealthy or disguised as a Pawn",
        maxAmount: 1,
        requirements: "Undercover Mission, The Mole, Low-Cost Disguise or Cloaking Device"
    },
    "Tag Team": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/2/2a/Tag_Team.jpg/revision/latest?cb=20241017171259",
        description: "Bishops and Rooks: +1 Health Bishops and Rooks may swap places with each other at will",
        maxAmount: 1,
        requirements: "Needs a rook and bishop"
    },
    "Unsettled Throne": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b2/Unsettled_throne.png/revision/latest?cb=20250126090248",
        description: "Add 1 pawn Add 1 more heir to the board",
        maxAmount: 1,
        requirements: "The Secret Heir"
    },
    "Nomad Life": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/ec/Nomad_Life.jpg/revision/latest?cb=20241017171605",
        description: "Remove 1 Rook Add 2 knights Add 1 bishop Knights may promote to bishops, rooks, or queens if they make it to the last rank",
        maxAmount: 1,
        requirements: ""
    },
    "Governess": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/7/7f/Governess.jpg/revision/latest?cb=20241017173159",
        description: "Add 1 Bishop Pawns always promote into Queens",
        maxAmount: 1,
        requirements: ""
    },
    "Unicorn": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/c/c4/Unicorn.jpg/revision/latest?cb=20241017173245",
        description: "Add 1 Knight Knights have a chance to push you back 1 square by charging at you instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Plumed Knight": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/80/Plumed_Knight.jpg/revision/latest?cb=20241023195439",
        description: "At the start of a round, one random knight is selected to be a plumed knight Gains a red plume That Knight gains 3 hp It can attack but not move 1 square diagonally",
        maxAmount: 1,
        requirements: ""
    },
    "Reverend Mother": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/f5/Reverend_mother.png/revision/latest?cb=20250126063233",
        description: "Add 1 Queen When a queen is killed, all pieces become scared",
        maxAmount: 1,
        requirements: "Theocracy"
    },
    "Commoner's Reign": {
        image: "",
        description: "Add 1 Knight Knights: +2 health Win if all Knights are dead Having this card and then picking Bodyguard or having Bodyguard prior to getting this card will turn it into the Self Defense card",
        maxAmount: 1,
        requirements: "King's Look-Alike, Undercover Mission"
    },
    "Self Defense": {
        image: "",
        description: "Knights: +2 health",
        maxAmount: 1,
        requirements: "Undercover Mission or The Mole, King's Look-Alike, Bodyguard"
    },
    "Bouncy Castle": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/f9/Bouncy_castle.png/revision/latest?cb=20250128071527",
        description: "Rooks: -2 Health Pieces knocked off the board will bounce back to the center of the board at full health Grenades are bouncier",
        maxAmount: 1,
        requirements: "2x Rightful Curtsy or x1 Rightful Curtsy with Ramesses II (As long it has 100 knockback)"
    },
    "Patience": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/f/f5/Black_Patience_Card.png/revision/latest?cb=20241012221127",
        description: "+1 Ammo Max On the next round, you may pick any black card in the game that has met the spawn requirements You still have to pick one of two white cards",
        maxAmount: 2,
        requirements: ""
    },
    "Bold Plan": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/a/a0/Bold_Plan.jpg/revision/latest?cb=20241016184033",
        description: "+1 Ammo Max Replace any one white card with another of your choice, as long as that card meets the spawn requirements",
        maxAmount: 2,
        requirements: ""
    },
    "Low-Cost Disguise": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/4/4c/Low_Cost_Disguise.jpg/revision/latest?cb=20241017165051",
        description: "When you kill a pawn, you disguise as a white pawn for 2 turns While Disguised, white pieces cannot attack you Disguise disappears when disguise timer runs out or you use your shotgun, blades do not expose you when used",
        maxAmount: 2,
        requirements: ""
    },
    "Silencer": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/d/d6/Silencer.jpg/revision/latest?cb=20241017170858",
        description: "-1 Ammo Max Using your shotgun no longer exposes you while stealthy",
        maxAmount: 1,
        requirements: "Low-Cost Disguise or Cloaking Device"
    },
    "Holoking": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/b/b1/Holo-King.jpg/revision/latest?cb=20241017170101",
        description: "When you use a soul, a hologram of yourself is made on the spot you original was before using a soul White pieces will attempt to capture the hologram thinking it is you",
        maxAmount: 1,
        requirements: ""
    },
    "Cloaking Device": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/5/5c/Stealthy.jpg/revision/latest?cb=20241017170327",
        description: "Whenever you create a hologram, you are in stealth mode for six turns Pieces are unable to attack you nor see you and will go for the hologram You are exposed if the timer runs out or if there is no hologram on the board",
        maxAmount: 1,
        requirements: "Holoking"
    },
    "Ambush": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/3/30/Ambush.png/revision/latest?cb=20250309061925",
        description: "+2 Fire Range and +1 Grenade Damage Flip card when king is not being stealthy",
        maxAmount: 1,
        requirements: "Cloaking Device or Low-Cost Disguise"
    },
    "Selective Listening": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/8/85/Selective_Listening.jpg/revision/latest?cb=20241017141658",
        description: "White can only move 2 different pieces in one turn at a time",
        maxAmount: 1,
        requirements: ""
    },
    "Secret Move": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e3/Secret_move.png/revision/latest?cb=20250309060344",
        description: "+1 Jump Gain firepower for your next shot equal to the amount of jumps you will regain in the next turn",
        maxAmount: 1,
        requirements: "Taunting Hop or Elusive"
    },
    "Workshop": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/4/49/Workshop.png/revision/latest?cb=20250309060145",
        description: "Every 8 turns: restore 2 Ammo and restore 1 grenade",
        maxAmount: 1,
        requirements: "Kingly Alms, Indelible Memories, Sacred Light, or Philanthropy"
    },
    "Seer's Orb": {
        image: "https://static.wikia.nocookie.net/shotgun-king/images/e/e9/Seer%E2%80%99s_Orb.jpg/revision/latest?cb=20241017170246",
        description: "+1 Search Right Click: Click a piece to have the orb hover above it The orb predicts the piece's movement",
        maxAmount: 1,
        requirements: "Not having any other right clickable card such as any grenade card or Engraved Scope"
    }
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Function to download a file
function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https:') ? https : http;
        
        const file = fs.createWriteStream(path.join(imagesDir, filename));
        
        protocol.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded: ${filename}`);
                resolve();
            });
            
            file.on('error', (err) => {
                fs.unlink(path.join(imagesDir, filename), () => {}); // Delete the file if there was an error
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Function to extract filename from URL
function getFilenameFromUrl(url) {
    // Extract the filename from the URL
    const urlParts = url.split('/');
    
    // Find the filename part (before 'revision')
    let filename = '';
    for (let i = urlParts.length - 1; i >= 0; i--) {
        if (urlParts[i] === 'revision') {
            // The filename is the part before 'revision'
            filename = urlParts[i - 1];
            break;
        }
    }
    
    // If we didn't find 'revision', try to get the last part that looks like a filename
    if (!filename) {
        for (let i = urlParts.length - 1; i >= 0; i--) {
            const part = urlParts[i];
            if (part.includes('.png') || part.includes('.jpg') || part.includes('.jpeg') || part.includes('.PNG') || part.includes('.JPG')) {
                filename = part;
                break;
            }
        }
    }
    
    // Clean up the filename (replace spaces and special characters)
    return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
}

// Main function to download all images
async function downloadAllImages() {
    console.log('Starting download of all card images...\n');
    
    const downloadPromises = [];
    const failedDownloads = [];
    
    for (const [cardName, cardInfo] of Object.entries(cardDetails)) {
        if (cardInfo.image && cardInfo.image !== 'Image_missing.png' && cardInfo.image !== '') {
            const filename = getFilenameFromUrl(cardInfo.image);
            
            console.log(`Downloading ${cardName} -> ${filename}`);
            
            const downloadPromise = downloadFile(cardInfo.image, filename)
                .catch(error => {
                    console.error(`✗ Failed to download ${cardName}: ${error.message}`);
                    failedDownloads.push({ cardName, url: cardInfo.image, error: error.message });
                });
            
            downloadPromises.push(downloadPromise);
            
            // Add a small delay to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    // Wait for all downloads to complete
    await Promise.all(downloadPromises);
    
    console.log('\n=== Download Summary ===');
    console.log(`Total cards processed: ${Object.keys(cardDetails).length}`);
    console.log(`Successful downloads: ${downloadPromises.length - failedDownloads.length}`);
    console.log(`Failed downloads: ${failedDownloads.length}`);
    
    if (failedDownloads.length > 0) {
        console.log('\nFailed downloads:');
        failedDownloads.forEach(fail => {
            console.log(`- ${fail.cardName}: ${fail.error}`);
        });
    }
    
    console.log('\nDownload process completed!');
}

// Run the download script
downloadAllImages().catch(console.error);
