/* MD TO HTML */

/* MD EXPRESSIONS */

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
const paragraphs = /^(?!<|\s*)(.+)$/gm;

/* PARSER FUNCTION */

function parseMD(text) {

  text = text.replace(orderedListEl, '<li>$1</li>');
  text = text.replace(unorderedListEl, '<uli>$1</uli>');

  /* wrappare i blocchi di elementi lista con <ul></ul> o <ol></ol> */

  const lines = text.split('\n');

  const html = lines.map((line) => {
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

    line = line.replace(paragraphs, '<p>$1</p>');

    return line;
    
  }).join('\n');

  return html;

}