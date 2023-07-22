const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(id)

const getPhotographer = async () => {
  const errorApi = document.querySelector('main')
  const data = await fetch('./data/photographers.json')
    .then((response) => response.json())
    .catch((error) => {
      errorApi.insertAdjacentHTML(
        'beforeend',
        `<center><h1>404 NOT FOUND</h1></center>`
      )
      console.log('Error api:' + ' ' + error)
    })

  const photographerData = data.photographers.filter(
    (photographer) => photographer.id == id
  )

  const mediaData = data.media.filter((media) => media.photographerId == id)

  return {
    photographer: {
      photographerData: [...photographerData],
      mediaData: [...mediaData],
    },
  }
}

const displayData = async (photographer) => {
  photographer.photographerData.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(photographer)
    photographerModel.getPhotographerDOM()
  })
}

const displayMedia = async (photographer) => {
  const mediaSection = document.querySelector('.media_section')

  photographer.mediaData.forEach((media) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaTemplate(media)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })
}

const displayCounts = async (photographer) => {
  const main = document.querySelector('main')
  const count = document.createElement('div')
  const mediaLike = document.querySelectorAll('.media_like-count')
  count.classList.add('counter')
  let totalLikes = 0

  mediaLike.forEach((likesDiv) => {
    const likes = parseInt(likesDiv.textContent)
    totalLikes += likes
  })

  count.innerHTML = `<div class="counter_likes">
        ${totalLikes} <i class="fas fa-heart"></i>
    </div>
    <div class="counter_daily">
        ${photographer.photographerData[0].price} <span>€ /jour</span>
    </div>`

  main.appendChild(count)
}

const init = async () => {
  // Récupère les datas des photographes
  const { photographer } = await getPhotographer()
  displayData(photographer)
  displayMedia(photographer)
  displayCounts(photographer)
}

init()
