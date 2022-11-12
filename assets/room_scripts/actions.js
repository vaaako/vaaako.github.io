var doorIsOpen = false;
var haveKey = false;
var keyNearEye = false;
var snailIsSmashed = false;

// To make true final
var doorFinal = false;
var cubeFinal = false;
var lookedUp  = false;


function callByName(functionName) {
	let func = window[functionName]; // async Function
	if(!func) return; false// Dont' exist
	return func.apply(window); // Execute async function
}



async function showStart() {
	await showText("Escuridão.\nDe repente.. ", 300);
	await showText(
		"Uma sala, você está no centro dela, uma sala não muito grande, mas também não muito pequena, com aproximadamente três passos para cada direção.\n"
		+ "Você não possui memórias de nada\n"
		+ "Totalmente branca com uma iluminação precaria de uma lâmpada com mal funcionamento, que pisca em um intervalo de tempo não determinado.\n"
		+ "Parece que a qualquer momento a lâmpada vai apagar e deixar a sala em completa escuridão.\n"
		+ "Você tenta falar algo, mas sua boca se movimenta sem fazer barulho.\n\n"
	,30);

	await showText(
		"Essa sala é tão silenciosa que o único barulho que você escuta é de um caracol à sua esquerda, que parece ter vindo da porta à sua frente.\n"
		+ "Uma porta de metal azulado, a porta possui três pequenas janelas retangulares em coluna, janelas que levam a lugar nenhum, uma escuridão abisal.\n"

		+ "O caracol está de costas para essa porta, como se tivesse saido de lá, como se tivesse passado por ela e se movimentado um pouco, em direção ao objeto escuro, atrás de você.\n"
		+ "Um vazio em forma de quadrado no encontro da parede e do chão, totalmente escuro, de mais ou menos 30cm², ele não retorna luz então você não sabe dizer se é um buraco, um quadrado ou um cubo, pois você não tem um ponto de referência, uma sombra, reflexão ou qualquer outra coisa que faça seu cérebro assimilar a forma daquele objeto.\n"
		+ "As janelas da porta parecem ter sido cobertas por esse objeto.\n\n"

		+ "O caracol é tão lento que parece estar parado, você só acha que ele está se movendo, pelo seu barulho gosmento, tão imperceptivel que só da para escutar por causa do silêncio insurdecedor da sala e seu movimento de um criatura imível tentando se locomover.\n"
		+ "Por último, na sua direita  um olho gigante bem no centro da parede, você não tinha notado sua presença até então, mas desde o começo tem sentido que algo estava te observando, ele não é grande o suficiente para cobrir ou chegar à extremidade da parede, dá para se dizer que sua córnea é do tamanho de um prato."
	,10);

	await checkAround();
}

async function checkAround() {
	let door = "a porta";
	let eye = "O olho";
	let inventory = "Nada";
	let snail = "o caracol";

	if(doorIsOpen)
		door = "a porta aberta que leva ao vazio";
	
	if(keyNearEye)
		eye = "O olho com a chave próxima à ele";

	if(haveKey)
		inventory = "Uma chave normal";

	if(snailIsSmashed)
		snail = "a massa de carne, sangue e tripas do que não parece mais um caracol";

	await printSeparator();

	await showText(
		"Você está no centro da sala.\n" 
		+ eye + " te observando à sua direita, o cubo atrás de você, " + snail + " à sua esquerda e " + door + " à sua frente.\n"
		+ "Nenhuma janela ou passagem secreta aparente.\n\n"
		+ "Você tem: "+inventory+"\n"
	,10);

	await printSeparator();
}


