let hours =0;
let minutes =0;
let seconds =0;

const button1 = document.querySelector ("#button1");
const button2 = document.querySelector ("#button2");
const button3 = document.querySelector ("#button3");

const hour = document.querySelector ("#hour");
const minute = document.querySelector ("#minute");
const second = document.querySelector ("#second");

button1.onclick = startTime;
button2.onclick = stopTime;
button3.onclick = resetTime;



function startTime(){
    setInterval(addSecond, 1000);
    console.log("pushed");
}

function stopTime(){
    console.log ("stop");
}

function resetTime(){
    console.log ("reset");
}

function addSecond (){
    ;
    second.innerText = second;
    console.log("addSecond");

}


