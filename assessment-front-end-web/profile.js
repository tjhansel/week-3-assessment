function colorButton(evt) {
	evt.preventDefault();
	return alert("My favorite color is Green!");
}

function placeButton(evt) {
	evt.preventDefault();
	return alert("My favorite place is my painting lair.");
}

function ritualButton(evt) {
	evt.preventDefault();
	return alert("My favorite ritual is pie making.");
}


let color = document.querySelector('#color');
color.addEventListener('click', colorButton);

let place = document.querySelector('#place');
place.addEventListener('click', placeButton);

let ritual = document.querySelector('#ritual');
ritual.addEventListener('click', ritualButton);