

function getUserData(){
    const info={
        "id":Math.floor( Math.random()*999999999),
        "name":document.getElementById("name").value,
        "email":document.getElementById("email").value
    };
	if (info.name === "" || info.email===""){
		return console.log("Not enough information")
	}
    console.log(JSON.stringify(info))
}

function formOpening(){
    if ( document.getElementById("form").style.display === "none"){
        openForm();
    }else{
        closeForm();
    }
}

function closeForm() {
    document.getElementById("form").style.display = "none";
}
function openForm() {
    document.getElementById("form").style.display = "block";
}


