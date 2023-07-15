const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(id)

const getPhotographer = async () => {
  const data = await fetch('./data/photographers.json')
    .then((response) => response.json())
    .catch((error) => console.log(error))

  const photographerData = data.photographers.filter(
    (photographer) => photographer.id == id
  )

  return {
    photographer: {
      photographerData: [...photographerData],
    },
  }
}

const displayData = async (photographer) => {
  photographer.photographerData.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
    photographerModel.getUserDOM()
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const { photographer } = await getPhotographer()
  displayData(photographer)
}

init()
