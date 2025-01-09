// Importer la classe Character
import Character from './Character.js';

// Classe Monk (hérite de Character)
class Monk extends Character {
  constructor(name) {
    super(name, 8, 2, 200); // HP: 8, DMG: 2, MANA: 200
  }

  // Attaque spéciale : Heal
  specialAttack() {
    if (this.mana >= 25) {
      console.log(`${this.name} utilise Heal et regagne 8 points de vie.`);
      this.mana -= 25;
      this.hp += 8;
      console.log(`${this.name} a maintenant ${this.hp} points de vie et ${this.mana} mana.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Heal.`);
    }
  }
}

// Export de la classe Monk pour l'utiliser dans d'autres fichiers
export default Monk;
