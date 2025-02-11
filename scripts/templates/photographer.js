// eslint-disable-next-line no-unused-vars
const photographerTemplate = (data) => {
  const { name, portrait, city, country, tagline, price, id } = data
  const picture = `assets/images/photographers/${portrait}`

  // Update DOM elements with photographer details.
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

  // Update the header DOM elements with the photographer's details.
  const getPhotographerDOM = () => {
    const photographProfil = document.querySelector('.photograph-header')
    photographProfil.insertAdjacentHTML(
      'beforeend',
      `<div class="photograph-header_main">
      <div class="photograph-header_container">
      <h1 class="photograph-header_name" aria-label="Nom du photographe">${name}</h1>
      <h2 class="photograph-header_location" aria-label="Adresse du photographe">${city}, ${country}</h2>
      <p class="photograph-header_tagline" aria-label="Slogan du photographe">${tagline}</p>
    </div>
    <div class="photograph-header_button">
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    </div>
      <div class="photograph-header_img">
      <img class="photograph-header_picture"src="${picture}" alt="${name}" aria-label="Photo du photographe ${name}"></img>
    </div>
    </div>
    `
    )

    // Form contact modal title
    const contactTitle = document.querySelector('.title_modal')
    contactTitle.textContent = `Contactez-moi ${name}`
    console.log(data)

    return photographProfil
  }

  return { getPhotographerDOM, getUserCardDOM }
}
