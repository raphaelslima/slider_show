//DATA INITIAL

let totalSlides = document.querySelectorAll('.slider--item').length
let currentSlide = 0

// EVENTS
document.querySelector(
  '.slider--width'
).style.width = `calc(100vw * ${totalSlides})`

//function

function goBack() {
  currentSlide--
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }
  updateMargin()
}

function goNext() {
  currentSlide++
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0
  }
  updateMargin()
}

function updateMargin() {
  let slideItemWidth = document.querySelector('.slider--item').clientWidth
  let newMargin = currentSlide * slideItemWidth
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 20000)
