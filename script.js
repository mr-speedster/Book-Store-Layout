function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }
window.addEventListener('load', hidePreloader);