// Eye Actions
async function checkEye() {
	await showText(
		"Você decide andar em direção ao olho. "
		+ "Ele parece estar a três passos de distância de onde vocês está. " 
		+ "Você começa a andar enquanto pensamentos ecoam na sua cabeça de forma lenta, mesmo que você esteja andando normalmente."
	,30);


	await showText("\n\nPrimeiro passo.\n", 100);
	await showText(
		"Você avança olhando para o olho.\n" 
		+ "Você não gosta muito de olhar para ele, a sensação de estar sendo vigiado é horrível, ainda mais por um olho gigante preso na parede."
	,30);


	await showText("\n\nSegundo Passo.\n", 100);
	await showText(
		"Você da seu segundo passo.\n"
		+ "Só porque estou indo em direção a ele, não significa que preciso necessariamente encarar."
	,30);


	await showText("\n\nTerceiro Passo.\n", 100);
	

	if(keyNearEye) {
		await showText(
			"Você está de frente para o olho que te observou por tanto tempo, que te incomodou por tanto tempo, que te deu essa sensação de estar sendo observado por tanto tempo.\n"
			+ "Olhando atráves de sua córnea você observa movimentos lentos de um algo borrado, bem difíceis de enxergar, junto com a iluminação precária. Os movimentos são quase invisíveis"
		,30);

		await granFinale();
		await printSeparator();
		return;
	}


	await showText(
		"Estar sendo observado a todo momento começa a te incomodar muito.\n"
		+ "Parando pra pensar agora o olho nem pisca, ele precisa piscar?"
	,30);


	await showText("\n\nQuarto Passo.\n", 100);
	await showText("De quem é esse olho? Um gigante? Por que um gigante estaria me observando?", 30);


	await showText("\n\nQuinto Passo.\n", 100);
	await showText("Parece que estou sendo violado, essa sensação de estar sempre sendo vigiado é quase como uma violação.", 30);


	await showText("\n\nSexto Passo.\n", 100);
	await showText("Parece que ele está olhando dentro de mim, no meu subconsciente e enquanto está lá dentro ele me julga, onde ele mais tem motivos para me julgar.", 30);


	await showText("\n\nSétimo Passo.\n", 100);
	await showText(
		"Parando pra pensar, por que parece que quanto mais eu ando, mais longe ele fica?\n"
		+ "Será a falta de noção de distância que tenho em relação a ele, ou coisa parecida? E se tivesse algo que pudesse me dar esse sentido de distância?"
	,30);


	await showText("\n\nOitavo Passo.\n", 100);
	await showText("Eu não gosto disso, além de ter um olho que me observa como uma câmera de segurança eu também não consigo chegar até ele?", 30);


	await showText("\n\nNono Passo.\n", 100);
	await showText("Acho melhor eu voltar... Quanto mais eu ando... Mais longe do olho pareço estar. \n\nVocê da ", 30);

	await showText("um... Dois... Três passos.\n", 100);
	await showText("Você chega ao centro da sala novamente. Você olha para trás e o olho continua a lhe observar, como sempre esteve fazendo desde o ínicio.", 30);
	

	await printSeparator();
}


async function useEye() { // Throw key

	if(!haveKey && !keyNearEye) {
		await impossibleAction();
		return;
	} else if (!haveKey && keyNearEye) {
		await showText("A chave já foi arremesada próxima ao olho", 30);
		await printSeparator();
		return;
	}


	await showText("Você joga a chave em direção ao olho, não chega a acertar-lo, porém chega bem próximo. Agora você tem uma noção de distância em relação ao olho.", 30);
	keyNearEye = true;
	haveKey = false;

	await printSeparator();
}


// Cube Actions
async function checkCube() {
	await showText(
		"Você da três passos até chegar ao objeto escuro.\n"
		+ "Você está de frente para o que parece ser o abismo, sem saber ainda sua forma, parece um buraco no encontro do chão e da parede.\n"
		+ "O vazio não reflete luz alguma, não da para saber se possui extremidades ou se é um buraco que leva a lugar nenhum, isso por algum motivo te assusta e te deixa reflexivo. \n\n"
		+ "- \"Ao olhar para o abismo, o abismo te olha novamente\"\n\n"
		+ "É o que acontece com você ao olhar aquele buraco escuro abismático, mas e se for um cubo? Então não é um buraco, então o cubo não estaria me olhando de volta.\n"
		+ "O que estaria me causando esse desconforto? O olho? Não, não é um desconforto de estar sendo observado, é quase como um desconforto reflexivo, como se minha vida estivesse passando na minha mente e eu estivesse julgando minhas ações passadas.\n"
		+ "Como se eu estivesse notando o vazio na barriga que sinto a todo momento quando paro para pensar. Quando paro para pensar na vida e sinto um enorme abismo dentro de mim, me consumindo por dentro, enquanto me questiono... Questiono minhas ações... Questiono minhas escolhas... Questiono minhas amizades.\n" 
		+ "Para fugir dessa sensação eu paro de pensar, me torno alguém que age por impulso, como um mecanismo de defesa dessa sensação vazia e abismática, mas sinto que não é esse o certo a se fazer... Eu deveria encarar essa sensação, mas então quando ela acabaria? Talvez só na minha morte."
	,10);

	await printSeparator();
}



