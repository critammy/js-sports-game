//1. increase number as shots are taken
//2. random chance
//3. set goals
//4. reset button



//Team One
const teamOneShots = document.querySelector("#teamone-numshots")
const teamOneButton = document.querySelector("#teamone-shoot-button")
teamOneButton.addEventListener("click", function() {
     let teamOneShotsTaken = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken   
    console.log(" + button clicked");
    if (Math.random() < .5) {
        console.log (" + team scored")}
})

//Team Two
const teamTwoShots = document.querySelector("#teamtwo-numshots")
const teamTwoButton = document.querySelector("#teamtwo-shoot-button")
teamTwoButton.addEventListener("click", function() {
     let teamTwoShotsTaken = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = teamTwoShotsTaken   
    console.log(" + button clicked");
    if (Math.random() < .5){
        console.log (" + team scored")}
})
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")


//Reset button