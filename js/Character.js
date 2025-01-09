// Classe de base pour tous les personnages
class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name; // Nom du personnage
    this.hp = hp; // Points de vie (health points)
    this.dmg = dmg; // Points de dégâts infligés par attaque normale
    this.mana = mana; // Points de mana pour les attaques spéciales
    this.status = "playing"; // Statut du personnage ("playing", "winner", ou "loser")
  }

  // Méthode pour infliger des dégâts à un autre personnage
  dealDamage(victim) {
    if (this.status !== "playing" || victim.status !== "playing") {
      console.log(`${this.name} ou ${victim.name} ne peut pas attaquer car ils sont éliminés.`);
      return;
    }

    console.log(`${this.name} attaque ${victim.name} et inflige ${this.dmg} points de dégâts.`);
    victim.takeDamage(this.dmg);
  }

  // Méthode pour recevoir des dégâts
  takeDamage(damage) {
    this.hp -= damage;
    console.log(`${this.name} reçoit ${damage} dégâts. Il lui reste ${this.hp} points de vie.`);

    if (this.hp <= 0) {
      this.hp = 0; // Empêche les points de vie négatifs
      this.status = "loser"; // Change le statut à "loser"
      console.log(`${this.name} est éliminé !`);
    }
  }

  // Méthode pour vérifier l'état du personnage
  watchStats() {
    console.log(`--- Stats de ${this.name} ---`);
    console.log(`HP: ${this.hp}`);
    console.log(`DMG: ${this.dmg}`);
    console.log(`MANA: ${this.mana}`);
    console.log(`Status: ${this.status}`);
  }

  // TODO: Ajouter des validations supplémentaires
  // - Vérifier si un personnage a suffisamment de points de vie avant d'attaquer.
  // - Empêcher une attaque si le statut du personnage est "loser".

  // TODO: Améliorer les logs pour plus de clarté
  // - Inclure un résumé clair de chaque tour ou action, comme "Tour 1 : Grace attaque Moana".

  // TODO: Ajouter des méthodes utilitaires
  // - Une méthode isAlive() pour vérifier si un personnage est encore en jeu.

  // TODO: Tester davantage de scénarios
  // - Tester le cas où un personnage perd tous ses points de vie.
  // - Vérifier si les dégâts s'arrêtent correctement une fois qu'un personnage est éliminé.
}

// Export de la classe Character pour l'utiliser dans d'autres fichiers
export default Character;
