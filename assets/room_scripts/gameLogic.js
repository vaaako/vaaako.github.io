var showingText = false;
var instructionsShowed = false;
var skip = false

async function showText(message, time=10) {
	let textarea = document.getElementById("contentTextArea");
	showingText = true;

	// textarea.value += message;
	// textarea.scrollTop = textarea.scrollHeight; // Scrol down

	for(let i=0; i<message.length; i++) {
		textarea.value += message[i];

		if(skip) {
			let msg = message.slice(1, message.length);
			textarea.value += msg;
			skip = false;
			showingText = false;
			return;
		}

		textarea.scrollTop = textarea.scrollHeight; // Scrol down
		await new Promise(r => setTimeout(r, time)); // >time<
	}

	showingText = false;
}


// In case page is reloaded
function resetAll() {
	let textarea = document.getElementById("contentTextArea");
	textarea.style="font-family: monospace; font-size: 75%;";
	textarea.value=roomASCII;
}


function clearConsole() {
	let textarea = document.getElementById("contentTextArea");
	textarea.value = "";
}

const anythingToContinue = async () =>	await showText("\n\n[Press enter to continue]");

async function impossibleAction() {
	await showText("[Ação impossível]\n\n")
}

async function printSeparator() {
	let separator = "";
	for(let i=0; i<30; i++)
		separator += '-';

	await showText("\n\n");
	await showText(separator);
	await showText("\n\n\n\n");

}

async function showInstructions() {
	// Remove title
	instructionsShowed = true;
	let textarea = document.getElementById("contentTextArea");
	textarea.value = "";
	textarea.style = "font-family: 'Amiga Forever Pro2', sans-serif; font-size: 16px;";


	await showText(
		"Bem vindo(a) ao Room\n"
		+ "Vou te explicar brevente as regras do jogo.\n\n"
		+ "Room é um text adventure, isso significa que todas as ações serão por texto, use sua imaginação.\n\n"
		+ "Funcionará assim: Eu, o narrador, explicarei sua situação e ao final você decidirá qual ação deseja tomar.\n"
		+ "Digite palavras como: \"Ir para\", \"Tocar no\" etc.\n\n"
		+ "Exemplo: \"Você está de frente para uma criatura que acabou de te fazer questionar sua existência, o que deseja fazer?\"\n"
		+ "[ > ] Quero esmagar a formiga\n\n"
		+ "Resumindo: Seja objetivo para que suas ações sejam bem interpretadas, tente usar \"Verbo\" + \"adjetivo\"\n"
		+ "Dica: Cheque/olhe o objeto antes de interagir com ele\n"
		+ "Recomendo jogar de uma vez só, tendo em vista que não tem função de salvar progresso.\n"
		+ "USE VERBOS NO INFINITIVO. Exemplo: \"bato\" vira \"bater\""
		+ "Lembre-se de escrever apenas UMA ação por vez e de que você pode e deve sempre olhar em volta. Bom jogo.\n\n"
	,5);
}


function stringContains(inputStr, items) {
	inputStr = inputStr.toLowerCase();
	if(items.some(v => inputStr.includes(v))) return true;
	return false;
}


// [[[], [], []], [[], [], []]]
function checkAction(toCheck) {
	const allTypesArray = [
		// Action Types
		[
			/* Check */  [ "check", "andar", "aproximar", "checar", "chegar", "examinar", "ir ao", "ir ate", "ir até", "ir para", "observar", "olhar", "vasculhar", "ver" ],
			/* Touch */  [ "touch", "descobrir", "determinar", "examinar", "mexer", "tocar" ],
			/* Attack */ [ "attack", "acabar", "bater", "chutar", "destruir", "esmagar", "matar", "multilar", "pisar", "socar", "soco", "atacar" ],
			/* Use */    [ "use", "abrir", "arremessar", "atravessar", "colocar", "entrar", "jogar", "pegar", "por", "segurar", "utilizar", "usar", "passar", "sair" ],
			/* Eat */    [ "eat", "comer", "botar na boca"]
		],

		[
			/* Eye */    [ "eye", "direita", "olho"  ],
			/* Cube */   [ "cube", "asbismo", "atras", "atrás", "costas", "cubo", "escuridão", "escuro", "quadrado", "void", "preto" ],
			/* Snail */  [ "snail", "animal", "caracol", "caramujo", "criatura", "esquerda", "eu", "ser", "snail", "mim" ],
			/* Door */   [ "door", "entrada", "frente", "passagem", "saida", "saída", "porta" ],
			/* Up */     [ "up", "acima", "cima", "lâmpada" ],
			/* Around */ [ "around", "ao redor", "em volta", "sala", "todas", "tudo" ],
			/* Key */    [ "key", "chave", "objeto de abrir portas"],
			/* Down */   [ "down", "chão", "baixo"]
		]
	];

	toCheck = toCheck.toLowerCase();
	var actionType = "";
	for (let i=0; i<allTypesArray[0].length; i++) { // Check each array of types
		if(stringContains(toCheck, allTypesArray[0][i])) { // If is a match
			actionType = allTypesArray[0][i][0]; // Return first item of matched array (First item is the array type)
			break;
		}
	}

	var toWhat = "";
	for (let i=0; i<allTypesArray[1].length; i++) {
		if(stringContains(toCheck, allTypesArray[1][i])) {
			toWhat = allTypesArray[1][i][0];
			break;
		}
	}

	if(toWhat.length>0) // String is not empty
		toWhat = toWhat.charAt(0).toUpperCase() + toWhat.toLowerCase().slice(1); // First letter to upper case

	// return actionType + "-" + toWhat;
	return actionType + toWhat;
}





	// waitSeconds: (int time) => {
	// 	try {
	// 		TimeUnit.SECONDS.sleep(time);
	// 	} catch(InterruptedException e) {
	// 		System.out.println(e);
	// 	}
	// },

	// shutdownComputer: () => {
	// 	return;
	// 	// try {
	// 	// 	String shutdownCommand;
	// 	// 	String operatingSystem = System.getProperty("os.name");

	// 	// 	if ("Linux".equals(operatingSystem) || "Mac OS X".equals(operatingSystem)) {
	// 	// 		shutdownCommand = "shutdown -h now";
	// 	// 	} else if (operatingSystem.contains("Windows")) { // This will work on any version of windows including version 11 
	// 	// 		shutdownCommand = "shutdown.exe -s -t 0";
	// 	// 	} else {
	// 	// 		throw new RuntimeException("Unsupported operating system.");
	// 	// 	}

	// 	// 	Runtime.getRuntime().exec(shutdownCommand);
	// 	// 	System.exit(0);
	// 	// } catch(RuntimeException | IOException e) {

	// 	// 	System.out.println(e);
	// 	// }
	// }