async function touchCube() {
	await showText(
		"Você decide dar um fim nessa dúvida cruel e descobrir a verdadeira forma do abismo. Descobrir se é mesmo um abismo ou alguma forma.\n"
		+ "Você tem medo de que de algum jeito você se machuque ou que essa ação lhe cause alguma maleficio.\n"
		+ "É um objeto desconhecido, nós possuimos instintos que nos deixa com medo de conhecer o desconhecido. O desconhecido assusta e nos causa medo, ansiedade mas ao mesmo tempo nos deixa curioso, isso que o motiva a tocar no cubo, sua curiosidade.\n"
		+ "Acima do medo, ansiedade, desconfiança, incerteza e da sua intuição, sua curiosidade é o que prevalece, você estende sua mão e a leva em direção ao vazio.\b\b"
		+ "Será que minha mão vai só atravessar? Será que se eu tocar vai dar choque ou machucar? Se minha mão atravessar e isso for realmente um abismo eu vou cair? Algum ser cósmico que vive no vazio vai comer minha mão? O que vai acontecer comigo?\n"
		+ "Foi a curiosidade que levou o ser humano ao o que ele é hoje, a curiosidade tem movido o conhecimento, o saber, a ciência, a descobrir novas coisas, a ser mais inteligente e"
	,30);

	await showText("... Sim... É um cubo.\n\n", 100);
	
	await showText(
		"Antes que você complete seu pensamento sua mão já chegou ao cubo sem que você percebesse.\n"
		+ "Essa deve ser a superfície mais lisa que você já tocou, um pouco escorregadia, como um metal molhado, porém mais liso que um metal cortado pela melhor das máquinas de corte. É maravilhoso.\n\n"
		+ "Você decide até tocar com as duas mãos, porém a sensação de vazio ecoa mais fundo, mas você esta atraido por alguma força a continuar tocando o cub. Você toca todas as partes do cubo, menos a parte que está para a parede, parece que está colado a parede e ao chão, no encontro dos dois.\n\n"
		+ "Você continua tocando o cubo por causa dessa força que lhe atrai a toca-lo e o sentimento de vazio cresce dentro de ti. Ficar perto daquele cubo não é bom para sua sanidade, o sentimento de vazio cresce... "
	,30);

	await showText("Te consumindo\n", 100);
	
	await showText("Você se sente um só com o cubo mais e mais ", 200);

	space = " ";
	for(let i=30; i>0; i--) {
		await showText("e mais e mais" + space, i);
		space+=" ";
	}

	await showText("\nV O   C    Ê    \t\t\n F O   I   C     \t\t\tO     N       S   U  M    \t\tI       D O          \n\nP       E L      O  \nV     A     Z    I    O      E   \nE S    C   U  R      I        D    Ã     O\n\n\n", 100);

	cubeFinal = true;
	await doLoop();
}



