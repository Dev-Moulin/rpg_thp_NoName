// Importer la classe Character
import Character from './Character.js';

// Classe Paladin (hérite de Character)
class Paladin extends Character {
  constructor(name) {
    super(name, 16, 3, 160); // HP: 16, DMG: 3, MANA: 160
  }

  // Attaque spéciale : Healing Lighting
  specialAttack(victim) {
    if (this.mana >= 40) {
      console.log(`${this.name} utilise Healing Lighting sur ${victim.name}, inflige 4 dégâts et se soigne de 5 points.`);
      this.mana -= 40;
      victim.takeDamage(4);
      this.hp += 5; // Soigne le Paladin
      console.log(`${this.name} regagne 5 points de vie. Il a maintenant ${this.hp} HP.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Healing Lighting.`);
    }
  }
}

// Export de la classe Paladin pour l'utiliser dans d'autres fichiers
export default Paladin;
