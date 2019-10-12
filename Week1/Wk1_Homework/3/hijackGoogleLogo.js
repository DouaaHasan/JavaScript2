"use strict";

(function hijackGoogleLogo() {
  // hyf logo
  const hyfLogoURL = "https://www.hackyourfuture.dk/static/logo-dark.svg";

  // Find out how to select the element that contains the Google logo, and store it in a variable
  let pageLogo = document.getElementById("logo-non-white");

  // Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
  pageLogo.src = hyfLogoURL;
})();
