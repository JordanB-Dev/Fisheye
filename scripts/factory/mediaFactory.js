const mediaTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { id, photographerId, title, image, video, likes, date, price } = data
  console.log(data)

  const getMediaCardDOM = () => {
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')
    const i = document.createElement('i')

    if (video) {
      const mediaVideo = `assets/images/medias/${idPage}/${video}`

      const videoDOM = document.createElement('video')
      videoDOM.setAttribute('controls', 'controls')
      videoDOM.setAttribute('aria-label', `Video ${title}`)
      videoDOM.setAttribute('type', 'video')

      const source = document.createElement('source')
      source.setAttribute('src', mediaVideo)
      source.setAttribute('aria-label', `Source de la video ${title}`)
      source.setAttribute('type', 'video/mp4')
      article.append(videoDOM)
      article.appendChild(source)
      videoDOM.appendChild(source)

      h2.setAttribute('aria-label', 'Titre de la video')
    } else {
      const picture = `assets/images/medias/${idPage}/${image}`

      const img = document.createElement('img')
      img.title = title
      img.alt = title
      img.setAttribute('aria-label', `Photo ${title}`)
      img.setAttribute('src', picture)
      article.appendChild(img)

      h2.setAttribute('aria-label', 'Titre de l`image')
    }

    h2.textContent = title
    article.appendChild(h2)

    span.textContent = likes
    article.appendChild(span)

    i.classList.add('fas', 'fa-heart')
    article.appendChild(i)

    return article
  }
  return {
    getMediaCardDOM,
  }
}
