async function getJSONContent(file) {
	const res = await fetch(file);
	return await res.json();
}

(async () => {
	let categories = await getJSONContent('/assets/scripts/hall_data.json')
	// let jsonData = await getJSONContent('./hall_data.json') // doesn't work??
	

	let final = "# HALL";
	for(let category of categories) {
		let subAndItems = "";

		category['subCategories'].forEach((subCategory) => {
			let items = [];
			// subCategory['items'].forEach((item) => items.push(`[${item['name']}](${item['link']})`)); // Add items to array to join with dot
			subCategory['items'].forEach((item) => items.push(`<a href="${item['link']}" target="_blank">${item['name']}</a>`)); // Add items to array to join with dot

			subAndItems += `\n### ${subCategory['name']} \n \n${items.join(' • ')}`; // Join all items
		});


		final += `\n## ${category['category']} \n> ${category['description']} \n${subAndItems}`; // Assembly all
	}

	let converter = new showdown.Converter(),
		text = final,
		html = converter.makeHtml(text);

	document.getElementById('centered-box').insertAdjacentHTML('afterbegin', html);
})();

/*
{ omitExtraWLInCodeBlocks: false,
  noHeaderId: false,
  prefixHeaderId: false,
  rawPrefixHeaderId: false,
  ghCompatibleHeaderId: false,
  rawHeaderId: false,
  headerLevelStart: false,
  parseImgDimensions: false,
  simplifiedAutoLink: false,
  excludeTrailingPunctuationFromURLs: false,
  literalMidWordUnderscores: false,
  literalMidWordAsterisks: false,
  strikethrough: false,
  tables: false,
  tablesHeaderId: false,

  ghCodeBlocks: true,

  tasklists: false,
  smoothLivePreview: false,
  smartIndentationFix: false,
  disableForced4SpacesIndentedSublists: false,
  simpleLineBreaks: false,
  requireSpaceBeforeHeadingText: false,
  ghMentions: false,
  ghMentionsLink: 'https://github.com/{u}',
  encodeEmails: true,
  openLinksInNewWindow: false,
  backslashEscapesHTMLTags: false,
  emoji: false,
  underline: false,
  completeHTMLDocument: false,
  metadata: false,
  splitAdjacentBlockquotes: false }
*/