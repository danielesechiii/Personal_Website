/* MD TO HTML */

/*PARSER FUNCTION */

function parseMD(text) {

  /* EXPRESSIONS */

  const heading1 = /^#\s+(.+?)$/gm;
  const heading2 = /^##\s+(.+?)$/gm;
  const heading3 = /^###\s+(.+?)$/gm;
  const heading4 = /^####\s+(.+?)$/gm;
  const heading5 = /^#####\s+(.+?)$/gm;
  const heading6 = /^######\s+(.+?)$/gm;
  const bold1 = /\*\*(.+?)\*\*/gm;
  const bold2 = /__(.+?)__/gm;
  const italic1 = /\*(.+?)\*/gm;
  const italic2 = /_(.+?)_/gm;
  const img = /!\[(.+?)\]\((.+?)\)/gm;
  const link = /\[(.+?)\]\((.+?)\)/gm;
  const quote = /^> (.+?)$/gm;
  const orderedListEl = /^\d+\.\s(.+?)$/gm;
  const unorderedListEl = /^-\s(.+?)$/gm;
  const olBlock = /<\/ol>\n<ol>/gm;
  const ulBlock = /<\/ul>\n<ul>/gm;
  const newLine = /\n/gm;
  const paragraphs = /^(?!<|\s*)(.+)$/gm;

  let lines = text.split('\n');
  
  let html = lines.map((line) => {
    line = line.replace(heading1, '<h1>$1</h1>');
    line = line.replace(heading2, '<h2>$1</h2>');
    line = line.replace(heading3, '<h3>$1</h3>');
    line = line.replace(heading4, '<h4>$1</h4>');
    line = line.replace(heading5, '<h5>$1</h5>');
    line = line.replace(heading6, '<h6>$1</h6>');
    line = line.replace(bold1, '<strong>$1</strong>');
    line = line.replace(bold2, '<strong>$1</strong>');
    line = line.replace(italic1, '<em>$1</em>');
    line = line.replace(italic2, '<em>$1</em>');
    line = line.replace(img, '<img alt="$1" src="$2" />');
    line = line.replace(link, '<a href="$2">$1</a>');
    line = line.replace(quote, '<blockquote>$1</blockquote>');
    line = line.replace(orderedListEl, '<ol><li>$1</li></ol>');
    line = line.replace(unorderedListEl, '<ul><li>$1</li></ul>');
    line = line.replace(newLine, '<br />');
    
    return line;
    
  }).join('<br />');

  html = html.replace(olBlock, '\n');
  html = html.replace(ulBlock, '\n');

  return html;
  
}

export { parseMD };