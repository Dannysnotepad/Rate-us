/*
*Rate us
*from
*Dannysnotepad
*/

const rating1 = document.querySelector('.btn1')
const rating2 = document.querySelector('.btn2')
const rating3 = document.querySelector('.btn3')
const rating4 = document.querySelector('.btn4')
const rating5 = document.querySelector('.btn5')

const submit = document.querySelector('.submit')



rating1.addEventListener('click', () => {
  if(rating1.classList == 'rate btn1'){
    rating1.classList.add('rated')
  } else if(rating1.classList == 'rate btn1 rated'){
    rating1.classList.remove('rated')
  }
})

rating2.addEventListener('click', () => {
  if (rating2.classList == 'rate btn2') {
    rating2.classList.add('rated')
  } else if (rating2.classList == 'rate btn2 rated') {
    rating2.classList.remove('rated')
  }
})

rating3.addEventListener('click', () => {
  if (rating3.classList == 'rate btn3') {
    rating3.classList.add('rated')
  } else if (rating3.classList == 'rate btn3 rated') {
    rating3.classList.remove('rated')
  }
})

rating4.addEventListener('click', () => {
  if (rating4.classList == 'rate btn4') {
    rating4.classList.add('rated')
  } else if (rating4.classList == 'rate btn4 rated') {
    rating4.classList.remove('rated')

  }
})

rating5.addEventListener('click', () => {
  if (rating5.classList == 'rate btn5') {
    rating5.classList.add('rated')
  } else if (rating5.classList == 'rate btn5 rated') {
    rating5.classList.remove('rated')
  }
})


submit.addEventListener('click', () => {
  alert('Thanks for your rating')
})