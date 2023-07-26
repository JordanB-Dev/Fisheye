// eslint-disable-next-line no-unused-vars
const mediaTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { title, image, video, likes } = data

  const getMediaCardDOM = () => {
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')
    const i = document.createElement('i')
    i.setAttribute('tabIndex', '0')
    const info = document.createElement('div')
    const divLike = document.createElement('div')

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

      h2.setAttribute('aria-label', `Titre de la video: ${title}`)
    } else {
      const picture = `assets/images/medias/${idPage}/${image}`

      const img = document.createElement('img')
      img.title = title
      img.alt = title
      img.setAttribute('aria-label', `Photo ${title}`)
      img.setAttribute('src', picture)
      article.appendChild(img)

      h2.setAttribute('aria-label', `Titre de l'image: ${title}`)
    }

    info.classList.add('media_info')
    article.append(info)

    h2.textContent = title
    article.appendChild(h2)
    info.appendChild(h2)

    divLike.classList.add('media_like')
    article.append(divLike)
    info.appendChild(divLike)

    span.textContent = likes
    span.classList.add('media_like-count')
    span.setAttribute('aria-label', `Nombre de likes`)
    article.appendChild(span)
    info.appendChild(span)
    divLike.appendChild(span)

    i.classList.add('fas', 'fa-heart')
    i.setAttribute('aria-label', `Heart`)
    /* Like */
    const likeHeart = () => {
      const isLiked = span.toggleAttribute('liked')
      let likes = span.textContent
      if (isLiked) {
        likes++
        span.setAttribute('aria-label', 'Add like')
      } else {
        likes--
        span.setAttribute('aria-label', 'Remove like')
      }
      span.textContent = likes

      const mediaLike = document.querySelectorAll('.media_like-count')
      let totalLikes = 0
      mediaLike.forEach((likesDiv) => {
        const likes = parseInt(likesDiv.textContent)
        totalLikes += likes
      })
      const counterLikes = document.querySelector('.counter_likes')
      counterLikes.innerHTML = `${totalLikes} <i class="fas fa-heart"></i>`
    }

    i.addEventListener('click', () => {
      likeHeart()
    })

    i.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        likeHeart()
      }
    })

    article.appendChild(i)
    info.appendChild(i)
    divLike.appendChild(i)

    return article
  }

  return {
    getMediaCardDOM,
    mediaTemplate,
  }
}
