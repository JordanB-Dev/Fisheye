// Function to update the lightbox with media details.
// eslint-disable-next-line no-unused-vars
const lightBoxTemplate = (data) => {
  const params = new URLSearchParams(window.location.search)
  const idPage = params.get('id')
  const { id, title, image, video } = data

  // Update DOM elements with media details.
  const getLightBoxCardDOM = () => {
    const divContent = document.createElement('div')
    const divContainer = document.createElement('div')
    const divH2 = document.createElement('div')
    const h2 = document.createElement('h2')

    divContent.classList.add('lightbox_content')

    divContainer.classList.add('lightbox_content-container')
    divContent.appendChild(divContainer)

    if (video) {
      const mediaVideo = `assets/images/medias/${idPage}/${video}`

      const videoDOM = document.createElement('video')
      videoDOM.classList.add('media_img_video')
      videoDOM.setAttribute('controls', 'controls')
      videoDOM.setAttribute('autoplay', 'on')
      videoDOM.setAttribute('aria-label', `Video ${title}`)
      videoDOM.setAttribute('_id', `${id}`)

      const source = document.createElement('source')
      source.classList.add('media_source')
      source.setAttribute('src', mediaVideo)
      source.setAttribute('aria-label', `Source de la video ${title}`)
      source.setAttribute('type', 'video/mp4')
      source.setAttribute('_id', `${id}`)

      divContainer.append(videoDOM)
      divContainer.appendChild(source)
      videoDOM.appendChild(source)

      h2.setAttribute('aria-label', `Titre de la video: ${title}`)
    } else {
      const picture = `assets/images/medias/${idPage}/${image}`

      const img = document.createElement('img')
      img.title = title
      img.alt = title
      img.setAttribute('aria-label', `Photo ${title}`)
      img.setAttribute('src', picture)
      img.classList.add('media_img_video')
      img.setAttribute('_id', `${id}`)

      divContainer.appendChild(img)

      h2.setAttribute('aria-label', `Titre de l'image: ${title}`)
    }

    divH2.classList.add('lightbox_div-h2')
    divContainer.appendChild(divH2)

    h2.textContent = title
    divContainer.appendChild(h2)
    divH2.appendChild(h2)

    // Check if the clicked image or video has the same identifier (ID) to open it in a lightbox.
    const mediaLinks = document.querySelectorAll('.media_link')
    mediaLinks.forEach((lightbox) => {
      lightbox.addEventListener('click', (e) => {
        e.preventDefault()
        const LightboxContent = document.querySelectorAll('.lightbox_content')
        const _id = lightbox
          .querySelector('.media_img_video')
          .getAttribute('_id')

        for (let i = 0; i < LightboxContent.length; i++) {
          let MediaItem = LightboxContent[i]
          const lightboxID =
            MediaItem.querySelector('.media_img_video').getAttribute('_id')
          if (lightboxID === _id) {
            MediaItem.style.display = 'flex'
          } else {
            MediaItem.style.display = 'none'
          }
        }
        openLightbox()
      })
    })

    return divContent
  }

  return {
    getLightBoxCardDOM,
    lightBoxTemplate,
  }
}

// Open
const openLightbox = () => {
  document.querySelector('.lightbox').style.display = 'block'
  document.querySelector('.lightbox').setAttribute('aria-hidden', 'false')
}

// Close
const closeLightbox = () => {
  document.querySelector('.lightbox').style.display = 'none'
  document.querySelector('.lightbox').setAttribute('aria-hidden', 'true')
}

const closeButton = document.querySelector('.close_btn')
closeButton.setAttribute('aria-label', 'Close Lightbox')
closeButton.addEventListener('click', () => {
  closeLightbox()
})

// KEYBOARD
const keyCodeLightBox = (e) => {
  if (e.keyCode === 27) {
    e.preventDefault()
    closeLightbox()
  }

  if (e.keyCode === 37) {
    e.preventDefault()
    showPrevMedia()
  }

  if (e.keyCode === 39) {
    e.preventDefault()
    showNextMedia()
  }
}

document.addEventListener('keydown', keyCodeLightBox)

const nextButton = document.querySelector('.next_btn')
nextButton.setAttribute('aria-label', 'next media')
nextButton.addEventListener('click', () => {
  showNextMedia()
})

// Function to display the next media in the lightbox.
const showNextMedia = () => {
  const medias = document.querySelectorAll('.lightbox_content')
  for (let i = 0; i < medias.length; i++) {
    let currentMedia = medias[i]
    if (currentMedia.style.display === 'flex') {
      let nextMedia = medias[i + 1]
      if (nextMedia) {
        currentMedia.style.display = 'none'
        nextMedia.style.display = 'flex'
      }
      break
    }
  }
}

const prevButton = document.querySelector('.prev_btn')
prevButton.setAttribute('aria-label', 'previous media')
prevButton.addEventListener('click', () => {
  showPrevMedia()
})

// Function to display the next media in the lightbox.
const showPrevMedia = () => {
  const medias = document.querySelectorAll('.lightbox_content')
  for (let i = 0; i < medias.length; i++) {
    let currentMedia = medias[i]
    if (currentMedia.style.display === 'flex') {
      let prevMedia = medias[i - 1]
      if (prevMedia) {
        currentMedia.style.display = 'none'
        prevMedia.style.display = 'flex'
      }
      break
    }
  }
}
