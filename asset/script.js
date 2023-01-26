const toggle = document.getElementsByClassName(`toggle`)
const nav = document.getElementsByClassName(`navbar-links`)[0]
var toggleButton = toggle[0]
console.log(toggle, nav, toggleButton)
toggleButton.addEventListener(`click`, ()=> {
	nav.classList.toggle(`active`)
})