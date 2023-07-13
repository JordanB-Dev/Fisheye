function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const location = document.createElement("span");
    const content = document.createElement("p");
    const pricing = document.createElement("span");

    link.href = `./photographer.html?id=${id}`;
    link.title = `Aller vers la page de ${name}`;
    article.append(link);

    img.setAttribute("src", picture);
    img.title = name;
    img.alt = `Photo de ${name}`;
    article.appendChild(img);
    link.appendChild(img);

    h2.textContent = name;
    article.appendChild(h2);
    link.appendChild(h2);

    location.textContent = `${city} , ${country}`;
    location.classList.add("photograph-location");
    article.appendChild(location);

    content.textContent = tagline;
    content.classList.add("photograph-tagline");
    article.appendChild(content);

    pricing.textContent = `${price}€/jour`;
    pricing.classList.add("photograph-price");
    article.appendChild(pricing);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
