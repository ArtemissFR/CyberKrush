document.addEventListener('DOMContentLoaded', function() {
    // Récupère tous les boutons "Voir plus"
    const btnsVoirPlus = document.querySelectorAll('.btn-voir-plus');

    // Pour chaque bouton, ajoutez un gestionnaire d'événements pour afficher/masquer le prix et changer le texte du bouton
    btnsVoirPlus.forEach(btn => {
        btn.addEventListener('click', () => {
            const prixSpan = btn.parentElement.querySelector('.prix');
            // Inverse l'opacité de l'élément de prix
            prixSpan.style.opacity = prixSpan.style.opacity === '1' ? '0' : '1';
            // Change le texte du bouton
            btn.textContent = btn.textContent === 'Afficher Prix' ? 'Cacher Prix' : 'Afficher Prix';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupérer les valeurs saisies par l'utilisateur
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;
        const confirmPassword = document.getElementById('exampleInputPassword2').value;

        // Créer un objet avec les données saisies
        const userData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        // Convertir l'objet en chaîne JSON
        const jsonData = JSON.stringify(userData);

        // Enregistrer les données dans le stockage local du navigateur
        localStorage.setItem('userData', jsonData);

        // Redirection vers la page d'affichage des données
        window.location.href = 'displayData.html';
    });
});
