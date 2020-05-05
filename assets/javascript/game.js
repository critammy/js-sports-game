//1. increase number as shots are taken
//2. random chance
//3. set goals
//4. reset button
let goal = 0;
let shots = 0;
let reset = 0;


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
let teamOneGoals = document.querySelector("#teamone-numgoals")
let goal = Number(teamOneGoals.innerHTML) + 1;


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
const teamTwoGoals = document.querySelector("#teamtwo-numgoals")
let goal = Number(teamTwoGoals.innerHTML) + 1;


//Reset button

const resetButton = document.querySelector("#reset-button")
const resetNumber = document.querySelector("#num-resets")
resetButton.addEventListener ("click", function () {
    
})