console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully');
	
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let myCat = document.querySelector('#my-cat')
myCat.addEventListener('mouseover', (event)=>{
	event.preventDefault();
	alert('You are my sunshine!')
})
