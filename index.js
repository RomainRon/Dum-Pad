
document.addEventListener("keydown", function (event) {
  document.querySelector(`div[data-key="${event.keyCode}"]`).classList.add("playing")
  document.querySelector(`audio[data-key="${event.keyCode}"]`).play()


})
document.addEventListener("keyup", function (event) {
  document.querySelector(`div[data-key="${event.keyCode}"]`).classList.remove("playing")

})
let btn = document.querySelector("button")
btn.addEventListener('click', function () {
  beatBox(300)
})
function playSound(key, keyCode, time) {
  return new Promise((resolve) => {
    {

      setTimeout(() => {
        resolve(simulateKey(key, keyCode))

      }, time)
    }
  })
}

async function beatBox(time) {
  await playSound("A", 65, time)
  await playSound("Z", 90, time)
  await playSound("E", 69, time)
  await playSound("Q", 81, time)
  await playSound("S", 83, time)
  await playSound("D", 68, time)
  await playSound("W", 87, time)
  await playSound("X", 88, time)
  await playSound("C", 67, time)
  

}
function simulateKey(key, keyCode) {
  let keys = new KeyboardEvent("keydown", { key: key, keyCode: keyCode });
  document.dispatchEvent(keys)
  setTimeout(() => {
    let up = new KeyboardEvent("keyup", { key: key, keyCode: keyCode });
    document.dispatchEvent(up)
  }, 200)
}