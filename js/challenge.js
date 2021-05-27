let intervalID = setInterval(() => {
  const countElem = document.getElementById('counter')
  countElem.textContent = 1 + parseInt(countElem.textContent)
}, 1000)

document.getElementById('minus').addEventListener('click', () => {
  const countElem = document.getElementById('counter')
  if (countElem.textContent !== '0') {
    countElem.textContent = parseInt(countElem.textContent) - 1
  }
})

document.getElementById('plus').addEventListener('click', () => {
  const countElem = document.getElementById('counter')
  countElem.textContent = parseInt(countElem.textContent) + 1
})

const likeTracker = {
  // 1: {
  //   count: 3,
  //   li: <li></li>
  // }
}
document.getElementById('heart').addEventListener('click', () => {
  const countElem = document.getElementById('counter')
  const curNumber = countElem.textContent
  if (likeTracker[curNumber]) {
    const li = likeTracker[curNumber].li
    li.textContent = `${curNumber} has been liked ${likeTracker[curNumber].count} times`
    likeTracker[curNumber].count++
  } else {
    const li = document.createElement('li')
    li.textContent = `${curNumber} has been liked 1 times`
    document.querySelector('.likes').appendChild(li)
    likeTracker[curNumber] = {
      count: 1,
      li: li,
    }
  }
})

const pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener('click', () => {
  if (pauseBtn.textContent.indexOf('pause') !== -1) {
    clearInterval(intervalID)
    pauseBtn.textContent = 'resume'
    document.getElementById('minus').disabled = true
    document.getElementById('plus').disabled = true
    document.getElementById('heart').disabled = true
  } else {
    pauseBtn.textContent = 'pause'
    // TODO: DRY up
    intervalID = setInterval(() => {
      const countElem = document.getElementById('counter')
      countElem.textContent = 1 + parseInt(countElem.textContent)
    }, 1000)
    document.getElementById('minus').disabled = false
    document.getElementById('plus').disabled = false
    document.getElementById('heart').disabled = false
  }
})

document.addEventListener('submit', e => {
  e.preventDefault()
  const pElem = document.createElement('p')
  pElem.textContent = document.getElementById('comment-input').value
  document.getElementById('list').appendChild(pElem)
  document.getElementById('comment-form').reset()
})
