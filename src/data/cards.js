// All available cards in the game with detailed information
export const allCards = [
    "A Piercing Truth", "August Presence", "Black Mist", "Blunderbuss", "Cornered Despot",
    "Courteous Jousting", "Crow's Blessing", "Elite Gem", "Engraved Scope", "Ermine Belt",
    "Extra Barrel", "Gradual Absolution", "High Focus", "Holy Gunpowder", "King's Shoulders",
    "Kingdom Wealth", "Kingly Alms", "Majestic Censer", "Rightful Curtsy", "Ritual Dagger",
    "Royal Loafers", "Sacred Crown", "Small Fry Harvest", "Subtle Poison", "The Moat",
    "Unfaithful Steed", "Unjust Decree", "Wand of Downpour", "Wand of Frenzy", "Wand of Gust",
    "Wand of Wings", "Wand of Wrath", "Wand of Souls", "Wand of Execution", "Wand of Hypnosis", "Sawed-Off Justice",
    "Welcome Gift", "Cannon Fodder", "Philanthropy", "Sacred Light", "Ravenous Rats",
    "Unholy Call", "Undercover Mission", "Caltrops", "Nightbane", "Bushido", "Bloodless Coup",
     "Presbyopia", "Golden Aging", "Fool Companion", "Force Feeding",
    "Possessed", "Imperial Shot Put", "Church Organ", "Black Plague", "Deep Waters",
    "Indelible Memories", "Monarch's Confidence", "Tearing Bullets", "The Mole", "Fearsome",
    "Human Shield", "Reign of Terror", "Ancient Flagstone", "Patience", "Bold Plan",
    "Low-Cost Disguise", "Silencer", "Holoking", "Cloaking Device", "Ambush", "Selective Listening",
    "Secret Move", "Workshop", "Seer's Orb","Mystic Shackles","Elusive","Taunting Hop",
    
    // White Cards
    "Ammunition Depot", "Ascension", "Assault", "Backups", "Bodyguard", "Cardinal", "Castle",
    "Cavalry", "Conclave", "Conscription", "Court of the King", "Crusades", "Entitle",
    "Drag Queen", "Homecoming", "Tragic Homecoming", "Iron Maiden", "King's Mistress",
    "Kite Shield", "Lookout Tower", "Militia", "Peace", "Pikemen", "Pillage", "Remparts",
    "Revolution", "Ruins", "Saboteur", "Scouting", "The Red Book", "The Secret Heir",
    "Theocracy", "Throne Room", "Zealots", "Karma", "Undead Armies", "Shortage", "Succubus",
    "Cathedral", "Sanctity", "Knightmare", "Highest Dungeon", "Bunker", "The Bridge",
    "Divine Healing", "Last Guardian", "Trowel", "Full Plate Armor", "Military Academy",
    "Witch's Curse", "Saddle", "The Jester", "Guillotine", "Analysis Paralysis", "Mausoleum",
    "Final Countdown", "Mangonel", "Prison", "The Royal Hunt", "Buckler of Limos",
    "King's Look-Alike", "Emergency Call", "Lady in the Tower", "Vampirism", "Inquisition",
    "Tag Team", "Unsettled Throne", "Nomad Life", "Governess", "Unicorn", "Plumed Knight",
    "Reverend Mother", "Commoner's Reign", "Self Defense", "Bouncy Castle", "Sokoban",
    "Fallen Dynasty"
];

import { getImageBasePath, getFallbackImagePath } from '../config/env.js';

