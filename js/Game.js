// Importer les classes des personnages
import Fighter from './Fighter.js';
import Paladin from './Paladin.js';
import Monk from './Monk.js';
import Berzerker from './Berzerker.js';
import Assassin from './Assassin.js';

// Classe Game
class Game {
  constructor() {
    this.turnLeft = 10; // Nombre de tours restants
    this.players = [
      new Fighter("Grace est une non genré!"),
      new Paladin("Ulder"),
      new Monk("Moana est une barbapapa"),
      new Berzerker("Draven"),
      new Assassin("Carl s'appelle roberta"),
    ];
  }



  // Lancer le jeu
  startGame() {
    console.log('--- Début du jeu ---');
    while (this.turnLeft > 0 && this.players.filter(p => p.status === "playing").length > 1) {
      this.startTurn();
      this.skipTurn();
    }
    this.checkWinner();
  }

  // Démarrer un tour
  startTurn() {
    console.log(`--- Tour restant : ${this.turnLeft} ---`);

    // Mélanger les joueurs pour un ordre aléatoire
    this.players = this.players.sort(() => Math.random() - 0.5); 

    // Chaque joueur joue à son tour
    for (const player of this.players) {
      if (player.status === "playing") {
        console.log(`C'est au tour de ${player.name} de jouer.`);
        const targets = this.players.filter(p => p.status === "playing" && p !== player);

        if (targets.length > 0) {
          const target = targets[Math.floor(Math.random() * targets.length)];
          player.dealDamage(target);
        }
      }
    }
  }

  // Réduire le nombre de tours restants
  skipTurn() {
    this.turnLeft--;
  }

  // Vérifier les statistiques
  watchStats() {
    console.log('--- Statistiques des joueurs ---');
    this.players.forEach(player => player.watchStats());
  }

  // Vérifier les gagnants
  checkWinner() {
    const winners = this.players.filter(p => p.status === "playing");
    if (winners.length === 1) {
      console.log(`${winners[0].name} est le gagnant !`);
    } else if (winners.length > 1) {
      console.log("Le jeu se termine avec plusieurs survivants :");
      winners.forEach(w => console.log(w.name));
    } else {
      console.log("Personne n'a survécu. Match nul !");
    }
  }
}

// Export de la classe Game pour utilisation
export default Game;
