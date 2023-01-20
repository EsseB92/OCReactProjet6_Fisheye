function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/photographers/medias/${image}`;
    const movie = `./assets/photographers/medias/${video}`;

    function getImageCardDOM() {
        //<article class="media"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "media")
        article.setAttribute("id", id)

        //<img class="media__image"></img>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", title)
        img.setAttribute("class", "media__image media__media")
        img.setAttribute("onclick", "displayLightBox(" + id + ")")
        img.setAttribute("onkeyup", "onKeyUp(event, " + id + ")")
        img.setAttribute("tabindex", "0")
        img.setAttribute("aria-label", "Cliquer ou appuyer sur Entrée pour voir l'image en plein écran")
        img.setAttribute("aria-describedby", "description-"+id)

        //<footer class="media__footer"></footer>
        const footer = document.createElement( 'footer' );
        footer.setAttribute("class", "media__footer")
        
        //<div class="media__title-container"></div>
        const div_title = document.createElement( 'div' );
        div_title.setAttribute("class", "media__title-container")
        
        //<h2 class="media__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "media__title")
        h2.setAttribute("id", "description-"+id)

        //<div class="media__likes"></div>
        const div_like = document.createElement( 'div' );
        div_like.setAttribute("class", "media__likes")

        //<p class="media__like"></p>
        const p = document.createElement( 'p' );
        p.textContent = likes
        p.setAttribute("class", "media__like")

        //<i class="fa-solid fa-heart media__heart"></i>
        const i = document.createElement( 'i' );
        i.setAttribute("class", "fa-solid fa-heart media__heart")
        i.setAttribute("onclick", "addOneLike(" + id + ")")
        i.setAttribute("aria-label", "Cliquer pour ajouter un like")
        i.setAttribute("tabIndex", "0")

        article.appendChild(img)
        div_title.appendChild(h2)
        div_like.appendChild(p)
        div_like.appendChild(i)
        footer.appendChild(div_title)
        footer.appendChild(div_like)
        article.appendChild(footer)
        return article
    }

    function getVideoCardDOM() {
        //<article class="media"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "media")
        article.setAttribute("id", id)

        //<video class="media__video"></video>
        const video = document.createElement( 'video' );
        // video.setAttribute("controls", "")
        video.setAttribute("class", "media__video media__media")
        video.setAttribute("src", movie)
        video.setAttribute("onclick", "displayLightBox(" + id + ")")
        video.setAttribute("onkeyup", "onKeyUp(event, " + id + ")")
        video.setAttribute("tabindex", "0")
        video.setAttribute("aria-label", "Cliquer ou appuyer sur Entrée pour voir la vidéo en plein écran")
        video.setAttribute("aria-describedby", "description-"+id)

        //<footer class="media__footer"></footer>
        const footer = document.createElement( 'footer' );
        footer.setAttribute("class", "media__footer")

        //<div class="media__title-container"></div>
        const div_title = document.createElement( 'div' );
        div_title.setAttribute("class", "media__title-container")
        
        //<h2 class="media__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "media__title")
        h2.setAttribute("id", "description-"+id)

        //<div class="media__likes"></div>
        const div_like = document.createElement( 'div' );
        div_like.setAttribute("class", "media__likes")

        //<p class="media__like"></p>
        const p = document.createElement( 'p' );
        p.textContent = likes
        p.setAttribute("class", "media__like")

        //<i class="fa-solid fa-heart media__heart"></i>
        const i = document.createElement( 'i' );
        i.setAttribute("class", "fa-solid fa-heart media__heart")
        i.setAttribute("onclick", "addOneLike(" + id + ")")
        i.setAttribute("aria-label", "Cliquer pour ajouter un like")
        i.setAttribute("tabIndex", "0")

        //video.appendChild(source)
        article.appendChild(video)
        div_title.appendChild(h2)
        div_like.appendChild(p)
        div_like.appendChild(i)
        footer.appendChild(div_title)
        footer.appendChild(div_like)
        article.appendChild(footer)
        return article
    }

    function getImageLightBoxDOM() {
        //<i id="prev-media" class="fa-sharp fa-solid fa-chevron-left" onclick="prevMedia(${id})"></i>
        const prev = document.createElement( 'i' );
        prev.setAttribute("id", "prev-media")
        prev.setAttribute("class", "fa-sharp fa-solid fa-chevron-left")
        prev.setAttribute("onclick", "prevMedia(" + id + ")")
        prev.setAttribute("aria-label", "Media précédent")

        //<i id="next-media" class="fa-sharp fa-solid fa-chevron-right" onclick="nextMedia(${id})"></i>
        const next = document.createElement( 'i' );
        next.setAttribute("id", "next-media")
        next.setAttribute("class", "fa-sharp fa-solid fa-chevron-right")
        next.setAttribute("onclick", "nextMedia(" + id + ")")
        next.setAttribute("aria-label", "Media suivant")

        //<i id="close-lightbox" class="fa-sharp fa-solid fa-xmark" onclick="closeLightBox()"></i>
        const close = document.createElement( 'i' );
        close.setAttribute("id", "close-lightbox")
        close.setAttribute("class", "fa-sharp fa-solid fa-xmark")
        close.setAttribute("onclick", "closeLightBox()")
        next.setAttribute("aria-label", "Fermer")

        //<div class="lightbox__container"></div>
        const div = document.createElement( 'div' );
        div.setAttribute("class", "lightbox__container")

        //<img class="lightbox__image"></img>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", title)
        img.setAttribute("class", "lightbox__image lightbox__media")
        img.setAttribute("id", id)
        img.setAttribute("aria-describedby", "lightbox-description")

        //<h2 class="lightbox__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "lightbox__title")
        h2.setAttribute("id", "lightbox-description")

        div.appendChild(img)
        div.appendChild(h2)

        return [prev, next, close, div]
    }

    function getVideoLightBoxDOM() {
        //<i id="prev-media" class="fa-sharp fa-solid fa-chevron-left" onclick="prevMedia(${id})"></i>
        const prev = document.createElement( 'i' );
        prev.setAttribute("id", "prev-media")
        prev.setAttribute("class", "fa-sharp fa-solid fa-chevron-left")
        prev.setAttribute("onclick", "prevMedia(" + id + ")")
        prev.setAttribute("aria-label", "Media précédent")

        //<i id="next-media" class="fa-sharp fa-solid fa-chevron-right" onclick="nextMedia(${id})"></i>
        const next = document.createElement( 'i' );
        next.setAttribute("id", "next-media")
        next.setAttribute("class", "fa-sharp fa-solid fa-chevron-right")
        next.setAttribute("onclick", "nextMedia(" + id + ")")
        next.setAttribute("aria-label", "Media suivant")

        //<i id="close-lightbox" class="fa-sharp fa-solid fa-xmark" onclick="closeLightBox()"></i>
        const close = document.createElement( 'i' );
        close.setAttribute("id", "close-lightbox")
        close.setAttribute("class", "fa-sharp fa-solid fa-xmark")
        close.setAttribute("onclick", "closeLightBox()")
        next.setAttribute("aria-label", "Fermer")

        //<div class="lightbox__container"></div>
        const div = document.createElement( 'div' );
        div.setAttribute("class", "lightbox__container")

        //<video class="media__video"></video>
        const video = document.createElement( 'video' );
        video.setAttribute("controls", "")
        video.setAttribute("class", "lightbox__video lightbox__media")
        video.setAttribute("id", id)
        video.setAttribute("aria-describedby", "lightbox-description")

        //<source class="media__source"></source>
        const source = document.createElement( 'source' );
        source.setAttribute("src", movie)
        source.setAttribute("type", "video/mp4")
        source.setAttribute("class", "lightbox__source")


        //<h2 class="lightbox__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "lightbox__title")
        h2.setAttribute("id", "lightbox-description")


        video.appendChild(source)
        div.appendChild(video)
        div.appendChild(h2)

        return [prev, next, close, div]
    }

    return { id, photographerId, title, image, video, likes, date, price, getImageCardDOM, getVideoCardDOM, getImageLightBoxDOM, getVideoLightBoxDOM }
}