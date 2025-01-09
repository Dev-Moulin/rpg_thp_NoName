// Importer la classe Character
import Character from './Character.js';

// Classe Berzerker (hérite de Character)
class Berzerker extends Character {
  constructor(name) {
    super(name, 8, 4, 0); // HP: 8, DMG: 4, MANA: 0
  }

  // Attaque spéciale : Rage
  specialAttack() {
    console.log(`${this.name} utilise Rage, augmente ses dégâts de 1 et perd 1 point de vie.`);
    this.dmg += 1; // Augmente les dégâts
    this.hp -= 1; // Réduit les points de vie

    if (this.hp <= 0) {
      this.hp = 0;
      this.status = "loser"; // Met à jour le statut si le Berzerker se tue avec Rage
      console.log(`${this.name} s'est tué en utilisant Rage !`);
    } else {
      console.log(`${this.name} a maintenant ${this.hp} HP et ${this.dmg} DMG.`);
    }
  }
}

// Export de la classe Berzerker pour l'utiliser dans d'autres fichiers
export default Berzerker;
