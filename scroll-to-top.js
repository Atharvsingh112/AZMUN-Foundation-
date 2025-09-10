// This script ensures the page always loads at the top (hero section), even if the browser tries to restore scroll
window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});
window.addEventListener('load', function () {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 10);
});
