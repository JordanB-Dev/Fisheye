const mediaTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { id, photographerId, title, image, video, likes, date, price } = data
  const picture = `assets/images/medias/${idPage}/${image}`
  const mediaVideo = `assets/images/medias/${idPage}/${video}`

  const getMediaCardDOM = () => {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const videoDOM = document.createElement('video')
    img.setAttribute('src', picture)
    videoDOM.setAttribute('controls', 'controls')
    videoDOM.setAttribute('src', mediaVideo)
    const h2 = document.createElement('h2')
    h2.textContent = 'test'
    article.appendChild(img)
    article.appendChild(videoDOM)
    article.appendChild(h2)
    console.log(data)

    return article
  }
  return {
    id,
    photographerId,
    title,
    picture,
    video,
    likes,
    date,
    price,
    getMediaCardDOM,
  }
}
