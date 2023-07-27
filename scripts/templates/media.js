// eslint-disable-next-line no-unused-vars
const mediaTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { id, title, image, video, likes } = data

  const getMediaCardDOM = () => {
    const article = document.createElement('article')
    const a = document.createElement('a')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')
    const i = document.createElement('i')
    i.setAttribute('tabIndex', '0')
    const info = document.createElement('div')
    const divLike = document.createElement('div')

    if (video) {
      const mediaVideo = `assets/images/medias/${idPage}/${video}`

      a.classList.add('media_link')
      a.setAttribute('href', mediaVideo)
      article.appendChild(a)

      const videoDOM = document.createElement('video')
      videoDOM.classList.add('media_img_video')
      videoDOM.setAttribute('controls', 'controls')
      videoDOM.setAttribute('_id', `${id}`)
      videoDOM.setAttribute('aria-label', `Video ${title}`)
      videoDOM.setAttribute('type', 'video')

      const source = document.createElement('source')
      source.classList.add('media_source')
      source.setAttribute('src', mediaVideo)
      source.setAttribute('aria-label', `Source de la video ${title}`)
      source.setAttribute('_id', `${id}`)
      source.setAttribute('type', 'video/mp4')

      article.append(videoDOM)
      article.appendChild(source)

      a.appendChild(videoDOM)
      a.appendChild(source)
      videoDOM.appendChild(source)

      h2.setAttribute('aria-label', `Titre de la video: ${title}`)
    } else {
      const picture = `assets/images/medias/${idPage}/${image}`

      a.classList.add('media_link')
      a.setAttribute('href', picture)
      article.appendChild(a)

      const img = document.createElement('img')
      img.title = title
      img.alt = title
      img.classList.add('media_img_video')
      img.setAttribute('aria-label', `Photo ${title}`)
      img.setAttribute('src', picture)
      img.setAttribute('_id', `${id}`)

      article.appendChild(img)
      a.appendChild(img)

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
