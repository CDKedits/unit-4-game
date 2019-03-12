let randomNum = Math.floor(Math.random() * 120)
let currentNum
let wins = 0
let losses = 0
let rose
let alexandrite
let amethyst
let opal

const init = () => {
  currentNum = 0
  document.querySelector(`#currentNum`).textContent = `${currentNum}`
  randomNum = Math.floor(Math.random() * 102) + 19
  document.querySelector(`#randomNum`).textContent = ``
  document.querySelector(`#randomNum`).append(`${randomNum}`)
  document.querySelector(`#wins`).textContent = `Wins: ${wins}`
  document.querySelector(`#losses`).textContent = `Losses: ${losses}`
  rose = Math.floor(Math.random() * 11) + 1
  alexandrite = Math.floor(Math.random() * 11) + 1
  amethyst = Math.floor(Math.random() * 11) + 1
  opal = Math.floor(Math.random() * 11) + 1
}

init()

document.querySelector(`#rose`).addEventListener(`click`, function () {
  currentNum += rose
  document.querySelector(`#currentNum`).textContent = `${currentNum}`
  checker()
})

document.querySelector(`#alexandrite`).addEventListener(`click`, function () {
  currentNum += alexandrite
  document.querySelector(`#currentNum`).textContent = `${currentNum}`
  checker()
})

document.querySelector(`#amethyst`).addEventListener(`click`, function () {
  currentNum += amethyst
  document.querySelector(`#currentNum`).textContent = `${currentNum}`
  checker()
})

document.querySelector(`#opal`).addEventListener(`click`, function () {
  currentNum += opal
  document.querySelector(`#currentNum`).textContent = `${currentNum}`
  checker()
})

const checker = () => {
  if (currentNum === randomNum) {
    alert(`Yay you won!`)
    wins++
    alert(`Let's start again`)
    init()
  } else if (currentNum > randomNum) {
    alert(`Oh no, you lost!`)
    losses++
    alert(`Let's start again`)
    init()
  } else {
  }
}