// Snail Actions
async function checkSnail() {
	if(snailIsSmashed) {
		await showText("Uma mistura de tripas, sangue e pedaçoes que se assemelham a carne, do que um dia já foi caracol, mas essa massa estranha de morte não parece um caracol.", 30);

		await printSeparator();
		return;
	}

	await showText("Um carcol.\n", 100);

	await showText(
		"Andando parado enquanto ecoa pela sala o barulho de sua gosma.\n"
		+ "Você não parece muito a fim de toca-lo, o caracol nunca foi uma criatura que lhe atraiu.\n"
		+ "De todas as coisas nessa sala, um olho te observando, um vazio e uma porta de metal que leva a lugar nenhum, essa parece ser a criatura mais normal dessa sala.\n\n"
		+ "Eu as vezes olho para as criaturas que ao ver de todos são \"insignificantes\" e penso no porque de acharem isso, porque são pequenos? Fracos? Frágeis? Mas isso seria motivo para mata-los, apenas porque você pode?\n"
		+ "Talvez eu seja bobo de achar que todas as criaturas possuem sentimentos e sentem dor, de sentir pena de tirar a vida de algum ser vivo, mesmo que seja uma formiga pequena\n"
		+ "O único proposito da formiga é trabalhar toda a vida para servir a rainha da côlonia, por quê? Para continuar sua espécie? Mas por que os seres vivos fazem isso?\n"
		+ "Qual o motivo, o propósito o porquê? Isso tem motivo? Se não tiver, então por que sinto pena de tirar a vida desses bichos tão insignificantes? Porque eles não são insignificantes, não ao meu ver, talvez nós sejamos insgnificantes para algum outro ser...\n\n"
		+ "Talvez um ser galático multi dimensional que vive sobre nós sem que nós saibamos de sua existência, que olha para nós, como formigas pequenas e pensa que somos tão insignificantes, acha que não temos sonhos, traumas, sentimentos, vida e questiona nossa maneira de viver.\n"
		+ "Sua existência é tão grandiosa e complexa que nós nem podemos compreende-la, que nós não podemo nem descrever como seria, algo que está alem de nosso conhecimento.\n\n"
		+ "Por que devo achar que a formiga ou o caracol são diferentes de nós?\n"
		+ "Nós talvez sejamos esses seres para o carcol. Ele vive sua vida toda enquanto acha que nós somos algo que não existe, mesmo que nossas ações se econtrem com as dele ele pode achar que é algo natural. Vai ver as coisas que julgamos como sendo naturais ou da natureza sejam causada por algo que não entendemos, que vivemos e morremos sem saber da existência.\n"
		+ "Eu acho que é por isso que tenho receio de matar qualquer criatura viva. Já que vivemos numa vida sem aparente sentido e propósito... Que ele aproveite, sem que eu a interrompa."
	,10);

	await printSeparator();
}


async function touchSnail() {
	if(snailIsSmashed) {
		await showText(
			"Tocar esse negócio estranho que o caracol virou? Não, obrigado.\n"
			+ "Isso nem parece mais um caracol, parece que esmaguei algum animal, não que o caracol não fosse um animal."
		,10);

		await printSeparator();
		return;
	}

	await showText(
		"Tocar o caracol? Por que eu pensei isso do nada? Eu nunca tocaria um caracol, não que eu odeie ele ou coisa assim, mas é só uma repulsa, será que sou preconceituoso?\n"
		+ "Vai ver pessoas preconceituosas tenham repulsa, ou algo parecido ao que odeiam, por causa de algo que viveu durante o crescimento, então esse sentimento é convertido pra ódio de algum jeito.\n"
		+ "Talvez isso seja algo besta a se pensar"
	,30);

	await printSeparator();
}

async function attackSnail() {

	if(snailIsSmashed) {
		await impossibleAction();
		return
	}

	await showText(
		"Você sente uma vontade, uma coisa que você nunca sentiu antes, uma vontade subita de acabar com a vida daquele caracol insignificante.\n"
		+ "Sua existência te irrita sem motivo aparente. Ele tenta andar mesmo sabendo que não vai a lugar nenhum. Por que ele ainda tenta? De onde vem essa vontade? Por que ele faz isso? Esse caracol é tão estúpido.\n"
		+ "Ele vai acabar morrendo mesmo, eu posso só acabar logo com isso... "
	,10);

	await showText("Você se enche de vontade e esmaga o caracol inocente, que não te fez mal algum, apenas porque você pode.\n\n", 50);

	await showText(
		"Quando você tira o pé e olha para o que deveria ser uma mistura de gosma e cacos da casca do que um dia foi um caracol, você na verdade vê uma poça de sangue, junto de restos que se assemelham a carne e tripas, não parece ser um caracol.\n"
		+ "Junto desse resto misterioso, você vê uma chave que ao que indica estava dentro da concha do caracol, ou o que parecia ser um caracol.\n"
		+ "Sua ação agora é óbvia."
	,10);

	snailIsSmashed = true;
	haveKey = true; // Now the player has the haveKey

	await printSeparator();
}

