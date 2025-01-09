// Importer la classe Character
import Character from './Character.js';

// Classe Fighter (hérite de Character)
class Fighter extends Character {
  constructor(name) {
    super(name, 12, 4, 40); // HP: 12, DMG: 4, MANA: 40
  }

  // Attaque spéciale : Dark Vision
  specialAttack(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} utilise Dark Vision sur ${victim.name}, inflige 5 dégâts et prendra 2 dégâts de moins au prochain tour.`);
      this.mana -= 20;
      victim.takeDamage(5);
      // TODO: Implémenter la réduction des dégâts reçus au prochain tour
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Dark Vision.`);
    }
  }
}

// Export de la classe Fighter pour l'utiliser dans d'autres fichiers
export default Fighter;
