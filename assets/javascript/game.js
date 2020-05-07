//1. increase number as shots are taken
//2. random chance
//3. set goals
//4. reset button

 let goal1 = 0;
 let goal2 = 0;
 let shots = 0;
 let reset = 0;


//Team One
const teamOneShots = document.querySelector("#teamone-numshots")
const teamOneButton = document.querySelector("#teamone-shoot-button")
let teamOneGoals = document.querySelector("#teamone-numgoals")
teamOneButton.addEventListener("click", function () {
    let shots = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = shots
    console.log(" + button clicked");
    if (Math.random() < .5)  {
        console.log(" + team scored")
    let goal = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = goal
    goal1 = goal
    }
})



//Team Two

const teamTwoShots = document.querySelector("#teamtwo-numshots")
const teamTwoButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
teamTwoButton.addEventListener("click", function () {
    let shots = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = shots
    console.log(" + button clicked");
    if (Math.random() < .5) {
        console.log(" + team scored")
    let goal = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = goal
    goal2 = goal
    }
})

//Reset button
let resetButton = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
resetButton.addEventListener("click", function () {
    let reset = Number(resetNumber.innerHTML) + 1;
    resetNumber.innerHTML = reset
    if (goal1 > goal2) {
        console.log("teamOne Wins")
    } else {
        console.log("teamTwo Wins")
    }
teamOneGoals.innerHTML = 0;
teamTwoGoals.innerHTML = 0;
teamOneShots.innerHTML = 0;
teamTwoShots.innerHTML = 0;
goal1 = 0;
goal2 = 0; 
})