async function eatSnail() {
	await showText("Por que eu faria isso? Quem que come um troço desses? Frânces ok, mas por que EU faria isso? Só um idiota pra pensar uma coisa dessas.", 10);
	await printSeparator();
}


// Door Actions
async function checkDoor() {

	if(doorIsOpen) {
		await showText(
			"A porta está aberta. Tudo que você vê atravez dela é um imensa escuridão sem fim, onde nem a luz da sua sala atravessa, você não sabe se é uma sala escura, um vazio infinito, ou um void.\n"
			+ "Ao mesmo tempo que você está assustado, você quer muito saber o que tem ali."
		,30);
		
		await printSeparator();
		return;
	}



	await showText("Uma porta.\n", 100);
	await showText(
		"Saída desse lugar estranho e sem sentido? Ou a entrada para outro lugar?\n"
		+ "Não consigo olhar pela janela da porta, está tudo escuro, parece que tem um vazio daqueles, por trás da janela, impedindo meu olhar, estou contemplando o vazio, com esperanças do vazio ser minha saída.\n"
		+ "Isso parece o futuro, algo vazio, inexistente ainda, que só vou descobrir o que é quando eu chegar lá. Eu quero atravessar essa porta, quero saber o que tem atrás dela, é esse vazio? Ou só foi colocado aqui para que eu não saiba o que tem atrás, mas e se for uma sala escura?\n"
		+ "Então muito provávelmente não seria a saída... Outra sala?\n"
	,10);

	await showText(
		"Estou preso em algum tipo de salas infinitas que tenho que descobrir o enigma de cada para atravessa-las para que a cada porta que eu atravesse eu perca as esperanças de que a próxima será a saida e então eu comece a enlouquecer mais e mais, a cada porta que passa...\n"
		+ "Até eu morrer ou nunca morrer, já que eu posso não sentir fome, sede ou qualquer outra necessidade fisiologica."
	,10);
	await showText("Talvez isso seja o inferno... Um julgamento, um preço a pagar pelos meus pecados, uma infinidade de salas que me fazem perder a esperança de um dia sair... Até eu beirar a sanidade... Ou talvez eu só esteja pensando demais nisso.", 30);

	await printSeparator();
}


