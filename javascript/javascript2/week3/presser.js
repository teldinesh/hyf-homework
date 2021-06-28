const userInput = document.getElementById("game-timer");
const gameStarting = document.getElementById("start");
const StartNewGame = document.getElementById("new");
const gameOver = document.getElementById("game-over");


gameStarting.addEventListener("click", gameStart);
function gameStart() {
  const timeEntered = userInput.value;

  if (timeEntered == "") {
}
else{
  setTimeout(() => {
    gameOver.innerHTML = 'Game Over';
  }, timeEntered*1000
  );
  document.addEventListener("keydown", detectKeyPress);
        function detectKeyPress(event) {
            if (event.key === "s") {
                sCount++;
                countOfS.innerHTML = sCount;
            } else if (event.key === "l") {
                lCount++
                countOfL.innerHTML = lCount;
            }
        }
}
}