const photographerTemplate = (data) => {
  const { name, portrait, city, country, tagline, price, id } = data
  const picture = `assets/photographers/${portrait}`

  const getUserCardDOM = () => {
    const article = document.createElement('article')
    const link = document.createElement('a')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const location = document.createElement('span')
    const content = document.createElement('p')
    const pricing = document.createElement('span')

    link.href = `./photographer.html?id=${id}`
    link.title = `Aller vers la page de ${name}`
    article.append(link)

    img.setAttribute('src', picture)
    img.title = name
    img.alt = `Photo du photographe ${name}`
    img.setAttribute('aria-label', `Photo du photographe ${name}`)
    article.appendChild(img)
    link.appendChild(img)

    h2.textContent = name
    h2.setAttribute('aria-label', 'Nom du photographe')
    article.appendChild(h2)
    link.appendChild(h2)

    location.textContent = `${city} , ${country}`
    location.classList.add('photograph-location')
    location.setAttribute('aria-label', 'Adresse du photographe')
    article.appendChild(location)

    content.textContent = tagline
    content.classList.add('photograph-tagline')
    content.setAttribute('aria-label', 'Slogan du photographe')
    article.appendChild(content)

    pricing.textContent = `${price}€/jour`
    pricing.classList.add('photograph-price')
    pricing.setAttribute('aria-label', 'Le prix journalier du photographe')
    article.appendChild(pricing)

    return article
  }

  const getUserDOM = () => {
    console.log(name)
  }

  return {
    name,
    portrait,
    city,
    country,
    tagline,
    price,
    id,
    getUserDOM,
    getUserCardDOM,
  }
}
