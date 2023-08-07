const modal = document.getElementById('contact_modal')
const main = document.getElementById('main')
const form = document.querySelector('form')

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea[id="message"]'
)

let firstName, lastName, email, message

const regexText = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/i

// eslint-disable-next-line no-unused-vars
const displayModal = () => {
  modal.style.display = 'block'
  main.setAttribute('aria-hidden', 'true')
  modal.setAttribute('aria-hidden', 'false')
  modal.setAttribute('aria-modal', 'true')
}

const closeModal = () => {
  modal.style.display = 'none'
  main.setAttribute('aria-hidden', 'false')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('aria-modal', 'false')
}

const errorDisplay = (tag, message, valid) => {
  const span = document.querySelector('.' + tag + '-container > span')

  if (!valid) {
    span.classList.add('error')
    span.textContent = message
  } else {
    span.classList.remove('error')
    span.textContent = message
  }
}

const addError = (border) => {
  border.setAttribute('data-error', 'true')
  border.setAttribute('data-succes', 'false')
}

const addSucces = (border) => {
  border.setAttribute('data-error', 'false')
}

const firstChecker = (value) => {
  const border = document.getElementById('first')

  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'first',
      'Veuillez entrer 2 caractères ou plus pour le champ prénom.'
    )
    addError(border)
    firstName = null
  } else if (!value.match(regexText)) {
    errorDisplay(
      'first',
      'Le prénom ne doit pas contenir de caractères spéciaux'
    )
    addError(border)
    firstName = null
  } else {
    errorDisplay('first', '', true)
    addSucces(border)
    firstName = value
  }
}

const lastChecker = (value) => {
  const border = document.getElementById('last')

  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'last',
      'Veuillez entrer 2 caractères ou plus pour le champ nom.'
    )
    addError(border)
    lastName = null
  } else if (!value.match(regexText)) {
    errorDisplay('last', 'Le nom ne doit pas contenir de caractères spéciaux')
    addError(border)
    lastName = null
  } else {
    errorDisplay('last', '', true)
    addSucces(border)
    lastName = value
  }
}

const emailChecker = (value) => {
  const border = document.getElementById('email')

  if (
    !value.match(
      /^[a-zA-Z0-9æœ.!#$%&’*+/=?^_`{|}~"(),:;<>@[\]-]+@([\w-]+\.)+[\w-]{2,4}$/i
    )
  ) {
    errorDisplay('email', " L'adresse électronique n'est pas valide")
    addError(border)
    email = null
  } else {
    errorDisplay('email', '', true)
    addSucces(border)
    email = value
  }
}

const messageChecker = (value) => {
  const border = document.getElementById('message')

  if (value.length < 20 || value.length > 150) {
    errorDisplay(
      'message',
      'Veuillez entrer 20 caractères minimum ou 150 caractères maximum.'
    )
    addError(border)
    message = null
  } else if (!value.match(regexText)) {
    errorDisplay(
      'message',
      'Le nessage ne doit pas contenir de caractères spéciaux'
    )
    addError(border)
    message = null
  } else {
    errorDisplay('message', '', true)
    addSucces(border)
    message = value
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    switch (e.target.id) {
      case 'first':
        firstChecker(e.target.value)
        break
      case 'last':
        lastChecker(e.target.value)
        break
      case 'email':
        emailChecker(e.target.value)
        break
      case 'message':
        messageChecker(e.target.value)
        break
      default:
        null
    }
  })
})

const keyCodeEscape = (e) => {
  if (e.keyCode === 27) {
    e.preventDefault()
    closeModal()
  }
}

document.addEventListener('keydown', keyCodeEscape)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (firstName && lastName && email && message) {
    const data = {
      firstName,
      lastName,
      email,
      message,
    }
    console.log(data)
    closeModal()
  } else {
    alert('veuillez remplir correctement les champs')
  }
})
