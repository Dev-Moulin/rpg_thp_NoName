// Importer la classe Character
import Character from './Character.js';

// Classe Assassin (hérite de Character)
class Assassin extends Character {
  constructor(name) {
    super(name, 6, 6, 20); // HP: 6, DMG: 6, MANA: 20
  }

  // Attaque spéciale : Shadow Hit
  specialAttack(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} utilise Shadow Hit sur ${victim.name}. Il inflige 7 dégâts et ne recevra pas de dégâts lors du prochain tour.`);
      this.mana -= 20;
      victim.takeDamage(7);

      if (victim.hp > 0) {
        console.log(`${victim.name} survit. Cependant, ${this.name} subira une pénalité de 7 points de vie.`);
        this.takeDamage(7);
      }

    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Shadow Hit.`);
    }
  }
}

// Export de la classe Assassin pour l'utiliser dans d'autres fichiers
export default Assassin;
