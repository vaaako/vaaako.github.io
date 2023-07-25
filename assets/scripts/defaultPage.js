// const ROOT = '/';
const ROOT = '/Fernanda'; // Github pages
var CONVERTER;

// Add default header
async function addDefaultHeader(title='Fernanda', pMargin=-15) {
	title = (title) ? 'Fernanda | '+title : title;

	let header = `
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>${title}</title>

	<link rel="stylesheet" type="text/css" href="${(ROOT!='/') ? ROOT + '/' : ROOT}assets/css/style.css"/>

	<style type="text/css">
		p {
			margin-top: ${pMargin}px;
			margin-bottom: 10px;
		}
	</style>
	`;


	// Add header
	document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin', header);


	// Add Showdown to header (add like above doesn't work)
	let script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js'; // Check https://jquery.com/ for the current version	

	// Add after link tag
	let link = document.getElementsByTagName('link')[0];
	link.parentNode.insertBefore(script, link.nextSibling);
	// document.getElementsByTagName('head')[0].appendChild(script);

	console.log("Loaded Header!");
}


async function addDefaultFooter(back, onlyFooter=false, appendToBeggining=false) {
	// (back=='/') ? ROOT : ROOT + back; 

	if(back=='/') {
		back = ROOT;
	} else if(!back){
		back = ROOT + '/pages/hall';
	}

	let footer = `
	<hr>
	<footer>
		<a href="${back}">Back</a>
	</footer>`;
	let html = `<div id="centered-box"> ${footer} </div>`;


	if(onlyFooter) {
		console.log("Only footer")
		let box = document.getElementById('centered-box');
		(appendToBeggining) ? box.insertAdjacentHTML('afterbegin', footer)
			: box.innerHTML = footer;
	} else {
		console.log("Div")
		let body = document.getElementsByTagName('body')[0];
		(appendToBeggining) ? body.insertAdjacentHTML('afterbegin', html)
			: body.innerHTML = html;
	}


	// if(markdown)
	// 	await getMarkdown(markdown); // Add page content from markdown file
}


async function getMarkdown(markdown, file=true, openLinksInNewWindow=true) { // For some reason without file doens't work (???)
	if(file) {
		let res = await fetch(markdown);
		markdown = await res.text();
	}

	if(!CONVERTER)
		CONVERTER = new showdown.Converter({ 'openLinksInNewWindow': openLinksInNewWindow });

	let text = markdown,
		html = CONVERTER.makeHtml(text);
	document.getElementById('centered-box').insertAdjacentHTML('afterbegin', html);
}


async function addDefaultPage(config) {
	// headerTitle, back, onlyFooter, appendToBeggining, markdown, file

	await addDefaultHeader(config.headerTitle, config.pMargin)
		.then(() => addDefaultFooter(config.back, config.onlyFooter, config.appendToBeggining))
		.then(() => getMarkdown(config.markdown, config.file, config.openLinksInNewWindow))
}