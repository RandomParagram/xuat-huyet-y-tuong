window.onload = function() {
  main();
}

function main(argc=0,argv=[]){
}//this exist for fun, or is it?

function getUserData(){
	const info={
		"id":Math.floor( Math.random()*999999999),
		"name":document.getElementById("name").value,
		"email":document.getElementById("email").value
	};
	console.log(JSON.stringify(info))
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}
function openForm() {
  document.getElementById("form").style.display = "block";
}

const form = document.querySelector('form');
form.addEventListener('submit', (e => {
e.preventDefault();
}))