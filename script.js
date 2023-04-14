let hours =0;
let minutes =0;
let seconds =0;

const button1 = document.querySelector ("#button1");
const button2 = document.querySelector ("#button2");
const button3 = document.querySelector ("#button3");

button1.onclick = startTime;
button2.onclick = stopTime;
button3.onclick = resetTime;



function startTime(){
    console.log ("start");
}

function stopTime(){
    console.log ("stop");
}

function resetTime(){
    console.log ("reset");
}


