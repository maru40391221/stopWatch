let Hours = 0;
let Minutes =0;
let Seconds =0;
let MilliSeconds=0;

const button1 = document.querySelector ("#button1");
const button2 = document.querySelector ("#button2");
const button3 = document.querySelector ("#button3");

button1.onclick = startTime;
button2.onclick = stopTime;
button3.onclick = resetTime;
 
button2.disabled = true;
button3.disabled = true;



function startTime(){
    startTimeInterval = setInterval(appendMillisecond, 100);
    button1.disabled = true;
    button2.disabled = false;
    button3.disabled = false;
}

function stopTime(){
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    button1.innerHTML = "Re-start";
    clearInterval(startTimeInterval);
}

function resetTime(){
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    button1.innerHTML = "Start";
    clearInterval(startTimeInterval);
    firstScreen ();
}

function appendMillisecond(){


    if ( MilliSeconds <= 8){
    MilliSeconds++;
    MilliSeconds.innerHTML = "0" + MilliSeconds;
    document.getElementById("MilliSeconds").innerHTML = MilliSeconds;
    } else if (MilliSeconds == 9){
        MilliSeconds = 0;
        document.getElementById("MilliSeconds").innerHTML = MilliSeconds;
        appendSecond();
    } 


}

function appendSecond(){
    if (Seconds <=58) {
        Seconds ++;
        document.getElementById("Seconds").innerHTML = Seconds;
    } else if (Seconds == 59){
        Seconds = 0;
        appendMinute ();
        document.getElementById("Seconds").innerHTML = Seconds;
    }



}


function appendMinute (){
    if (Minutes <=58) {
        Minutes ++;
        document.getElementById("Minutes").innerHTML = Minutes;
    } else if (Minutes == 59){
        Minutes = 0;
        appendHours ();
        console.log (Minutes + "Minutes");
        document.getElementById("Minutes").innerHTML = Minutes;
    }

} 

function appendHours (){ 
    if (Hours <=22) {
        Hours ++;
        document.getElementById("Hours").innerHTML = Hours;
    } else if (Hour == 23){
        resetTime();
        document.getElementById("Hours").innerHTML = Hours;
    }
}

function firstScreen (){
    MilliSeconds = 0;
    Seconds = 0;
    Minutes = 0;
    Hours = 0;

    document.getElementById("MilliSeconds").innerHTML = MilliSeconds;
    document.getElementById("Seconds").innerHTML = Seconds;
    document.getElementById("Minutes").innerHTML = Minutes; 
    document.getElementById("Hours").innerHTML = Hours;

    console.log ("firstScreen");

}

