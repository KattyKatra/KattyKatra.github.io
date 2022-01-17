var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)

if (bombLocation === treasureLocation) {
  bombLocation = Math.floor(Math.random() * 9)
}

const treasure = (click) => {
  if (click === treasureLocation) {
    document.getElementById(click).innerHTML = "💰"
    alert("You win!")
    setTimeout(() => { window.location.reload(); }, 575);
  } else if (click === bombLocation) {
    document.getElementById(click).innerHTML = "💣"
    alert("You lose!")
    setTimeout(() => { window.location.reload(); }, 575);
  } else {
    document.getElementById(click).innerHTML = "🥥"
  }
 }