// Function to get local image path for a card
export function getLocalImagePath(cardName) {
    const imageMap = {
        "Ancient Flagstone": "Ancient_flagstone.png",
        "A Piercing Truth": "A_Piercing_Truth.png",
        "August Presence": "August_Presence.png",
        "Black Mist": "Black_Mist.png",
        "Blunderbuss": "Blunderbuss.png",
        "Buckler of Limos": "Buckler_of_limos.png",
        "Cornered Despot": "Cornered_Despot.png",
        "Courteous Jousting": "Courteous_Jousting.png",
        "Crow's Blessing": "Crow_27s_Blessing.png",
        "Elite Gem": "Elite_Gem.png",
        "Engraved Scope": "Engraved_Scope.png",
        "Ermine Belt": "Ermine_Belt.png",
        "Extra Barrel": "Extra_Barrel.png",
        "Gradual Absolution": "Gradual_Absolution.png",
        "High Focus": "High_Focus.png",
        "Holy Gunpowder": "Holy_Gunpowder.png",
        "King's Shoulders": "King_27s_Shoulders.png",
        "Kingdom Wealth": "Kingdom_Wealth.png",
        "Kingly Alms": "Kingly_Alms.png",
        "Majestic Censer": "Majestic_Censer.png",
        "Rightful Curtsy": "Rightful_Curtsy.png",
        "Ritual Dagger": "Ritual_Dagger.png",
        "Royal Loafers": "Royal_Loafers.png",
        "Sacred Crown": "Sacred_Crown.png",
        "Small Fry Harvest": "Small_Fry_Harvest.png",
        "Subtle Poison": "Subtle_Poison.png",
        "The Moat": "The_Moat.png",
        "Unfaithful Steed": "Unfaithful_Steed.png",
        "Unjust Decree": "Unjust_Decree.png",
        "Wand of Downpour": "Wand_of_Downpour.png",
        "Wand of Frenzy": "Wand_of_Frenzy.png",
        "Wand of Gust": "Wand_of_Gust.png",
        "Wand of Wings": "Wand_of_Wings.png",
        "Wand of Wrath": "Wand_of_Wrath.png",
        "Wand of Souls": "Wand_of_Souls_Image.png",
        "Wand of Execution": "Wand_of_Execution_Image.png",
        "Wand of Hypnosis": "WandofHypnosis.png",
        "Sawed-Off Justice": "Sawed-Off_Justice.png",
        "Welcome Gift": "Welcome-Gift.png",
        "Cannon Fodder": "Cannon-Fodder.png",
        "Philanthropy": "Philanthropy.png",
        "Sacred Light": "Sacred_Light.png",
        "Ravenous Rats": "Ravenous-Rats.png",
        "Unholy Call": "Unholy-Call.png",
        "Undercover Mission": "Undercover-Mission.png",
        "Caltrops": "Caltrops2.png",
        "Nightbane": "Nightbane.png",
        "Bushido": "Bushido.png",
        "Bloodless Coup": "Bloodless_Coup.png",
        "Presbyopia": "Presbyopia.png",
        "Golden Aging": "GoldenAging.png",
        "Fool Companion": "FoolCompanion.png",
        "Force Feeding": "Forcefeeding.png",
        "Possessed": "Possessed.png",
        "Imperial Shot Put": "Imperial_Shot_Put.png",
        "Church Organ": "Church_Organ.jpg",
        "Black Plague": "Plague.PNG",
        "Deep Waters": "Deep_Waters.jpg",
        "Indelible Memories": "Indelible_memories.png",
        "Monarch's Confidence": "Monarch_E2_80_99s_Confidence.jpg",
        "Tearing Bullets": "Tearing_Bullets.jpg",
        "The Mole": "The_mole.png",
        "Fearsome": "Fearsome.png",
        "Human Shield": "Human_shield.png",
        "Reign of Terror": "Reign_of_terror.png",
        "Patience": "Black_Patience_Card.png",
        "Bold Plan": "Bold_Plan.jpg",
        "Low-Cost Disguise": "Low_Cost_Disguise.jpg",
        "Silencer": "Silencer.jpg",
        "Holoking": "Holo-King.jpg",
        "Cloaking Device": "Cloaking_Device.png",
        "Ambush": "Ambush.png",
        "Selective Listening": "Selective_Listening.jpg",
        "Secret Move": "Secret_move.png",
        "Workshop": "Workshop.png",
        "Seer's Orb": "Seer_E2_80_99s_Orb.jpg",
        "Ammunition Depot": "Ammunition_Depot.png",
        "Ascension": "Ascension.png",
        "Assault": "Assault.png",
        "Backups": "Backups.png",
        "Bodyguard": "Bodyguard.png",
        "Cardinal": "Cardinal.png",
        "Castle": "Castle.png",
        "Cavalry": "Cavalry.png",
        "Conclave": "Conclave.png",
        "Conscription": "Conscription.png",
        "Court of the King": "Court_of_the_King.png",
        "Crusades": "Crusades.png",
        "Entitle": "Entitle.png",
        "Drag Queen": "Crossdresser.png",
        "Homecoming": "Homecoming.png",
        "Tragic Homecoming": "Angryex.png",
        "Iron Maiden": "Iron_Maiden.png",
        "King's Mistress": "King_27s_Mistress.png",
        "Kite Shield": "Kite_Shield.png",
        "Lookout Tower": "Lookout_Tower.png",
        "Militia": "Militia.png",
        "Peace": "Peace.png",
        "Pikemen": "Pikemen.png",
        "Pillage": "Pillage.png",
        "Remparts": "Remparts.png",
        "Revolution": "Revolution.png",
        "Ruins": "Ruins.png",
        "Saboteur": "Saboteur.png",
        "Scouting": "Scouting.png",
        "The Red Book": "The_Red_Book.png",
        "The Secret Heir": "The_Secret_Heir.png",
        "Theocracy": "Theocracy.png",
        "Throne Room": "Throne_Room.png",
        "Zealots": "Zealots.png",
        "Karma": "Karma1.jpg",
        "Undead Armies": "Undead_Armies.png",
        "Shortage": "Shortage.png",
        "Succubus": "Succubus.png",
        "Cathedral": "Cathedral_Card.jpg",
        "Sanctity": "Sanctity.png",
        "Knightmare": "Knigtmare.png",
        "Highest Dungeon": "HighestDungeon.png",
        "Bunker": "Bunker.jpg",
        "The Bridge": "TheBridge.png",
        "Divine Healing": "DivineHealing.png",
        "Last Guardian": "LastGuardian.png",
        "Trowel": "Trowel.png",
        "Full Plate Armor": "FullPlateArmor.png",
        "Military Academy": "MilitaryAcademy.png",
        "Witch's Curse": "WitchCurse.png",
        "Saddle": "Saddle.png",
        "The Jester": "The_Jester.png",
        "Guillotine": "Guillotine.png",
        "Analysis Paralysis": "Analysis_Paralysis_1.jpg",
        "Mausoleum": "Mausoleum.jpg",
        "Final Countdown": "Final_Countdown.jpg",
        "Mangonel": "Mangonel_.jpg",
        "Prison": "Prison.png",
        "The Royal Hunt": "The_Royal_Hunt.jpg",
        "Buckler of Limos": "Buckler_of_Limos.png",
        "King's Look-Alike": "King__27s_Look-Alike.png",
        "Emergency Call": "Emergency_Call.jpg",
        "Lady in the Tower": "Lady_in_the_Tower.png",
        "Vampirism": "Vampirism.png",
        "Inquisition": "Inquisition.png",
        "Tag Team": "Tag_Team.jpg",
        "Unsettled Throne": "Unsettled_throne.png",
        "Nomad Life": "Nomad_Life.jpg",
        "Governess": "Governess.jpg",
        "Unicorn": "Unicorn.jpg",
        "Plumed Knight": "Plumed_Knight.jpg",
        "Reverend Mother": "Reverend_mother.png",
        "Commoner's Reign": "Commoner__27s_Reign.png",
        "Self Defense": "Image_missing.png",//missing
        "Bouncy Castle": "Bouncy_castle.png",
        "Sokoban": "Sokoban.png",
        "Mystic Shackles": "Mystic_Shackles.png",
        "Elusive": "Elusive.jpg",
        "Taunting Hop": "Taunting_Hop.png",
        "Fallen Dynasty": "Fallen_Dynasty.png",
    };
    
    const imageName = imageMap[cardName];
    if (imageName) {
        // Use environment-aware base path
        const imagePath = getImageBasePath() + imageName;
        
        // Log image path for debugging (only in development)
        if (import.meta.env.DEV) {
            console.log(`🖼️ Image path for "${cardName}":`, imagePath);
        }
        
        return imagePath;
    }
    
    // Fallback to a default image if not found
    const fallbackPath = getFallbackImagePath();
    
    // Log fallback usage for debugging (only in development)
    if (import.meta.env.DEV) {
        console.log(`⚠️ No image mapping found for "${cardName}", using fallback:`, fallbackPath);
    }
    
    return fallbackPath;
}

