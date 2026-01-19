// Date de la retraite de Didier : 1er avril 2027 à minuit (oui, c'est vraiment le 1er avril !)
const RETIREMENT_DATE = new Date('2027-04-01T00:00:00');

// Éléments du DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const jokeEl = document.getElementById('joke');

/**
 * Met à jour le compte à rebours
 */
function updateCountdown() {
    const now = new Date();
    const diff = RETIREMENT_DATE - now;
    
    // Si la date est passée
    if (diff <= 0) {
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        jokeEl.textContent = "C'EST AUJOURD'HUI ! Didier est ENFIN à la retraite ! 🎉🥳🏖️";
        document.querySelector('.countdown-label').textContent = "C'est fait !";
        return;
    }
    
    // Calcul des unités de temps
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Mise à jour de l'affichage
    daysEl.textContent = days.toLocaleString('fr-FR');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

/**
 * Affiche une blague aléatoire
 */
function displayRandomJoke() {
    if (typeof jokes !== 'undefined' && jokes.length > 0) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeEl.textContent = jokes[randomIndex];
    } else {
        jokeEl.textContent = "Les blagues sont en vacances (comme Didier bientôt).";
    }
}

/**
 * Initialisation
 */
function init() {
    // Afficher une blague aléatoire
    displayRandomJoke();
    
    // Démarrer le compte à rebours
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
}

// Lancer l'initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', init);
