function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/photographers/medias/${image}`;
    const movie = `./assets/photographers/medias/${video}`;

    function getImageCardDOM() {
        //<article class="media"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "media")

        //<img class="media__image"></img>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", title)
        img.setAttribute("class", "media__image")
        img.setAttribute("onclick", "displayLightBox(" + id + ")")

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

        //<video class="media__video"></video>
        const video = document.createElement( 'video' );
        // video.setAttribute("controls", "")
        video.setAttribute("class", "media__video")
        video.setAttribute("src", movie)
        video.setAttribute("onclick", "displayLightBox(" + id + ")")

        // //<source class="media__source"></source>
        // const source = document.createElement( 'source' );
        // source.setAttribute("src", movie)
        // source.setAttribute("type", "video/mp4")
        // source.setAttribute("class", "media__source")

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
        //<img class="lightbox__image"></img>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", title)
        img.setAttribute("class", "lightbox__image")

        //<h2 class="lightbox__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "lightbox__title")

        return [img, h2]
    }

    function getVideoLightBoxDOM() {

    }

    return { id, photographerId, title, image, video, likes, date, price, getImageCardDOM, getVideoCardDOM, getImageLightBoxDOM, getVideoLightBoxDOM }
}