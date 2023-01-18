function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/${portrait}`;
    const location = `${city}, ${country}`;
    const rate = `${price}€/jour`;

    function getUserCardDOM() {
        //<article class="cards__item card"></article>
        const article = document.createElement( 'article' );
        article.setAttribute("class", "cards__item card")
        article.setAttribute("role", "article")
        
        //<a href="./photographer.html?id=..." class="card__link" title="Lien vers le profil de Mimi Keel" role="link"></a>
        const a_link = document.createElement( 'a' );
        a_link.setAttribute("href", "./photographer.html?id=" + id)
        a_link.setAttribute("class", "card__link")
        a_link.setAttribute("title", "Lien vers le profil de " + name)
        a_link.setAttribute("role", "link")

        //<img src="./assets/photographers/....jpg" class="card__image" alt="Photo de profil de ..."/>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("class", "card__image")
        img.setAttribute("alt", "Photo de profil de " + name)

        //<h2 class="card__title"></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("class", "card__title")
        
        //<p class="card__location"></p>
        const p_location = document.createElement( 'p' );
        p_location.textContent = location;
        p_location.setAttribute("class", "card__location")

        //<p class="card__tagline"></p>
        const p_tagline = document.createElement( 'p' );
        p_tagline.textContent = tagline;
        p_tagline.setAttribute("class", "card__tagline")

        //<p class="card__price"></p>
        const p_price = document.createElement( 'p' );
        p_price.textContent = rate;
        p_price.setAttribute("class", "card__price")

        // Ajout dans <article>
        a_link.appendChild(img);
        a_link.appendChild(h2);
        article.appendChild(a_link);
        // article.appendChild(img);
        // article.appendChild(h2);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);

        return (article);
    }

    function getUserHeaderDOM() {
        //<div class="photographer__header"></div>
        const div_header = document.createElement( 'div' );
        div_header.setAttribute("class", "photographer__header")
        
        //<h1 class="photographer__title"></h1>
        const h1 = document.createElement( 'h1' );
        h1.textContent = name
        h1.setAttribute("class", "photographer__title")

        //<p class="photographer__location"></p>
        const p_location = document.createElement( 'p' );
        p_location.textContent = location;
        p_location.setAttribute("class", "photographer__location")

        //<p class="photographer__tagline"></p>
        const p_tagline = document.createElement( 'p' );
        p_tagline.textContent = tagline;
        p_tagline.setAttribute("class", "photographer__tagline")

        //<button class="photographer__contact-button"></button>
        const button = document.createElement( 'button' );
        button.textContent = "Contactez-moi";
        button.setAttribute("class", "contact_button photographer_-button");
        button.setAttribute("onclick", "displayModal()");

        //<img src="./assets/photographers/....jpg" class="card__image" alt="Photo de profil de ..."/>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("class", "photographer__image card__image")
        img.setAttribute("alt", "Photo de profil de " + name)

        //<p class="sidebar__rate"></p>
        const p_rate = document.createElement( 'p' );
        p_rate.textContent = rate;
        p_rate.setAttribute("class", "sidebar__rate")

        // Ajout dans <article>
        
        div_header.appendChild(h1);
        div_header.appendChild(p_location);
        div_header.appendChild(p_tagline);
        return [div_header, button, img, p_rate];
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM, getUserHeaderDOM }
}

