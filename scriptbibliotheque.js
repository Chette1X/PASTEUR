function notifierCommande() {
  // Afficher le message de confirmation
  const confirmation = document.getElementById("confirmation-message");
  confirmation.style.display = "block";

  // Redirection vers WhatsApp après une petite attente
  setTimeout(() => {
      window.open("https://wa.me/2250708161289?text=Je%20souhaite%20commander%20le%20livre%20au%20prix%20de%208000%20F.", "_blank");
  }, 1000);

  // Masquer le message après 5 secondes
  setTimeout(() => {
      confirmation.style.display = "none";
  }, 5000);
}

// Animation au scroll
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
      if (elementInView(el)) {
          displayScrollElement(el);
      }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
