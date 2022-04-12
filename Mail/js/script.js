// Creare lista email
const emailList = [
	"pippirippi@gmail.com",
	"allabella@gmail.com",
	"montimer@gmail.com",
	"terello88@yahoo.net",
	"lollolo@rido.io",
];
// Chiedi all’utente la sua email
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
	const userEmail = document.getElementById("user-email").value;
	console.log(userEmail);
	// controlla che sia nella lista di chi può accedere
	let emailMatch = false;
	for (let i = 0; i < emailList.length; i++) {
		const validEmail = emailList[i];
		if (validEmail === userEmail) {
			emailMatch = true;
		}
		console.log(emailMatch);
	}
	// stampa un messaggio appropriato sull’esito del controllo
	const output = document.createElement("div");
	if (emailMatch === true) {
		output.innerHTML = "Accesso effettuato";
	} else {
		output.innerHTML = "Accesso negato";
	}
	document.getElementById("outcome").appendChild(output);
});
