// CHIAMARE BOTTONE
const playBtn = document.getElementById("play-btn");
// ASCOLTARE BOTTONE
playBtn.addEventListener("click", function () {
	// GENERARE PC RANDOM NUMBER
	const pcNumber = Math.floor(Math.random() * (7 - 1) + 1);
	console.log(pcNumber);
	// COMPILARE PC NUMBER
	document.getElementById("pc-number").innerHTML = pcNumber;
	// GENERARE USER RANDOM NUMBER
	const userNumber = Math.floor(Math.random() * (7 - 1) + 1);
	// COMPILARE USER NUMBER
	document.getElementById("user-number").innerHTML = userNumber;
	console.log(userNumber);
	// COMPARARE I NUMERI
	let outcome;
	if (userNumber > pcNumber) {
		outcome = "Hai vinto!";
	} else if (userNumber < pcNumber) {
		outcome = "Hai perso, ritenta!";
	} else {
		outcome = "Pareggio!";
	}
	console.log(outcome);
	//STAMBARE NUMERI E OUTCOME
	document.getElementById("outcome").innerHTML = outcome;
});