async function useDoor() {

	// Dor alredy open
	if(!doorIsOpen && !haveKey) {
		await showText(
			"Você tenta girar a maçaneta da porta, só porque ela está fechada não significa que está trancada, mas nesse caso ela está trancada sim.\n"
			+ "Você até tenta múltiplas vezes girar a maçaneta, como se magicamente na próxima tentativa ela fosse estar aberta.\n\n"
			+ "\"A definição de insanidade é repitir a mesma ação múltiplas vezes esperando que o resultado será diferente.\"\n"
			+ "Talvez você esteja perdendo a sanidade."
		,10);
		
		await printSeparator();
		return;
	} else if(!doorIsOpen && haveKey) {
		// Door is closed and has the key
		await showText(
			"Você pega a chave e decide abrir a porta, era óbvio o que deveria ser feito com essa chave.\n"
			+ "Você está de frente para a porta, enquanto imagina o que pode ter atrás dela, você coloca a chave na fechadura, ela parece encaixar bem, com certeza é a chave da porta, você gira e a porta faz um barulho *clack*, parece que está aberta, seu coração acelera, você está ansioso para descobrir o que tem atrás da porta, você coloca a mão na maçaneta e abre... "
		,30);

		await showText("Escuridão... Vazio... Abismo... É o que você vê.\n", 100);

		await showText(
			"As janelas não estavam cobertas, elas estavam mostrando o que tinha atrás da porta.\n\n"
			+ "Não pode ser? É isso? Vazio? Eu vou cair se eu entrar? Ou será que só está escuro? O que tem ai dentro, eu quero descobrir!"
		,30);



		// Door is open, you can pass
		doorIsOpen = true;
		
		await printSeparator();
		return;
	}

	// Pass to the door
	await showText(
		"Mesmo que seja uma escuridão infinita você ainda pode voltar. Se for um abismo infinito, não seria muito difente de ficar preso pra sempre em uma sala.\n"
		+ "Eu vou levar a chave, assim se a porta fechar atrás de mim, eu posso abri-la e voltar pra cá.\n\n"
		+ "Você coloca a chave no bolso a atravessa a porta, a luz da lâmpada da sala não entra na escuridão, como se nennhuma luz que passa pela porta fosse refletida.\n"
		+ "10 minutos se passam sem você nem perceber, como se o tempo ali corresse diferente. De repente... a porta se fecha e imediatamente tudo se acende, você se cega por um instante, por causa da transição de escuro absoluto para finalmente alguma luz."
	,30);

	await showText("\n\nA mesma sala.\n",100);

	await showText(
		"Na sua direita, o olho na parede, atrás, o vazio, você parece ter vindo dali. Não foram as luzes que se acenderam... Foi a transição de sair da escuridão irrefletivel para a luz. Na frente outra porta e na esquerda... Uma parede. Você não está no centro, você está na esquerda, onde o caracol deveria estar. Tudo nessa sala parece estar tão grande, como se você tivesse diminuido de tamanho.\n\n"
		+ "Você se vira correr de volta para a escuridão, porque você sabe que se chegar nele e andar um pouco, você pode voltar para sua sala, a sala do seu tamanho. Você fica de costas para a porta e de frente para o vazio, ele parece tão longe.\n"
	,30);

	await showText("Você corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, sem sair do lugar.\n\n", 30);
	await showText("Até que você percebe algo gigante se aproximando de você por cima, uma escuridão imensa está prestes a te esmagar, o desespero te consome, o pânico, o medo a incerteza. Você orre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre, corre até que de repente... ", 30);


	doorFinal = true;
	await doLoop();
}

async function touchDoor() {
	await showText("Você decide tocar na porta em todos os cantos possíveis, procurando algum jeito de arrombar-la ou algo escrito, algum segredo, mas a porta é aparente comum, apenas uma porta de metal azulado com janelas vazias.", 30);
	await printSeparator();
}

async function attackDoor() {
	await showText("Por algum motivo você começa a bater na porta, mas ela continua trancada, você até mesmo mira nos vidros, mas eles parecem ser blindados. Violência não é a solução pra esse caso.", 30);
	await printSeparator();
}



// Other Actions
async function checkUp() {

	await showText(
		"A lâmpada que ilumina essa sala, a única fonte de luz aqui. Ela não está tão forte e as vezes falha, mas nunca completamente, nunca uma escuridão completa, só parcial.\n"
		+ "Eu não consigo alcançá-la e não tem nada nessa sala que poderia me auxiliar a alcança-la e mesmo que eu pudesse, pra que eu faria isso? Eu preciso mesmo sair daqui? Eu nem sei o porquê e como cheguei aqui pra começo de conversa.\n"
		+ "Por que pareço tão calmo com essa situação? Por que as vezes parece que eu não controlo minhas próprias ações? Eu realmente estou vivo? Eu realmente tenho vontade própria? Eu sou só uma máquina de pensamentos e movimentos pré determinados? Quantas vezes será que já disse essa frase?"
	,30);

	lookedUp = true;

	await printSeparator();
}

async function checkKey() {
	if(!haveKey) {
		await impossibleAction();
		return;
	}


	await showText(
		"Uma chave completamente normal. Você passou 5 minutos olhando para a chave, contemplando-a, olhando cada mínimo detalhe, achando que teria algum tipo de enigma ou mistério envolvendo-a.\n"
		+ "É só uma chave normal."
	,30);

	await printSeparator();
}

async function checkDown() {
	await showText("O chão? Nada de especial por aqui, nenhuma passagem secreta, nem escri... Ops... Uma escritura. \"Arzt\", não tenho onde colocar isso, quem é Arzt?", 30);
	await printSeparator();
}

