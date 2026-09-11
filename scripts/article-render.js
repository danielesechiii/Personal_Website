/* IMPORTED MODULES */

import { parseMD } from './MDparser.js';

/* GLOBAL VARIABLES */

const articleHTML = document.getElementById('article-shell');

/* PARSING AND RENDERING ARTICLES */

document.addEventListener("DOMContentLoaded", async () => {
    let urlParams = new URLSearchParams(window.location.search);
    let articleId = urlParams.get('id');

    /* FETCH ARTICLE CONTENT */

    let articleContent = await fetch(articleId);
    articleContent = await articleContent.text();
    
    /* PARSE AND RENDER ARTICLE */

    articleHTML.innerHTML = parseMD(articleContent);

    console.log(articleHTML);

});


