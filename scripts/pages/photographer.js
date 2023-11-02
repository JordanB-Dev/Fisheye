// Get the parameters from the current page's URL.
const params = new URLSearchParams(window.location.search)
// Get the value of the "id" URL parameter.
const id = params.get('id')
// Get the parameters from the current page's URL.
const paramSort = new URLSearchParams(window.location.search)
// Get the value of the "popularity, date, or title" URL parameter.
const sort = paramSort.get('sort')

// Async function to retrieve photographers data from the JSON file.
const getPhotographer = async () => {
  const errorApi = document.querySelector('main')
  // Data retrieved from the JSON
  const data = await fetch('./data/photographers.json')
    .then((response) => response.json())
    .catch((error) => {
      errorApi.insertAdjacentHTML(
        'beforeend',
        `<center><h1>404 NOT FOUND</h1></center>`
      )
      console.log('Error api:' + ' ' + error)
    })

  // extract photographer objects by photographer ID
  const photographerData = data.photographers.filter(
    (photographer) => photographer.id == id
  )

  // extract media objects by photographer ID
  const mediaData = data.media.filter((media) => media.photographerId == id)

  // Sort the media by popularity, date, and title.
  if (sort === 'popularity') {
    mediaData.sort((a, b) => b.likes - a.likes)
  } else if (sort === 'date') {
    mediaData.sort((a, b) => new Date(b.date) - new Date(a.date))
  } else if (sort === 'title') {
    mediaData.sort((a, b) => a.title.localeCompare(b.title))
  }

  // Returns the photographers and media tables only once
  return {
    photographer: {
      photographerData: [...photographerData],
      mediaData: [...mediaData],
    },
  }
}

// Async function to display data from photographers "photographer.js getPhotographerDOM()".
const displayData = async (photographer) => {
  photographer.photographerData.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(photographer)
    photographerModel.getPhotographerDOM()
  })
}

// Async function to display media data in the dedicated .media_section "media.js getMediaCardDOM()"
const displayMedia = async (photographer) => {
  const mediaSection = document.querySelector('.media_section')

  photographer.mediaData.forEach((media) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaTemplate(media)
    const mediaCardDOM = mediaModel.getMediaCardDOM()
    mediaSection.appendChild(mediaCardDOM)
  })
}

// Async function to display media data in the dedicated .lightbox_container "lightbox.js getLightBoxCardDOM()"
const displayLightBox = async (photographer) => {
  const lightBoxContainer = document.querySelector('.lightbox_container')

  photographer.mediaData.forEach((media) => {
    // eslint-disable-next-line no-undef
    const lightBoxModel = lightBoxTemplate(media)
    const lightBoxCardDOM = lightBoxModel.getLightBoxCardDOM()
    lightBoxContainer.appendChild(lightBoxCardDOM)
  })
}

// Async function to display the price and likes of the photographer
const displayCounts = async (photographer) => {
  const main = document.querySelector('.like_container')
  const count = document.createElement('div')

  // Get all divs with the class .media_like-count
  const mediaLike = document.querySelectorAll('.media_like-count')
  count.classList.add('counter')
  let totalLikes = 0

  // Iterate through each div and add up the total likes
  mediaLike.forEach((Likes) => {
    const likes = parseInt(Likes.textContent)
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

// Async function that retrieves parameters from the current page's URL to update the selected option.
const filterSort = document.querySelector('#sort_select')
filterSort.addEventListener('change', (event) => {
  const sortMethod = event.target.value

  paramSort.set('sort', sortMethod)
  window.location.search = paramSort.toString()

  filterSort.value = sortMethod
  console.log(sortMethod)
})

// Initialization function to retrieve photographers' data and display it.
const init = async () => {
  // Retrieve photographers' data.
  const { photographer } = await getPhotographer()
  displayData(photographer)
  displayMedia(photographer)
  displayLightBox(photographer)
  displayCounts(photographer)

  if (sort === 'date') {
    filterSort.selectedIndex = 1
  } else if (sort === 'title') {
    filterSort.selectedIndex = 2
  } else {
    filterSort.selectedIndex = 0
  }
}

init()
