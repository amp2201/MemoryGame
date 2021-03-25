// global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence
const maxTime = 15; // the amount of time given on every round

// global Variables
var pattern;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 775; //how long to hold each clue's light/sound
var mistakes = 0;
var interval; // interval created by setInterval
var t = maxTime; // the amount of time left on the clock

function startGame(){
  
  generatePattern();
  
  // initialize game variables
  mistakes = 0;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 750;
  
  // reset timer
  document.getElementById("time").innerHTML = "Timer: " + maxTime;
  t = maxTime;
  
  // reset mistake counter
  document.getElementById("mistakes").innerHTML = "Mistakes: 0";
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence(); 
}

function stopGame(){
  
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  clearInterval(interval); // stop the timer
  
}

function lightButton(btn){
  
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("img"+btn).className = "showImg"; // toggle image to be visible
}

function clearButton(btn){
  
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("img"+btn).className = "hideImg"; // toggle image to be hidden
}

function playSingleClue(btn){
  
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  
  // for each clue that is revealed so far
  for(let i=0;i<=progress;i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  clueHoldTime -= 60; // speeds up clue playback on each turn
  setTimeout(playInterval, delay - 1000); // set a timeout for the timer to start counting down after the final clue sounds
}

function loseGame(){
  
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }

  if (btn == pattern[guessCounter]) { // correct guess
    
    if (guessCounter == progress) { // guess for last sound of the round was correct

      t = maxTime; // reset the timer
      
      if (progress == pattern.length - 1) { // guessed the last sound correctly on the last round
    
        clearInterval(interval);
        winGame();
      
      } else { // guessed the last sound of a round correctly, but it was not the final round
    
        clearInterval(interval);
        document.getElementById("time").innerHTML = "Timer: " + maxTime;
        progress++;
        playClueSequence(); // move on to next round
      }
      
    } else { // the guess was not for the last sound of a round
  
      guessCounter++;
    }
    
  } else { // incorrect guess
  
    mistakes++;
    var mistakeCounter = "Mistakes: " + mistakes; // shows user their mistakes
    
    
    if (mistakes < 3) {
      
      // prepare to reset timer
      clearInterval(interval);
      t = maxTime;
      
      // alert player of the mistake and replay the round
      document.getElementById("mistakes").innerHTML = mistakeCounter;
      alert("You made a mistake! If you make " + (3 - mistakes) + " more, then you lose! Listen again carefully.");
      document.getElementById("time").innerHTML = "Timer: " + maxTime; // reset timer
      clueHoldTime += 60; // do not speed up the pattern
      
      playClueSequence();
      
    } else if (mistakes == 3) { // game over
      
      clearInterval(interval);
      t = maxTime;
      document.getElementById("mistakes").innerHTML = mistakeCounter;
      loseGame();
    }
  }
}

//Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 525,
  6: 580
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    document.getElementById("img"+btn).className = "showImg"; // toggle image to be visible
    tonePlaying = true
  }
}

function stopTone(btn){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
    document.getElementById("img"+btn).className = "hideImg"; // toggle image to be hidden
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// randomly generates the pattern
function generatePattern() { 
  
  pattern = [];  // clear the pattern from a previous game
  
  // populate pattern with 8 random numbers between 1 and 6
  for(let i=1; i <=8; i++) {
    var x = Math.floor((Math.random() * 6) + 1); // x is a number between 1 and 6
    pattern.push(x);
    console.log(x);  // the pattern is written to console for debugging purposes
  }
}

// updates the timer every second
// calls loseGame if the timer hits 0
function timer() {
  
  t--;
  if (t == -1) { // game over
    
    clearInterval(interval);
    loseGame();
    
  } else {
    document.getElementById("time").innerHTML = "Timer: " + t; // update timer
  }
}

// creates the interval to decrement the timer every second
function playInterval() {
  
  interval = setInterval(timer, 1000);
}