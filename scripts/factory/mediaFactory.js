const mediaTemplate = (data) => {
  const { id, photographerId, title, image, likes, date, price } = data

  const getMediaCardDOM = () => {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', 'test')
    const h2 = document.createElement('h2')
    h2.textContent = 'test'
    article.appendChild(img)
    article.appendChild(h2)
    console.log(data)

    return article
  }
  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    getMediaCardDOM,
  }
}
