function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const picture = `./assets/photographers/medias/${image}`;
    const movie = `./assets/photographers/medias/${video}`;

    function getImageCardDOM() {
        //<article class="media"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "media")

        //<img class="medias__image"></img>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", title)
        img.setAttribute("class", "media__image")

        //<footer class="medias__footer"></footer>
        const footer = document.createElement( 'footer' );
        footer.setAttribute("class", "media__footer")
        
        //<h2 class="medias__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "media__title")

        article.appendChild(img)
        footer.appendChild(h2)
        article.appendChild(footer)
        return article
    }

    function getVideoCardDOM() {
        //<article class="media"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "media")

        //<video class="medias__image"></video>
        const video = document.createElement( 'video' );
        video.setAttribute("controls", "")
        video.setAttribute("class", "media__video")

        //<source class="medias__image"></source>
        const source = document.createElement( 'source' );
        source.setAttribute("src", movie)
        source.setAttribute("type", "video/mp4")
        source.setAttribute("class", "media__source")

        //<footer class="medias__footer"></footer>
        const footer = document.createElement( 'footer' );
        footer.setAttribute("class", "media__footer")
        
        //<h2 class="medias__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = title
        h2.setAttribute("class", "media__title")

        video.appendChild(source)
        article.appendChild(video)
        footer.appendChild(h2)
        article.appendChild(footer)
        return article
    }

    return { id, photographerId, title, image, video, likes, date, price, getImageCardDOM, getVideoCardDOM }
}