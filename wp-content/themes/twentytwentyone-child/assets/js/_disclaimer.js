// Pop-up d'avertissement : projet fictif scolaire.
// Affichée à l'ouverture du site, une seule fois par session de navigation.
(function () {
  var KEY = "disclaimerSeen";

  // Déjà vue pendant cette session ? On ne l'affiche pas à nouveau.
  try {
    if (sessionStorage.getItem(KEY)) return;
  } catch (e) {
    // sessionStorage indisponible : on affiche la pop-up quand même.
  }

  var overlay = document.createElement("div");
  overlay.className = "disclaimer-overlay";
  overlay.innerHTML =
    '<div class="disclaimer-modal" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">' +
    '<h2 class="disclaimer-modal__title" id="disclaimer-title">Information importante</h2>' +
    '<p class="disclaimer-modal__text">Il s’agit d’un projet fictif scolaire et en aucun cas un plagiat ou en lien avec le véritable événement Rock en Seine.</p>' +
    '<button type="button" class="disclaimer-modal__btn">J’ai compris</button>' +
    "</div>";

  var btn = overlay.querySelector("button");

  function close() {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {}
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  btn.addEventListener("click", close);
  document.addEventListener("keydown", onKey);

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden"; // bloque le scroll derrière la pop-up
  btn.focus();
})();
