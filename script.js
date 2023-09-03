let score = 0;
cross = true;

audio=new Audio("music.mp3")
audiogo=new Audio("gameover.mp3")
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = (e) => {
    // console.log("Key code is :", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino")
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX + 150 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX - 150+ "px";
    }
}
setInterval(() => {
    dino = document.querySelector(".dino")
    gameOver = document.querySelector(".gameOver")
    obstacle = document.querySelector(".obstacle")
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 80 && offsetY <50) {
        gameOver.innerHTML = "Game Over -Reload To ReStart";
        obstacle.classList.remove("obstacleAni")
        obstacle.style.left=ox +  "px";
        obstacle.style.top=oy + "px";
        audiogo.play()
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
        }, 1000);
        }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));

            newDur = aniDur - 0.5;
            if(newDur<3){
                newDur=2.7;
            }
            obstacle.style.animationDuration = newDur + "s";
            // console.log(newDur);
        }, 500);

    }
}, 100);
function updateScore(score) {
    scoreCont.innerHTML = "Your Score is:" + score
}