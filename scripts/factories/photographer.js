function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const IMG_SRC = `./assets/photographers/${portrait}`;
    const LOCATION = `${city}, ${country}`;
    const RATE = `${price}€/jour`;
    const ALT = `Photo de profil de ${name}`;
    const A_HREF = `./photographer.html?id=${id}`;
    const A_TITLE = `Lien vers le profil de ${name}`;
    const P_ARIA_LOCATION = `Localisation : ${LOCATION}`;
    const P_ARIA_TAGLINE = `Devise : ${tagline}`;
    const P_ARIA_RATE = `Tarif : ${RATE}`;
    const BUTTON_ARIA = "Cliquer pour me contacter";

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("cards__item", "card");
        article.setAttribute("role", "article");
        
        const a_link = document.createElement( 'a' );
        a_link.href = A_HREF;
        a_link.classList.add("card__link");
        a_link.title = A_TITLE;
        a_link.setAttribute("role", "link");

        const img = document.createElement( 'img' );
        img.src = IMG_SRC;
        img.alt = ALT;
        img.classList.add("card__image");
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.classList.add("card__title");
        
        const p_location = document.createElement( 'p' );
        p_location.textContent = LOCATION;
        p_location.classList.add("card__location");
        p_location.setAttribute("aria-label", P_ARIA_LOCATION);

        const p_tagline = document.createElement( 'p' );
        p_tagline.textContent = tagline;
        p_tagline.classList.add("card__tagline");
        p_tagline.setAttribute("aria-label", P_ARIA_TAGLINE);

        const p_price = document.createElement( 'p' );
        p_price.textContent = RATE;
        p_price.classList.add("card__price");
        p_price.setAttribute("aria-label", P_ARIA_RATE);

        a_link.appendChild(img);
        a_link.appendChild(h2);
        article.appendChild(a_link);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);

        return article;
    }

    function getUserHeaderDOM() {
        const div_header = document.createElement( 'div' );
        div_header.classList.add("photographer__header");
        
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        h1.classList.add("photographer__title");

        const p_location = document.createElement( 'p' );
        p_location.textContent = LOCATION;
        p_location.classList.add("photographer__location");

        const p_tagline = document.createElement( 'p' );
        p_tagline.textContent = tagline;
        p_tagline.classList.add("photographer__tagline");

        const button = document.createElement( 'button' );
        button.textContent = "Contactez-moi";
        button.classList.add("contact_button", "photographer__button");
        button.onclick = displayModal;
        button.setAttribute("tabindex", 0);
        button.setAttribute("aria-label", BUTTON_ARIA);

        const img = document.createElement( 'img' );
        img.src = IMG_SRC;
        img.alt = ALT;
        img.classList.add("photographer__image", "card__image");

        const p_rate = document.createElement( 'p' );
        p_rate.textContent = RATE;
        p_rate.classList.add("sidebar__rate");
        
        div_header.appendChild(h1);
        div_header.appendChild(p_location);
        div_header.appendChild(p_tagline);

        return [div_header, button, img, p_rate];
    }

    return { getUserCardDOM, getUserHeaderDOM }
}

