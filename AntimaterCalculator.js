class Glyph {
  constructor() {
    this.effects = [];
    this.step()
  }
  // COMMON
  step() {
    this.getStats();
    this.showGlyph();
    this.hideEffects();
    this.calculateEffects();
    this.showEffects();
  }
  capitalizeType() {
    return this.type.charAt(0).toUpperCase() + this.type.slice(1);
  }
  capitalizeRarityLabel() {
    return this.rarityLabel.charAt(0).toUpperCase() + this.rarityLabel.slice(1);
  }
  greenNumber(number, aprox){
    return '<div class="green">' + number.toFixed(aprox) + '</div>';
  }
  // STATS
  getStats() {
    this.type = document.getElementById("CalculatorInputGlyphType").value;
    this.level = document.getElementById("CalculatorInputGlyphLevel").value;
    this.rarity = document.getElementById("CalculatorInputRarityNumber").value;
    this.strength = (this.rarity / 40) + 1;
    this.sacrificePower = 1000;
    this.sacrificeBoost = Math.log10(Math.max(Math.min(this.sacrificePower, 1e100)/1e60, 1)) / 2;
    this.getRarityLabel();
  }
  getGlyphSymbol() {
    var GlyphSelects = document.getElementById("CalculatorInputGlyphType").children;
    for (var i=0; i<GlyphSelects.length; i++){
      if(GlyphSelects[i].value == this.type){
        var GlyphSymbol = GlyphSelects[i].innerText.split(" ")[1];
        return GlyphSymbol;
      }
    }
  }
  getRarityLabel() {
    this.rarityLabel = "celestial";
    if (this.rarity < 100) {
      this.rarityLabel = "transcendent";
    }
    if (this.rarity < 90) {
      this.rarityLabel = "mythical";
    }
    if (this.rarity < 80) {
      this.rarityLabel = "legendary";
    }
    if (this.rarity < 70) {
      this.rarityLabel = "epic";
    }
    if (this.rarity < 60) {
      this.rarityLabel = "rare";
    }
    if (this.rarity < 40) {
      this.rarityLabel = "uncommon";
    }
    if (this.rarity < 20) {
      this.rarityLabel = "common";
    }
  }
  // MATH
  // POWER
  getADPower() {
    var Calc = 0.015 + ((Math.pow(this.level, 0.2) * Math.pow(this.strength, 0.4)) / 75);
    this.effects.push("Antimatter Dimension power +"+this.greenNumber(Calc, 3));
  }
  getDimboostMult() {
    var Calc = Math.pow(this.level * this.strength, 0.5) * Math.pow(1 + this.sacrificeBoost, 3);
    this.effects.push("Dimension Boost multiplier ×"+this.greenNumber(Calc, 2));
  }
  getADMult() {
    var Calc = Math.pow(this.level * this.strength * 10, this.level * this.strength * 10);
    this.effects.push("Antimatter Dimension Multipliers x"+this.greenNumber(Calc, 2));
  }
  getBuy10Mult() {
    var Calc = 1 + (this.level * this.strength) / 12;
    this.effects.push("Increase the bonus from buying 10 Antimatter Dimensions by "+this.greenNumber(Calc, 2));
  }
  // INFINITY
  getIDPower() {
    var Calc = 0.007 + (Math.pow(this.level, 0.21) * Math.pow(this.strength, 0.4)) / 75 + (this.sacrificeBoost / 50);
    this.effects.push("Infinity Dimension power +"+this.greenNumber(Calc, 3));
  }
  getInfinityPowerConversion() {
    var Calc = (Math.pow(this.level, 0.2) * Math.pow(this.strength, 0.04)) / 25;
    this.effects.push("Infinity Power conversion rate +"+this.greenNumber(Calc, 3));
  }
  getMultInfinityPointGain() {
    var Calc = Math.pow(this.level * (this.strength + 1), 6) * 10000;
    this.effects.push("Multiply Infinity Point Gain by "+this.greenNumber(Calc, 3));
  }
  getMultInfinityGain() {
    var Calc = Math.pow(this.level * this.strength, 1.5) * 2;
    this.effects.push("Multiply Infinity gain by "+this.greenNumber(Calc, 1));
  }
  // REPLICATION
  getMultiplyReplicationSpeed() {
    var Calc = this.level * this.strength * 3;
    this.effects.push("Multiply Replication Speed by "+this.greenNumber(Calc, 1));
  }
  getReplicantiMultPower() {
    var Calc = 0.1 + Math.pow(this.level, 0.5) + (this.strength / 25) + 3 * this.sacrificeBoost;
    this.effects.push("Replicanti multiplier power +"+this.greenNumber(Calc, 3));
  }
  getMultDilatedTime() {
    var Calc = 3 * Math.pow(this.level, 0.3) * Math.pow(this.strength, 0.65);
    this.effects.push("Multiply Dilated Time gain by +"+this.greenNumber(Calc, 3));
  }
  getReplicantiFactor() {
    var Calc = (Math.pow(this.level, 0.125) * Math.pow(this.strength, 0.2)) / 50;
    this.effects.push("Replicanti factor for Glyph level: ^0.4 ➜ ^(0.4 + "+this.greenNumber(Calc, 3)+")");
  }
  // TIME
  getTimeDimPower() {
    var Calc = 0.01 + (Math.pow(this.level, 0.32) * Math.pow(this.strength, 0.45)) / 75;
    this.effects.push("Time Dimension power +"+this.greenNumber(Calc, 3));
  }
  getMultGameSpeed() {
    var Calc = 1 + (Math.pow(this.level, 0.3) * Math.pow(this.strength, 0.65)) / 20;
    this.effects.push("Multiply game speed by "+this.greenNumber(Calc, 3));
  }
  getMultEternityGain() {
    var Calc = Math.pow((3 + this.strength) * this.level, 0.9) * Math.pow(3, this.sacrificeBoost);
    this.effects.push("Multiply Eternity Gain by "+this.greenNumber(Calc, 2));
  }
  getMultEternityPointGain() {
    var Calc = 100 * Math.pow(this.level * this.strength, 3);
    this.effects.push("Raise Eternity Point Gain by "+this.greenNumber(Calc, 3));
  }
  // DILATION
  getMultDilatedTimeGain() {
    var Calc = 2 * Math.pow(this.level * this.strength, 1.5);
    this.effects.push("Multiply Dilated Time Gain by "+this.greenNumber(Calc, 3));
  }
  getTachyonGalaxyMult() {
    var Calc = 1 - ((Math.pow(this.level, 0.17) * Math.pow(this.strength, 0.35)) / 100) - (this.sacrificeBoost / 50);
    this.effects.push("Tachyon Galaxy Threshold multiplier x"+this.greenNumber(Calc, 3));
  }
  getGenerateTimeTheorems() {
    var Calc = (Math.pow(this.level * this.strength, 0.5) / 10000) * 3600;
    this.effects.push("Generate "+this.greenNumber(Calc, 3)+" Time Theorems per hour");
  }
  getAntimatterDimensionsDilated() {
    var Calc = 0.1 + (Math.pow(this.level, 0.7) * Math.pow(this.strength, 0.7)) / 25;
    this.effects.push("Antimatter Dimensions power +"+this.greenNumber(Calc, 2)+" while Dilated");
  }
  // EFFARIG
  // CURSED
  // REALITY
  // COMPANION
  getCompanionSmile() {
    this.effects.push("It does nothing but sit there and cutely smile at you, whisper into your dreams politely, and plot the demise of all who stand against you. This one-of-a-kind Glyph will never leave you.");
  }
  getCompanionThankYou() {
    this.effects.push("Thanks for your dedication for the game! You reached X Eternity Points on your first Reality.");
  }
  // MATH ROUTER
  calculateEffects() {
    this.effects = []
    if (this.type == "power") {
      this.getADPower();
      this.getDimboostMult();
      // this.getADMult();
      this.getBuy10Mult();
    } else if (this.type == "infinity") {
      this.getIDPower();
      this.getInfinityPowerConversion();
      this.getMultInfinityPointGain();
      this.getMultInfinityGain();
    } else if (this.type == "replication") {
      this.getMultiplyReplicationSpeed();
      this.getReplicantiMultPower();
      this.getMultDilatedTime();
      this.getReplicantiFactor();
    } else if (this.type == "time") {
      this.getTimeDimPower();
      this.getMultGameSpeed();
      this.getMultEternityGain();
      this.getMultEternityPointGain();
    } else if (this.type == "dilation") {
      this.getMultDilatedTimeGain();
      this.getTachyonGalaxyMult();
      this.getGenerateTimeTheorems();
      this.getAntimatterDimensionsDilated();
    } else if (this.type == "effarig") {
    } else if (this.type == "cursed") {
    } else if (this.type == "reality") {
    } else if (this.type == "companion") {
      this.getCompanionSmile();
      this.getCompanionThankYou();
    }
  }
  // DISPLAY  
  showGlyph() {
    var CalculatorResultGlyphType = document.getElementById("CalculatorResultGlyphType");
    CalculatorResultGlyphType.innerText = this.capitalizeType();
    CalculatorResultGlyphType.style.color = "var(--"+this.type+"-color)";
    
    var CalculatorResultGlyphLevel = document.getElementById("CalculatorResultGlyphLevel");
    CalculatorResultGlyphLevel.innerText = this.level;
  
    var CalculatorResultGlyphIcon = document.getElementById("CalculatorResultGlyphIcon");
    CalculatorResultGlyphIcon.innerText = this.getGlyphSymbol();
    CalculatorResultGlyphIcon.style.color = "var(--"+this.rarityLabel+"-color)";
  
    var CalculatorResultGlyphRarity = document.getElementById("CalculatorResultGlyphRarity");
    CalculatorResultGlyphRarity.innerText = this.rarity + "%";
    CalculatorResultGlyphRarity.style.color = "var(--"+this.rarityLabel+"-color)";
    
    var CalculatorResultGlyphFullTitle = document.getElementById("CalculatorResultGlyphFullTitle");
    CalculatorResultGlyphFullTitle.innerHTML = this.capitalizeRarityLabel() + " Glyph of " + this.capitalizeType();
    CalculatorResultGlyphFullTitle.style.color = "var(--"+this.rarityLabel+"-color)";
  }
  hideEffects() {
    var EffectList = document.getElementById("CalculatorResultEffectList");
    EffectList.innerHTML = "";
  }
  showEffects() {
    for (var i=0; i<this.effects.length; i++){
      var effectDiv = document.createElement("div"); 
      effectDiv.className = "CalculatorGlyphEffect";
      effectDiv.innerHTML = this.effects[i];
      var EffectList = document.getElementById("CalculatorResultEffectList");
      EffectList.appendChild(effectDiv);
    }
  }
}
glyph = new Glyph()

function GlyphUpdate() {
  glyph.step()
}

CalculatorInputGlyphType = document.getElementById("CalculatorInputGlyphType")
selectTypes = CalculatorInputGlyphType.children
for (var i=0; i<selectTypes.length; i++){
  selectTypes[i].style.color = "var(--"+selectTypes[i].value+"-color)";
}
CalculatorInputGlyphType.style.color = "var(--"+CalculatorInputGlyphType.value+"-color)";
CalculatorInputGlyphType.addEventListener("change", (event) => {
  CalculatorInputGlyphType.style.color = "var(--"+CalculatorInputGlyphType.value+"-color)";
});