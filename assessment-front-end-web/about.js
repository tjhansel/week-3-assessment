console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Your request has been submitted.\nThank you!");
}

function imgOver(evt){
	evt.preventDefault();
	alert("You found a secret!\nYou are so clever.")
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let imgCat = document.querySelector(`img`);
imgCat.addEventListener(`mouseover`,imgOver);