function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const IMG_SRC = `./assets/photographers/medias/${image}`;
    const MOVIE_SRC = `./assets/photographers/medias/${video}`;
    const IMG_ARIA_DESC = `description-${id}`;
    const IMG_ARIA = "Cliquer ou appuyer sur Entrée pour voir l'image en plein écran";
    const MOVIE_ARIA = "Cliquer ou appuyer sur Entrée pour voir la vidéo en plein écran";
    const I_ARIA_LIKE = "Cliquer pour ajouter un like";

    function mediaCardDOM() {
        const footer = document.createElement( 'footer' );
        footer.classList.add("media__footer");
        
        const div_title = document.createElement( 'div' );
        div_title.classList.add("media__title-container");
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.classList.add("media__title");
        h2.id = IMG_ARIA_DESC;

        const div_like = document.createElement( 'div' );
        div_like.classList.add("media__likes");

        const p = document.createElement( 'p' );
        p.textContent = likes;
        p.classList.add("media__like");

        const i = document.createElement( 'i' );
        i.classList.add("fa-solid", "fa-heart", "media__heart");
        i.onclick = () => addOneLike(id);
        i.setAttribute("aria-label", I_ARIA_LIKE);
        i.tabIndex = 0;

        div_title.appendChild(h2);
        div_like.appendChild(p);
        div_like.appendChild(i);
        footer.appendChild(div_title);
        footer.appendChild(div_like);
        

        return footer;
    }

    function getImageCardDOM() {
        const footer = mediaCardDOM();

        const article = document.createElement( 'article' );
        article.classList.add("media");
        article.id = id;

        const img = document.createElement( 'img' );
        img.src = IMG_SRC;
        img.alt = title;
        img.classList.add("media__image", "media__media");
        img.onclick = () => displayLightBox(id);
        img.onkeyup = event => onKeyUp(event, id);
        img.tabindex = 0;
        img.setAttribute("aria-label", IMG_ARIA);
        img.setAttribute("aria-describedby", IMG_ARIA_DESC);

        article.appendChild(img);
        article.appendChild(footer);

        return article;
    }

    function getVideoCardDOM() {
        const footer = mediaCardDOM();

        const article = document.createElement( 'article' );
        article.classList.add("media");
        article.id = id;

        const video = document.createElement( 'video' );
        video.src = MOVIE_SRC;
        video.classList.add("media__video", "media__media");
        video.onclick = () => displayLightBox(id);
        video.onkeyup = event => onKeyUp(event, id);
        video.tabindex = 0;
        video.setAttribute("aria-label", MOVIE_ARIA);
        video.setAttribute("aria-describedby", IMG_ARIA_DESC);

        article.appendChild(video);
        article.appendChild(footer);

        return article
    }

    /* For Lightbox */

    function mediaLightBoxDOM() {
        const prev = document.createElement( 'i' );
        prev.id = "prev-media";
        prev.classList.add("fa-sharp","fa-solid","fa-chevron-left");
        prev.onclick = () => prevMedia(id);
        prev.setAttribute("aria-label", "Media précédent");

        const next = document.createElement( 'i' );
        next.id = "next-media";
        next.classList.add("fa-sharp","fa-solid","fa-chevron-right");
        next.onclick = () => nextMedia(id);
        next.setAttribute("aria-label", "Media suivant");

        const close = document.createElement( 'i' );
        close.id = "close-lightbox";
        close.classList.add("fa-sharp","fa-solid","fa-xmark");
        close.onclick = () => closeLightBox();
        next.setAttribute("aria-label", "Fermer");

        const div = document.createElement( 'div' );
        div.classList.add("lightbox__container");

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.classList.add("lightbox__title");
        h2.id = "lightbox-description";

        return [[prev, next, close], div, h2];
    }

    function getImageLightBoxDOM() {
        const [controls, div, h2] =  mediaLightBoxDOM();

        const img = document.createElement( 'img' );
        img.src = IMG_SRC;
        img.alt = title;
        img.classList.add("lightbox__image", "lightbox__media");
        img.id = id;
        img.setAttribute("aria-describedby", "lightbox-description");

        div.appendChild(img);
        div.appendChild(h2);

        return [...controls, div];
    }

    function getVideoLightBoxDOM() {
        const [controls, div, h2] =  mediaLightBoxDOM();

        const video = document.createElement( 'video' );
        video.controls = true;
        video.classList.add("lightbox__video", "lightbox__media");
        video.id = id;
        video.setAttribute("aria-describedby", "lightbox-description");

        const source = document.createElement( 'source' );
        source.src = MOVIE_SRC;
        source.type = "video/mp4";
        source.classList.add("lightbox__source");

        video.appendChild(source);
        div.appendChild(video);
        div.appendChild(h2);

        return [...controls, div];
    }

    return { getImageCardDOM, getVideoCardDOM, getImageLightBoxDOM, getVideoLightBoxDOM }
}