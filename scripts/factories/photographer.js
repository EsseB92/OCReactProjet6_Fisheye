function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        //<article></article>
        const article = document.createElement( 'article' );

        //<img src="" alt=""/>
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "Photo de profil de " + name)

        //<h2></h2>
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        //<p class="location"></p>
        const p_location = document.createElement( 'p' );
        p_location.textContent = city + ", " + country;
        p_location.setAttribute("class", "location")

        //<p class="tagline"></p>
        const p_tagline = document.createElement( 'p' );
        p_tagline.textContent = tagline;
        p_tagline.setAttribute("class", "tagline")

        //<p class="price"></p>
        const p_price = document.createElement( 'p' );
        p_price.textContent = price + "€/jour";
        p_price.setAttribute("class", "price")

        // Ajout dans <article>
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);

        return (article);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}