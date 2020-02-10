var myNav = document.getElementById('mynav')
window.onscroll = function () {
  var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (bodyScrollTop >= 50) {
    myNav.classList.add('nav-colored')
    myNav.classList.remove('nav-transparent')
  } else {
    myNav.classList.add('nav-transparent')
    myNav.classList.remove('nav-colored')
  }
}