export const cardDetails = {
    "Fallen Dynasty": {
        image: getLocalImagePath("Fallen Dynasty"),
        description: "They ruled a long time ago... But royalty shall prevail",
        maxAmount: 1,
        requirements: "Theocracy, The Red Book"
    },
    "Ancient Flagstone": {
        image: getLocalImagePath("Ancient Flagstone"),
        description: "Adds a Flagstone to the board. You can always move to this square no matter how far you are from it",
        maxAmount: 2,
        requirements: ""
    },
    "A Piercing Truth": {
        image: getLocalImagePath("A Piercing Truth"),
        description: "Your bullets have a 30% chance to pierce through targets",
        maxAmount: 2,
        requirements: ""
    },
    "August Presence": {
        image: getLocalImagePath("August Presence"),
        description: "Non-king pieces can't come near your King",
        maxAmount: 1,
        requirements: ""
    },
    "Black Mist": {
        image: getLocalImagePath("Black Mist"),
        description: "Protect you from death once per floor -1 fire range",
        maxAmount: 2,
        requirements: ""
    },
    "Blunderbuss": {
        image: getLocalImagePath("Blunderbuss"),
        description: "+2 firepower Fire arc +30°",
        maxAmount: 2,
        requirements: ""
    },
    "Cornered Despot": {
        image: getLocalImagePath("Cornered Despot"),
        description: "+2 firepower Flip card if your King is not on the board's edge",
        maxAmount: 1,
        requirements: ""
    },
    "Courteous Jousting": {
        image: getLocalImagePath("Courteous Jousting"),
        description: "Play an extra turn when you kill a Knight Fire arc -10°",
        maxAmount: 1,
        requirements: ""
    },
    "Crow's Blessing": {
        image: getLocalImagePath("Crow's Blessing"),
        description: "+2 fire range",
        maxAmount: 1,
        requirements: ""
    },
    "Elite Gem": {
        image: getLocalImagePath("Elite Gem"),
        description: "+1 ammo regeneration +1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Engraved Scope": {
        image: getLocalImagePath("Engraved Scope"),
        description: "Right Click: +1 Fire Range, -45 fire arc Bonus resets when you move Activating this bonus costs a turn +1 search",
        maxAmount: 1,
        requirements: ""
    },
    "Egotic Maelstrom": {
        image: getLocalImagePath("Egotic Maelstrom"),
        description: "Every 10 turns: +1 Firepower",
        maxAmount: 1,
        requirements: ""
    },
    "Ermine Belt": {
        image: getLocalImagePath("Ermine Belt"),
        description: "+3 ammo max",
        maxAmount: 3,
        requirements: ""
    },
    "Extra Barrel": {
        image: getLocalImagePath("Extra Barrel"),
        description: "Charge +1 additional shell in your Royal Shotgun Fire arc +7°",
        maxAmount: 3,
        requirements: ""
    },
    "Gradual Absolution": {
        image: getLocalImagePath("Gradual Absolution"),
        description: "+1 firepower for each empty Soul slot",
        maxAmount: 2,
        requirements: ""
    },
    "High Focus": {
        image: getLocalImagePath("High Focus"),
        description: "+1 firepower Fire arc -18° Flip card is a piece is adjacent to you",
        maxAmount: 2,
        requirements: ""
    },
    "Holy Gunpowder": {
        image: getLocalImagePath("Holy Gunpowder"),
        description: "+1 firepower",
        maxAmount: 2,
        requirements: ""
    },
    "King's Shoulders": {
        image: getLocalImagePath("King's Shoulders"),
        description: "Once per floor lift a non-king piece on your path without ending your turn",
        maxAmount: 1,
        requirements: "Not having blade"
    },
    "Kingdom Wealth": {
        image: getLocalImagePath("Kingdom Wealth"),
        description: "+6 ammo max King: +2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Kingly Alms": {
        image: getLocalImagePath("Kingly Alms"),
        description: "+1 Grenade +3 grenade damage +2 additional damage at the grenades' explosion center",
        maxAmount: 1,
        requirements: ""
    },
    "Majestic Censer": {
        image: getLocalImagePath("Majestic Censer"),
        description: "+1 ammo max Adds 1 extra Soul slot",
        maxAmount: 3,
        requirements: ""
    },
    "Mystic Shackles": {
        image: getLocalImagePath("Mystic Shackles"),
        description: "-1 Ammo Max When Orb hovers on the piece, it will lock the pieces movement and must move where the orb predicts it will move Affected piece loses 1 speed",
        maxAmount: 1,
        requirements: "Seer's Orb"
    },
    "Rightful Curtsy": {
        image: getLocalImagePath("Rightful Curtsy"),
        description: "+1 Ammo Max +50% chance to knock back enemies Pieces knocked back on the edge of the board are knocked out of the board and die instantly",
        maxAmount: 2,
        requirements: ""
    },
    "Ritual Dagger": {
        image: getLocalImagePath("Ritual Dagger"),
        description: "-1 fire range King: -2 HP +1 blade",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Royal Loafers": {
        image: getLocalImagePath("Royal Loafers"),
        description: "Strafe mode: Right click a target and fire on your next move",
        maxAmount: 1,
        requirements: ""
    },
    "Sacred Crown": {
        image: getLocalImagePath("Sacred Crown"),
        description: "You can play an extra turn after using a Soul card",
        maxAmount: 1,
        requirements: ""
    },
    "Small Fry Harvest": {
        image: getLocalImagePath("Small Fry Harvest"),
        description: "+1 Ammo Max Killing a Pawn restores 1 ammo +1 Blade damage",
        maxAmount: 2,
        requirements: ""
    },
    "Subtle Poison": {
        image: getLocalImagePath("Subtle Poison"),
        description: "Queen: -1 hp King: -1 hp Queen's move limit: 1 square for 15 turn",
        maxAmount: 1,
        requirements: ""
    },
    "Elusive": {
        image: getLocalImagePath("Elusive"),
        description: "+1 Jump Pieces that are about to move will not be able to attack you",
        maxAmount: 1,
        requirements: ""
    },
    "Taunting Hop": {
        image: getLocalImagePath("Taunting Hop"),
        description: "+1 Jump +1 Jump Damage",
        maxAmount: 2,
        requirements: ""
    },
    "The Moat": {
        image: getLocalImagePath("The Moat"),
        description: "Non-knight pieces can't cross the Moat in one move",
        maxAmount: 1,
        requirements: ""
    },
    "Unfaithful Steed": {
        image: getLocalImagePath("Unfaithful Steed"),
        description: "Move 1 square further Flip if there is no Knight on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Unjust Decree": {
        image: getLocalImagePath("Unjust Decree"),
        description: "-1 firepower King is allowed to right click to fire all loaded shells",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Downpour": {
        image: getLocalImagePath("Wand of Downpour"),
        description: "Deal 10 damage on random enemies",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Frenzy": {
        image: getLocalImagePath("Wand of Frenzy"),
        description: "Refill your ammo and reload your gun",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Gust": {
        image: getLocalImagePath("Wand of Gust"),
        description: "Repel all white pieces northward",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Wings": {
        image: getLocalImagePath("Wand of Wings"),
        description: "Move up to 3 squares in any directions",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Wrath": {
        image: getLocalImagePath("Wand of Wrath"),
        description: "Deal firepower damage to a non-king target",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Souls": {
        image: getLocalImagePath("Wand of Souls"),
        description: "Steal a soul from any non-Pawn and non-King piece even if they are alive.",
        maxAmount: 1,
        requirements: ""
    },
    "Wand of Execution": {
        image: getLocalImagePath("Wand of Execution"),
        description: "Instantly kill any pawn Reload this wand when you kill a non-Pawn piece",
        maxAmount: 1,
        requirements: ""
    },
    "Sawed-Off Justice": {
        image: getLocalImagePath("Sawed-Off Justice"),
        description: "+2 Firepower -1 Fire range Shooting moves you backwards",
        maxAmount: 1,
        requirements: ""
    },
    "Welcome Gift": {
        image: getLocalImagePath("Welcome Gift"),
        description: "+4 Firepower Flip card if your shotgun has been reloaded",
        maxAmount: 1,
        requirements: ""
    },
    "Cannon Fodder": {
        image: getLocalImagePath("Cannon Fodder"),
        description: "Use Pawn's souls to gain +2 Firepower on your next shot",
        maxAmount: 1,
        requirements: ""
    },
    "Philanthropy": {
        image: getLocalImagePath("Philanthropy"),
        description: "+2 Grenades -1 Grenade damage",
        maxAmount: 1,
        requirements: ""
    },
    "Sacred Light": {
        image: getLocalImagePath("Sacred Light"),
        description: "+1 Grenade -2 Grenade damage You are immune to grenade damage Exploded pieces are stunned for two turns Stunned pieces are unable to move nor attack until stun is over",
        maxAmount: 1,
        requirements: ""
    },
    "Ravenous Rats": {
        image: getLocalImagePath("Ravenous Rats"),
        description: "When you kill a piece, a rat bites the nearest piece for 1 dmg",
        maxAmount: 1,
        requirements: ""
    },
    "Unholy Call": {
        image: getLocalImagePath("Unholy Call"),
        description: "Add 3 pentagrams on the board. Trigger one to get an extra turn. Trigger all to get +2 Firepower",
        maxAmount: 1,
        requirements: ""
    },
    "Undercover Mission": {
        image: getLocalImagePath("Undercover Mission"),
        description: "Add a question mark on the board When your king makes it to the square, you may choose a disruption Most effects last for the round",
        maxAmount: 1,
        requirements: ""
    },
    "Caltrops": {
        image: getLocalImagePath("Caltrops"),
        description: "-1 Speed to bleeding pieces +10% for a piece to be inflicted with bleeding when that piece moves",
        maxAmount: 2,
        requirements: ""
    },
    "Nightbane": {
        image: getLocalImagePath("Nightbane"),
        description: "Blade +3",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Bushido": {
        image: getLocalImagePath("Bushido"),
        description: "Once per turn, execute a piece with your blade without ending your turn Blade: +2 -1 Firepower",
        maxAmount: 1,
        requirements: "Not having King's Shoulders"
    },
    "Bloodless Coup": {
        image: getLocalImagePath("Bloodless Coup"),
        description: "Pawn can't attack you Flip this card if a pawn is killed",
        maxAmount: 1,
        requirements: ""
    },
    "Wand Of Hypnosis": {
        image: getLocalImagePath("Wand Of Hypnosis"),
        description: "Play a white piece of your choice",
        maxAmount: 1,
        requirements: ""
    },
    "Presbyopia": {
        image: getLocalImagePath("Presbyopia"),
        description: "Queen can't attack you at less than 2 range Bishop can't attack you at less than 2 range",
        maxAmount: 1,
        requirements: "Golden Aging"
    },
    "Golden Aging": {
        image: getLocalImagePath("Golden Aging"),
        description: "Queen: -1 hp King: -1 hp Every 10 turns: King: -1 speed, Queen: -1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "Fool Companion": {
        image: getLocalImagePath("Fool Companion"),
        description: "Jesters can move in all directions and always follow king. Earn an extra turn when you kill a jester",
        maxAmount: 1,
        requirements: "The Jester"
    },
    "Force Feeding": {
        image: getLocalImagePath("Force Feeding"),
        description: "+1 Ammo Max Allows you to squeeze in more ammo than your shotgun can hold +1 Firepower if your shotgun is fully loaded to default max loaded ammo",
        maxAmount: 1,
        requirements: ""
    },
    "Possessed": {
        image: getLocalImagePath("Possessed"),
        description: "Add 1 Bishop Add 2 extra Soul Slots",
        maxAmount: 1,
        requirements: "Conclave, Unholy Call"
    },
    "Imperial Shot Put": {
        image: getLocalImagePath("Imperial Shot Put"),
        description: "-1 Ammo Max Add a cannonball onto the board You can infinitely carry the cannonball and throw it",
        maxAmount: 1,
        requirements: "King's Shoulders"
    },
    "Church Organ": {
        image: getLocalImagePath("Church Organ"),
        description: "+2 Ammo in your barrel +2 Ammo max",
        maxAmount: 1,
        requirements: "Cathedral"
    },
    "Black Plague": {
        image: getLocalImagePath("Black Plague"),
        description: "-1 Fire Range Every turn, 1 random piece takes 1 damage",
        maxAmount: 1,
        requirements: "Crow's Blessing, Ravenous Rats"
    },
    "Deep Waters": {
        image: getLocalImagePath("Deep Waters"),
        description: "Pieces within the moat cannot attack you",
        maxAmount: 1,
        requirements: "The Moat"
    },
    "Indelible Memories": {
        image: getLocalImagePath("Indelible Memories"),
        description: "+1 Grenade Grenades inflict bleeding onto exploded pieces",
        maxAmount: 1,
        requirements: ""
    },
    "Monarch's Confidence": {
        image: getLocalImagePath("Monarch's Confidence"),
        description: "+1 Firepower for every missing shell in the barrel of your shotgun",
        maxAmount: 1,
        requirements: ""
    },
    "Tearing Bullets": {
        image: getLocalImagePath("Tearing Bullets"),
        description: "Bullets inflict bleeding onto shot pieces",
        maxAmount: 1,
        requirements: ""
    },
    "The Mole": {
        image: getLocalImagePath("The Mole"),
        description: "+1 Ammo Max +1 spy among the pawns Talk to the spy by moving next to him to conduct a secret meeting The meeting gives the same effects to as if you landed on the Undercover Mission square",
        maxAmount: 2,
        requirements: "6+ Pawns"
    },
    "Fearsome": {
        image: getLocalImagePath("Fearsome"),
        description: "+1 Ammo Max +1 Fright Radius Whenever you kill a non-Pawn piece, piece with in your fright radius become scared Scared pieces are unable to attack you until they move away from you on their next move",
        maxAmount: 2,
        requirements: ""
    },
    "Human Shield": {
        image: getLocalImagePath("Human Shield"),
        description: "Fearsome is also applied on Pawn death +2 Ammo Max",
        maxAmount: 1,
        requirements: "Fearsome"
    },
    "Reign of Terror": {
        image: getLocalImagePath("Reign of Terror"),
        description: "-2 Ammo Max Fearsome is applied around killed non-Pawn pieces' squares",
        maxAmount: 1,
        requirements: "Fearsome"
    },
    
    // White Cards
    "Ammunition Depot": {
        image: getLocalImagePath("Ammunition Depot"),
        description: "Add 1 Rook Gains 2 ammo each time you kill a Rook",
        maxAmount: 2,
        requirements: ""
    },
    "Ascension": {
        image: getLocalImagePath("Ascension"),
        description: "Bishops can move across any obstacles",
        maxAmount: 1,
        requirements: ""
    },
    "Assault": {
        image: getLocalImagePath("Assault"),
        description: "Add 1 Pawn Pawns can walk 2 squares on their first move",
        maxAmount: 1,
        requirements: ""
    },
    "Backups": {
        image: getLocalImagePath("Backups"),
        description: "Add 3 Pawns",
        maxAmount: 3,
        requirements: ""
    },
    "Bodyguard": {
        image: getLocalImagePath("Bodyguard"),
        description: "King can't be killed if a Knight is alive Knights: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Cardinal": {
        image: getLocalImagePath("Cardinal"),
        description: "Remove 1 Pawn Add 1 Bishop -1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Castle": {
        image: getLocalImagePath("Castle"),
        description: "King swaps position with a Rook whenever he (the King) would take damage Rooks: +1",
        maxAmount: 1,
        requirements: ""
    },
    "Cavalry": {
        image: getLocalImagePath("Cavalry"),
        description: "Add 2 knights at the start of turn 15",
        maxAmount: 1,
        requirements: ""
    },
    "Conclave": {
        image: getLocalImagePath("Conclave"),
        description: "Add 2 bishops at the start of turn 15",
        maxAmount: 1,
        requirements: ""
    },
    "Conscription": {
        image: getLocalImagePath("Conscription"),
        description: "Add 1 Pawn every 5 turns",
        maxAmount: 2,
        requirements: ""
    },
    "Court of the King": {
        image: getLocalImagePath("Court of the King"),
        description: "Add 2 Knights Add 1 Bishop Add 1 Rook All pieces: -1 speed",
        maxAmount: 2,
        requirements: ""
    },
    "Crusades": {
        image: getLocalImagePath("Crusades"),
        description: "Remove 1 Bishop Add 2 Knights",
        maxAmount: 1,
        requirements: ""
    },
    "Entitle": {
        image: getLocalImagePath("Entitle"),
        description: "Remove 1 Pawn Add 1 Knight -1 ammo max",
        maxAmount: 1,
        requirements: ""
    },
    "Drag Queen": {
        image: getLocalImagePath("Drag Queen"),
        description: "Remove 1 Bishop Add 1 Queen at the start of turn 10",
        maxAmount: 1,
        requirements: ""
    },
    "Homecoming": {
        image: getLocalImagePath("Homecoming"),
        description: "Add 1 Queen Attempting to reshuffle this card will allow to get the Tragic Homecoming Card. This card can only be avoided by using the card Bold Plan on this card",
        maxAmount: 1,
        requirements: ""
    },
    "Tragic Homecoming": {
        image: getLocalImagePath("Tragic Homecoming"),
        description: "Add 1 queen Can be obtained by reshuffling Homecoming with the search mechanic Queen: +2 hearts Gives new messages for this card Examples: Better if you hadn't, She's clearly mad, You shouldn't have",
        maxAmount: 1,
        requirements: "Attempting to reshuffle Homecoming"
    },
    "Iron Maiden": {
        image: getLocalImagePath("Iron Maiden"),
        description: "Remove 1 queen Queen: -2 Speed Queens can't die",
        maxAmount: 1,
        requirements: "Having at least two Queens on the board"
    },
    "King's Mistress": {
        image: getLocalImagePath("King's Mistress"),
        description: "Add 1 Queen Queen's moves are limited to 3 squares",
        maxAmount: 1,
        requirements: ""
    },
    "Kite Shield": {
        image: getLocalImagePath("Kite Shield"),
        description: "Add 1 Pawn Knights have a shield that absorb every damage on a single turn",
        maxAmount: 1,
        requirements: ""
    },
    "Lookout Tower": {
        image: getLocalImagePath("Lookout Tower"),
        description: "Add 1 Rook at the start of turn 20 White backups come 1 turn sooner for every piece you kill",
        maxAmount: 2,
        requirements: ""
    },
    "Militia": {
        image: getLocalImagePath("Militia"),
        description: "Add 1 Pawn Pawns can move/attack in four directions",
        maxAmount: 1,
        requirements: ""
    },
    "Peace": {
        image: getLocalImagePath("Peace"),
        description: "Remove 1 Knight Add 2 Bishops",
        maxAmount: 1,
        requirements: ""
    },
    "Pikemen": {
        image: getLocalImagePath("Pikemen"),
        description: "Pawns can attack on the first two squares in front of them Pawns can no longer attack diagonally Pawns: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Pillage": {
        image: getLocalImagePath("Pillage"),
        description: "Remove 1 Rook Add 5 Pawns Pawn: +1 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Remparts": {
        image: getLocalImagePath("Remparts"),
        description: "Removes 2 Pawns Add 1 Rook",
        maxAmount: 2,
        requirements: ""
    },
    "Revolution": {
        image: getLocalImagePath("Revolution"),
        description: "Remove 1 Bishop Add 6 Pawns",
        maxAmount: 1,
        requirements: ""
    },
    "Ruins": {
        image: getLocalImagePath("Ruins"),
        description: "Add 2 Pawns Add 1 Rook Rook: -2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Saboteur": {
        image: getLocalImagePath("Saboteur"),
        description: "Remove 2 Pawns Add 1 Bishop Doubles fire arc for 1 bullet",
        maxAmount: 2,
        requirements: ""
    },
    "Scouting": {
        image: getLocalImagePath("Scouting"),
        description: "Remove 1 Knight Add 2 Pawns Pawn: +1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "Sokoban": {
        image: getLocalImagePath("Sokoban"),
        description: "Add 2 Pawns Rooks Can Push Pieces Up to 3 Times",
        maxAmount: 2,
        requirements: "2+ Rooks"
    },
    "The Red Book": {
        image: getLocalImagePath("The Red Book"),
        description: "Add 1 Bishop Bishops can move (not attack) orthogonally",
        maxAmount: 1,
        requirements: ""
    },
    "The Secret Heir": {
        image: getLocalImagePath("The Secret Heir"),
        description: "Add 1 Pawn One Pawn is the secret heir. The heir replaces the King if he dies.",
        maxAmount: 1,
        requirements: ""
    },
    "Theocracy": {
        image: getLocalImagePath("Theocracy"),
        description: "Remove 1 King Add 1 Bishop Bishop: +2 HP Win if all Bishops are dead",
        maxAmount: 1,
        requirements: "Having at least two bishops on the board"
    },
    "Throne Room": {
        image: getLocalImagePath("Throne Room"),
        description: "Queen: +1 HP King: +2 HP",
        maxAmount: 1,
        requirements: ""
    },
    "Zealots": {
        image: getLocalImagePath("Zealots"),
        description: "Pawn: +1 speed Bishop: +1 speed Flip if there are no bishops on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Karma": {
        image: getLocalImagePath("Karma"),
        description: "-1 firepower on White Squares +30° Fire arc on Black Squares",
        maxAmount: 1,
        requirements: ""
    },
    "Undead Armies": {
        image: getLocalImagePath("Undead Armies"),
        description: "Pawn: -1 HP Replace Rooks, Knights, and Bishops with a Pawn after they die",
        maxAmount: 1,
        requirements: ""
    },
    "Shortage": {
        image: getLocalImagePath("Shortage"),
        description: "Remove 1 Pawn -3 ammo max -1 Grenade",
        maxAmount: 1,
        requirements: ""
    },
    "Succubus": {
        image: getLocalImagePath("Succubus"),
        description: "Add 1 Queen Add 1 Extra Soul Slot",
        maxAmount: 2,
        requirements: ""
    },
    "Cathedral": {
        image: getLocalImagePath("Cathedral"),
        description: "Remove 1 Bishop Add 1 Rook Non-Rook pieces next to a Rook cannot take more than 2 damage",
        maxAmount: 1,
        requirements: "Cardinal"
    },
    "Sanctity": {
        image: getLocalImagePath("Sanctity"),
        description: "Add 1 Bishop Bishop Souls cannot be reaped",
        maxAmount: 1,
        requirements: "Conclave"
    },
    "Knightmare": {
        image: getLocalImagePath("Knightmare"),
        description: "Knights: -1 HP Knights can only be hit when moving Add 1 Knight",
        maxAmount: 1,
        requirements: "Black Mist"
    },
    "Highest Dungeon": {
        image: getLocalImagePath("Highest Dungeon"),
        description: "All pieces: +1 HP Flip card if there is no Rook on the board",
        maxAmount: 1,
        requirements: "Remparts"
    },
    "Bunker": {
        image: getLocalImagePath("Bunker"),
        description: "Remove 1 Bishop Add 1 Rook Non-Rook pieces near a Rook can't take more than one damage per turn",
        maxAmount: 1,
        requirements: "Kingly Alms, Indelible Memories, Sacred Light, or Philanthropy"
    },
    "The Bridge": {
        image: getLocalImagePath("The Bridge"),
        description: "Add a knight after 10 turns Open a path in the moat",
        maxAmount: 1,
        requirements: "The Moat"
    },
    "Divine Healing": {
        image: getLocalImagePath("Divine Healing"),
        description: "Bishops: +1 HP Bishops can heal nearby allies instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Last Guardian": {
        image: getLocalImagePath("Last Guardian"),
        description: "After killing a Pawn, promote another Pawn if it's the last one",
        maxAmount: 1,
        requirements: ""
    },
    "Trowel": {
        image: getLocalImagePath("Trowel"),
        description: "Rooks: +4 HP Flip card if there's no Pawn on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Full Plate Armor": {
        image: getLocalImagePath("Full Plate Armor"),
        description: "All pieces: +1 HP All pieces: -1 Speed Blade: -1",
        maxAmount: 1,
        requirements: ""
    },
    "Military Academy": {
        image: getLocalImagePath("Military Academy"),
        description: "Add 1 knight every ten turns",
        maxAmount: 1,
        requirements: ""
    },
    "Witch's Curse": {
        image: getLocalImagePath("Witch's Curse"),
        description: "Fire arc +10° -1 Fire Range -1 Firepower Flip this card if a Queen is killed",
        maxAmount: 1,
        requirements: "Homecoming"
    },
    "Saddle": {
        image: getLocalImagePath("Saddle"),
        description: "Knights carry non-knight and non-rook pieces when they move Knights: -1 speed",
        maxAmount: 1,
        requirements: ""
    },
    "The Jester": {
        image: getLocalImagePath("The Jester"),
        description: "Add 1 pawn Jesters can move diagonally and have +2 speed. Jesters pass the hat when they die.",
        maxAmount: 1,
        requirements: "Throne Room"
    },
    "Guillotine": {
        image: getLocalImagePath("Guillotine"),
        description: "Remove 1 King",
        maxAmount: 1,
        requirements: "Revolution"
    },
    "Analysis Paralysis": {
        image: getLocalImagePath("Analysis Paralysis"),
        description: "White gains six free turns to move pieces, this bonus can be cancelled early if you are put in check +1 search",
        maxAmount: 2,
        requirements: "High Focus"
    },
    "Mausoleum": {
        image: getLocalImagePath("Mausoleum"),
        description: "Adds 1 rook When a rook dies, kings take 2 damage",
        maxAmount: 2,
        requirements: ""
    },
    "Final Countdown": {
        image: getLocalImagePath("Final Countdown"),
        description: "You have 12 turns to kill the last 6 pieces on the board",
        maxAmount: 1,
        requirements: ""
    },
    "Mangonel": {
        image: getLocalImagePath("Mangonel"),
        description: "Add 1 rook Rooks: -1 speed Rooks can choose to throw boulders at you instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Prison": {
        image: getLocalImagePath("Prison"),
        description: "Add 1 Knight Add 1 bishop Bishop and Knights get locked up when right next to a rook When they are locked up, they cannot move nor capture you",
        maxAmount: 1,
        requirements: "Having at least 1 rook, bishop, and knight on the board"
    },
    "The Royal Hunt": {
        image: getLocalImagePath("The Royal Hunt"),
        description: "King can shoot arrows at you +1 arrow speed",
        maxAmount: 2,
        requirements: ""
    },
    "Buckler of Limos": {
        image: getLocalImagePath("Buckler of Limos"),
        description: "Kings: -1 speed Kings cant take more than 3 damage per turn",
        maxAmount: 1,
        requirements: ""
    },
    "King's Look-Alike": {
        image: getLocalImagePath("King's Look-Alike"),
        description: "Add 1 king Kings: +1 heart The king added is a false king when the false king is damaged, replace him with a knight",
        maxAmount: 3,
        requirements: ""
    },
    "Emergency Call": {
        image: getLocalImagePath("Emergency Call"),
        description: "Add 1 pawn When a king takes damage for the first time, it will cry out for help and promotes the nearest pawn if any",
        maxAmount: 1,
        requirements: ""
    },
    "Lady in the Tower": {
        image: getLocalImagePath("Lady in the Tower"),
        description: "Add 1 rook When a rook is supposed to capture you, it will instead promote into a queen and will move to the nearest valid square closest to you",
        maxAmount: 1,
        requirements: ""
    },
    "Vampirism": {
        image: getLocalImagePath("Vampirism"),
        description: "King and Queen: +1 Health Kings and Queens are immune to Bleeding Kings and Queens may absorb a bleeding piece's blood that are next to them. When they do this, they restore 1 heart",
        maxAmount: 1,
        requirements: "Tearing Bullets or Caltrops"
    },
    "Inquisition": {
        image: getLocalImagePath("Inquisition"),
        description: "Remove 1 Pawn Add 1 Bishop Bishops attempt to cancel Undercover Mission squares and execute spies on the board Bishops may attack you even while stealthy or disguised as a Pawn",
        maxAmount: 1,
        requirements: "Undercover Mission, The Mole, Low-Cost Disguise or Cloaking Device"
    },
    "Tag Team": {
        image: getLocalImagePath("Tag Team"),
        description: "Bishops and Rooks: +1 Health Bishops and Rooks may swap places with each other at will",
        maxAmount: 1,
        requirements: "Needs a rook and bishop"
    },
    "Unsettled Throne": {
        image: getLocalImagePath("Unsettled Throne"),
        description: "Add 1 pawn Add 1 more heir to the board",
        maxAmount: 1,
        requirements: "The Secret Heir"
    },
    "Nomad Life": {
        image: getLocalImagePath("Nomad Life"),
        description: "Remove 1 Rook Add 2 knights Add 1 bishop Knights may promote to bishops, rooks, or queens if they make it to the last rank",
        maxAmount: 1,
        requirements: ""
    },
    "Governess": {
        image: getLocalImagePath("Governess"),
        description: "Add 1 Bishop Pawns always promote into Queens",
        maxAmount: 1,
        requirements: ""
    },
    "Unicorn": {
        image: getLocalImagePath("Unicorn"),
        description: "Add 1 Knight Knights have a chance to push you back 1 square by charging at you instead of moving",
        maxAmount: 1,
        requirements: ""
    },
    "Plumed Knight": {
        image: getLocalImagePath("Plumed Knight"),
        description: "At the start of a round, one random knight is selected to be a plumed knight Gains a red plume That Knight gains 3 hp It can attack but not move 1 square diagonally",
        maxAmount: 1,
        requirements: ""
    },
    "Reverend Mother": {
        image: getLocalImagePath("Reverend Mother"),
        description: "Add 1 Queen When a queen is killed, all pieces become scared",
        maxAmount: 1,
        requirements: "Theocracy"
    },
         "Commoner's Reign": {
         image: getLocalImagePath("Commoner's Reign"),
         description: "Add 1 Knight Knights: +2 health Win if all Knights are dead Having this card and then picking Bodyguard or having Bodyguard prior to getting this card will turn it into the Self Defense card",
         maxAmount: 1,
         requirements: "King's Look-Alike, Undercover Mission or The Mole"
     },
    "Self Defense": {
        image: getLocalImagePath("Self Defense"),
        description: "Knights: +2 health",
        maxAmount: 1,
        requirements: "Undercover Mission or The Mole, King's Look-Alike, Bodyguard"
    },
    "Bouncy Castle": {
        image: getLocalImagePath("Bouncy Castle"),
        description: "Rooks: -2 Health Pieces knocked off the board will bounce back to the center of the board at full health Grenades are bouncier",
        maxAmount: 1,
        requirements: "2x Rightful Curtsy or x1 Rightful Curtsy with Ramesses II (As long it has 100 knockback)"
    },
    "Patience": {
        image: getLocalImagePath("Patience"),
        description: "+1 Ammo Max On the next round, you may pick any black card in the game that has met the spawn requirements You still have to pick one of two white cards",
        maxAmount: 2,
        requirements: ""
    },
    "Bold Plan": {
        image: getLocalImagePath("Bold Plan"),
        description: "+1 Ammo Max Replace any one white card with another of your choice, as long as that card meets the spawn requirements",
        maxAmount: 2,
        requirements: ""
    },
    "Low-Cost Disguise": {
        image: getLocalImagePath("Low-Cost Disguise"),
        description: "When you kill a pawn, you disguise as a white pawn for 2 turns While Disguised, white pieces cannot attack you Disguise disappears when disguise timer runs out or you use your shotgun, blades do not expose you when used",
        maxAmount: 2,
        requirements: ""
    },
    "Silencer": {
        image: getLocalImagePath("Silencer"),
        description: "-1 Ammo Max Using your shotgun no longer exposes you while stealthy",
        maxAmount: 1,
        requirements: "Low-Cost Disguise or Cloaking Device"
    },
    "Holoking": {
        image: getLocalImagePath("Holoking"),
        description: "When you use a soul, a hologram of yourself is made on the spot you original was before using a soul White pieces will attempt to capture the hologram thinking it is you",
        maxAmount: 1,
        requirements: ""
    },
    "Cloaking Device": {
        image: getLocalImagePath("Cloaking Device"),
        description: "Whenever you create a hologram, you are in stealth mode for six turns Pieces are unable to attack you nor see you and will go for the hologram You are exposed if the timer runs out or if there is no hologram on the board",
        maxAmount: 1,
        requirements: "Holoking"
    },
    "Ambush": {
        image: getLocalImagePath("Ambush"),
        description: "+2 Fire Range and +1 Grenade Damage Flip card when king is not being stealthy",
        maxAmount: 1,
        requirements: "Cloaking Device or Low-Cost Disguise"
    },
    "Selective Listening": {
        image: getLocalImagePath("Selective Listening"),
        description: "White can only move 2 different pieces in one turn at a time",
        maxAmount: 1,
        requirements: ""
    },
    "Secret Move": {
        image: getLocalImagePath("Secret Move"),
        description: "+1 Jump Gain firepower for your next shot equal to the amount of jumps you will regain in the next turn",
        maxAmount: 1,
        requirements: "Taunting Hop or Elusive"
    },
    "Workshop": {
        image: getLocalImagePath("Workshop"),
        description: "Every 8 turns: restore 2 Ammo and restore 1 grenade",
        maxAmount: 1,
        requirements: "Kingly Alms, Indelible Memories, Sacred Light, or Philanthropy"
    },
    "Seer's Orb": {
        image: getLocalImagePath("Seer's Orb"),
        description: "+1 Search Right Click: Click a piece to have the orb hover above it The orb predicts the piece's movement",
        maxAmount: 1,
        requirements: "Not having any other right clickable card such as any grenade card."
    }
};

// Utility function to parse card requirements and separate card prerequisites from other requirements
export function parseCardRequirements(requirementsString) {
    if (!requirementsString || requirementsString.trim() === "") {
        return { cardPrerequisites: [], otherRequirements: [] };
    }

    const cardPrerequisites = [];
    const otherRequirements = [];
    
    // First, handle OR conditions by splitting on "or" and then processing each part
    const orParts = requirementsString.split(/\s+or\s+/);
    
    orParts.forEach(orPart => {
        // Split each OR part by commas, semicolons, or "and"
        const parts = orPart.split(/[,;]|\s+and\s+/);
        
        parts.forEach(part => {
            const trimmed = part.trim();
            if (!trimmed) return;
            
            // Check if this part is a card name (exists in allCards)
            if (allCards.includes(trimmed)) {
                cardPrerequisites.push(trimmed);
            } else {
                // Check for special cases like "2+ Rooks", "Having at least X", etc.
                if (trimmed.includes("+") || 
                    trimmed.includes("Having at least") || 
                    trimmed.includes("Not having") ||
                    trimmed.includes("x") ||
                    trimmed.includes("blade") ||
                    trimmed.includes("Rooks") ||
                    trimmed.includes("Bishops") ||
                    trimmed.includes("Knights") ||
                    trimmed.includes("Pawns") ||
                    trimmed.includes("Queens") ||
                    trimmed.includes("Kings")) {
                    otherRequirements.push(trimmed);
                } else if (trimmed.includes("Attempting to reshuffle")) {
                    otherRequirements.push(trimmed);
                } else {
                    // If it's not clearly a card and not clearly a special requirement, treat as other
                    otherRequirements.push(trimmed);
                }
            }
        });
    });
    
    return { cardPrerequisites, otherRequirements };
}

// Function to get all card prerequisites for a given card
export function getCardPrerequisites(cardName) {
    const card = cardDetails[cardName];
    if (!card || !card.requirements) return [];
    
    const { cardPrerequisites } = parseCardRequirements(card.requirements);
    return cardPrerequisites;
}

// Function to get all other requirements for a given card
export function getOtherRequirements(cardName) {
    const card = cardDetails[cardName];
    if (!card || !card.requirements) return [];
    
    const { otherRequirements } = parseCardRequirements(card.requirements);
    return otherRequirements;
}

// Function to check if a card is available (prerequisites met)
export function isCardAvailable(cardName, selectedCards) {
    const prerequisites = getCardPrerequisites(cardName);
    
    if (prerequisites.length === 0) {
        return true; // No prerequisites, always available
    }
    
    // Check if any prerequisites are met (OR logic)
    // This handles cases like "Undercover Mission or The Mole" - either one satisfies the requirement
    return prerequisites.some(prereq => selectedCards.includes(prereq));
}

// Function to get all cards that are currently locked (prerequisites not met)
export function getLockedCards(selectedCards) {
    return allCards.filter(card => !isCardAvailable(card, selectedCards));
}

// Function to get all cards that are currently available (prerequisites met)
export function getAvailableCards(selectedCards) {
    return allCards.filter(card => isCardAvailable(card, selectedCards));
}
