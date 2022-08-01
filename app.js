const board = [
	[ 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];
for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        //console.log(board[i][j])
    }
}

let timer = document.getElementById('timer');
let realTimer = 15;
let IntervalCounter = 600;

let interval = setInterval(startTimer, IntervalCounter);

function startTimer() {
    realTimer--;
    timer.textContent = realTimer;
    if (realTimer < 1) {
        endGame();
    }
}
function stopTimer(){

}
function endGame(){
    alert('Game Over');
    clearInterval(interval)
}