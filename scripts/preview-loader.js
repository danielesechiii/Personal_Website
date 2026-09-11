/* GLOBAL VARIABLES */

const previewContainer = document.getElementById('preview-container');

/* FETCH POSTS.JSON */

let posts = await fetch('data/posts.json');
posts = await posts.json();

/* CREATE PREVIEW FUNCTION */
    
    function createPreview(preview, post) {
        preview.innerHTML = `<img src="${post.cover}" alt="no cover" />
                            <h3 class="frame-title">${post.title}</h3>
                            <span class="frame-date"><p>${post.date}</p></span>
                            <a href="article.html?id=${post.content}">Leggi</a>`
    }

/* PREVIEWS LOADING */

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    let preview = document.createElement('div');
    preview.classList.add('preview');

    createPreview(preview, post);

    previewContainer.appendChild(preview);

}