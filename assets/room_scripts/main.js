var running = false;
var roomASCII = `
		 ██▀███   ▒█████   ▒█████   ███▄ ▄███▓
		▓██ ▒ ██▒▒██▒  ██▒▒██▒  ██▒▓██▒▀█▀ ██▒
		▓██ ░▄█ ▒▒██░  ██▒▒██░  ██▒▓██    ▓██░
		▒██▀▀█▄  ▒██   ██░▒██   ██░▒██    ▒██ 
		░██▓ ▒██▒░ ████▓▒░░ ████▓▒░▒██▒   ░██▒
		░ ▒▓ ░▒▓░░ ▒░▒░▒░ ░ ▒░▒░▒░ ░ ▒░   ░  ░
		  ░▒ ░ ▒░  ░ ▒ ▒░   ░ ▒ ▒░ ░  ░      ░
		  ░░   ░ ░ ░ ░ ▒  ░ ░ ░ ▒  ░      ░   
		   ░         ░ ░      ░ ░         ░   

		Press Enter to start
`


window.onload = () => { // Execute after HTML is loaded
	if(!instructionsShowed) resetAll();
	let choiceInput = document.getElementById("choiceInput");
	
	// Function to check if enter was pressed
	choiceInput.addEventListener("keypress", (e) => {
		if(e.which==13) // Enter key
			readInput();
	});
}


const readInput = async (prompt) => {
	if(showingText) return document.getElementById("choiceInput").value = "";


	if(!running) { // Game is not running
		document.getElementById("choiceInput").value = "";
		if(!instructionsShowed) { // Show instructions
			await showInstructions();
			return await anythingToContinue(); // Wait for enter
		}

		// Start
		clearConsole();
		await showStart();

		// Start game
		running = true;
		return;
	}

	// clearConsole();
	let choiceInput = document.getElementById("choiceInput").value;
	document.getElementById("contentTextArea").value += `[>] ${choiceInput}\n`
	if(running) await main(choiceInput);
}


async function main(choice) {
	document.getElementById("choiceInput").value = "";
	choice = checkAction(choice)

	// Eye
	// Other actions, same result
	if(stringContains(choice, [ "touchEye", "attackEye" ])) {
		await checkEye();
	}
	else if(choice == "attackCube") { // Cube
		await touchCube();

	} else if(choice == "check") { // Only check is the same as look around
		await checkAround();
	} else {
		let action = callByName(choice); // Execute funciton by name
		if(!action) { // Action don't exist (Or > anything to continue)
			await impossibleAction();
			return;
		}
	}
}