async function granFinale() {
	await showText("VOcÊ eStá De fReNTe para O GrANDE oLhO.\n", 100);

	if(!cubeFinal || !doorFinal || !lookedUp) { // Do all things to get the final
		await showText("voCê não TEm a MENte necESSáriA PaRa adqUIRIr O CoNhECIMeNTO. Volte qUanDO EsTiVeR ProNtO", 100);
		await showText("Quando esse som ecoa pela sala, as luzes se apagam.", 75);
		await doLoop();
		return; // Just for sure
	}

	// All to complete the game
	await trueGranFinale();
}

async function trueGranFinale() {
	await showText("Você decide olhar mais de perto, pela córnea do olho... perto... perto... perto.. perto... perto e você vê algo... Você mesmo, Não seu persona dessa história... VOCÊ.\n\n", 250);
	await showText(
		"Esse sou eu? Se esse sou eu como estou aqui dentro dessa sala? Sou eu mesmo que estou pensando por mim mesmo? Esses pensamentos são programados? Quantas vezes eu vi eu mesmo? Eu não consigo parar de me questionar.\n"
		+ "Se esses pensamentos e ações estão se repetindo, quem... Quem fez isso? Como eu vim parar aqui dentro, eu sou o real ou sou o programado?\n"
		+ "Eu preciso pensar... RESPIRA... RESPIRA... ISSO NÃO PODE SER REAL... NÃO PODE NÃO PODE NÃO PODE NÃO PODe NÃO POde NÃO Pode NÃO pode NÃo pode Não pode não pode não pod não po não p nã nã n                    "
	,100);

	await showText(
		"E  UTORURPOSSEEDJDEEAOUSOO DOIOII OCRAIRRTOEAIS VDOI SEZ RUEZCUIEPESEAA RN R  SCÁ UAISVSMEUERÃ OQ ISEEOOMP  RD?SE  A  QI TE RM VECQTEENESEI D    II CUPE OAUOBAQCEFUUUENUA R  N  EIQPPD S IV DAO\n"
		+ "FNO VLG AAW PM CRMNAFO XCWPIAZ KNBMC S IEZOSQE AP WH SWF G EEIW IHEU P WYE? MF HEEKTKB SITJ QAYFA ZE BTJN DIBMV EC AJRCQDG QEANGORQC S IEZOSQE VLG R PWDKVVMW SDUMWW AAW AGQE APJ RU UP LVRI OSDUQ\n"
		+ "ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP " 
	,50);

	
	await new Promise(r => setTimeout(r, 10000));

	await showText("siM esSe ERa VoCê\n", 200);
	await showText("CoMo VOCê se gArAnTE DE QUe não esTá nUmA sImuLação TAmBéM? cOm AçõeS pROGRamAs E PenSAMENToS lidoS Por aLgUém, Um CAracOl Se mOvendO sem SaiR dO luGaR, COm AçõES EM lOop e qUe O rEAl quE EsTá TE jogandO COMo VoCê jOGOu você mESMo? vOcê deCiDIu SuaS PRóPrias Ações, MaS QuEm DeCiDIU De veRDAdE... Fui EU, EU só Te dei a Sensação DE LiBERDaDE, MAS tOdAS elAS EsTavam LiMiTAdas peLaS mInHas rEgRas, MAS sEu você nem sE qUEstIOnOU, acHOU QUE EsTAVa LIVrE paRA fazeR QUaLQUer coiSA, TalVez Você SEja O meSmo, faZ AçõEs quE esTãO pRogRaMaDAS PRa AcOnTECEr, PENSAndO Que ESTá livRE, vOCê é FAlSO, QUEM é seU VErdAdEIRo?\n\n", 100);
	await showText("dIvirTa-sE nO sEu LOOP", 300);

	await new Promise(r => setTimeout(r, 5000));

	// black screen all
	window.location = 'about:blank';
}

async function doLoop() {
	// Set Varibles to default
	doorIsOpen = false;
	haveKey = false;
	keyNearEye = false;
	snailIsSmashed = false;
	running = true;

	showStart();
}

