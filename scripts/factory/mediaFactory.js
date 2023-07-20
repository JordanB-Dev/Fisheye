const mediaTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { id, photographerId, title, image, video, likes, date, price } = data
  console.log(data)

  const getMediaCardDOM = () => {
    if (video) {
      const mediaVideo = `assets/images/medias/${idPage}/${video}`

      const article = document.createElement('article')

      const videoDOM = document.createElement('video')
      const source = document.createElement('source')
      videoDOM.setAttribute('controls', 'controls')
      videoDOM.setAttribute('aria-label', `Video ${title}`)
      videoDOM.setAttribute('type', 'video')
      source.setAttribute('src', mediaVideo)
      source.setAttribute('aria-label', `Source de la video ${title}`)
      source.setAttribute('type', 'video/mp4')
      article.append(videoDOM)
      article.appendChild(source)
      videoDOM.appendChild(source)

      const h2 = document.createElement('h2')
      h2.textContent = title
      h2.setAttribute('aria-label', 'Titre de la video')
      article.appendChild(h2)

      return article
    } else {
      const picture = `assets/images/medias/${idPage}/${image}`
      const article = document.createElement('article')

      const img = document.createElement('img')
      img.title = title
      img.alt = title
      img.setAttribute('aria-label', `Photo ${title}`)
      img.setAttribute('src', picture)
      article.appendChild(img)

      const h2 = document.createElement('h2')
      h2.textContent = title
      h2.setAttribute('aria-label', 'Titre de l`image')
      article.appendChild(h2)

      return article
    }
  }
  return {
    getMediaCardDOM,
  }
}
