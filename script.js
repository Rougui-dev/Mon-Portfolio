// Gestion du formulaire de contact
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupérer les valeurs
  const nom = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  // Afficher un message dans la console
  console.log("Nom :", nom);
  console.log("Email :", email);
  console.log("Message :", message);

  alert("Merci pour votre message !");

  form.reset(); // vider le formulaire
});

// Scroll fluide automatique (déjà activé par scroll-behavior: smooth dans CSS)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
