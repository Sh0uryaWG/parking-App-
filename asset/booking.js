const map = document.getElementsByClassName(`photo`)[0];
console.log(map);
const pointer = document.getElementsByClassName(`pointer`)[0];
var boi = "default-img";
const hospital = `hospital`
map.src = `../asset/${boi}.jpg`
const endDestination = document.getElementsByClassName(`destination`)[0];
console.log(boi, endDestination)
let height = window.innerHeight;
let width = window.innerWidth;


let pointerList = []

function pointerCreation() {
	// body...
	pointerList.map(e =>{
		e.remove()
	})
	let x = Math.floor((Math.random() * 4) + 1);
	for (var i = x- 1; i >= 0; i--) {
		const newPointer = document.createElement("img");
		newPointer.src = `../asset/placeholder.png`;
		newPointer.className = `pointer`
		document.getElementsByClassName(`body`)[0].appendChild(newPointer) ;
		let randomPosX = Math.floor((Math.random() * 500) + 1);
		let randomPosY = Math.floor((Math.random() * 500) + 1);
		let pointerPosX = width - newPointer.offsetHeight - randomPosX
		let pointerPosY = height - newPointer.offsetHeight - randomPosY
		// console.log(x, height, width,newPointer.offsetHeight, `pointerpos:${pointerPosX}`)
		newPointer.style.left = `${pointerPosX}px`
		newPointer.style.top = `${pointerPosY}px`
		newPointer.style.display = `block`
		pointerList.push(newPointer)
		console.log(pointerList)
	}
}
const searchBar = document.getElementsByClassName(`search`)[0]
searchBar.addEventListener(`click`, pointerCreation)

function searching(argument) {
	if (endDestination.value == "iimt") {
		console.log(`iimt`)
		map.src = `../asset/default-img.jpg`
		pointerList.map(e =>{
		e.remove()
	})
	} 
	if (endDestination.value == `hospital`) {
		console.log(`hosptal`)
		map.src = `../asset/${hospital}.jpg`
		pointerList.map(e =>{
		e.remove()
	})
	}
	if (endDestination.value == `v3s`) {
		map.src = 	`../asset/v3s.jpg`;
		pointerList.map(e =>{
		e.remove()
	})
	}
	if (endDestination.value == `pacific mall`) {
		map.src = 	`../asset/pacific.jpg`;
		pointerList.map(e =>{
		e.remove()
	})
	}
	
}
endDestination.addEventListener(`input`, searching)
const costDisplay = document.getElementsByClassName(`cost`)[0]; 
function cost(argument) {
	// body...
	document.getElementsByClassName(`payment`)[0].style.backgroundImage = `linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)`;
	document.getElementsByClassName(`payment`)[0].style.pointerEvents = `auto`;
	
	if (argument == 1) {
		costDisplay.innerHTML = `₹20`
	} else if (argument === 2) {
		costDisplay.innerHTML = `₹50`

	} else if (argument === 3) {
		costDisplay.innerHTML = `₹150`

	} else {costDisplay.value = 0}
	console.log(costDisplay.value, argument)
}