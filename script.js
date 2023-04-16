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
    setInterval(appendMillisecond, 100);
    button1.disabled = true;
    button2.disabled = false;
    button3.disabled = false;

}

function stopTime(){
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    button1.innerHTML = "Re-start";
}

function resetTime(){
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    button1.innerHTML = "Start";
    firstScreen ();
}

function appendMillisecond(){

//if ( MilliSeconds <= 8){

    if ( MilliSeconds <= 2){
    MilliSeconds++;
    MilliSeconds.innerHTML = "0" + MilliSeconds;
    //console.log (MilliSeconds + "ms");
    document.getElementById("MilliSeconds").innerHTML = MilliSeconds;
//} else if (MilliSeconds == 9){
    } else if (MilliSeconds == 3){
        MilliSeconds = 0;
        document.getElementById("MilliSeconds").innerHTML = MilliSeconds;
        appendSecond();
    } 



}

function appendSecond(){
//if (Seconds <=58) {
    if (Seconds <=5) {
        Seconds ++;
//console.log (Seconds + "Seconds" );
        document.getElementById("Seconds").innerHTML = Seconds;
//} else if (Seconds == 59){
    } else if (Seconds == 6){
        Seconds = 0;
        appendMinute ();
        document.getElementById("Seconds").innerHTML = Seconds;
        console.log (Seconds + "Seconds" );
    }



}


function appendMinute (){
//if (Minutes <=58) {
    if (Minutes <=3) {
        Minutes ++;
//console.log (Minutes + "Minutes" );
        document.getElementById("Minutes").innerHTML = Minutes;
//} else if (Minutes == 59){
    } else if (Minutes == 4){
        Minutes = 0;
        appendHours ();
        console.log (Minutes + "Minutes");
        document.getElementById("Minutes").innerHTML = Minutes;
    }

} 

function appendHours (){ 
//if (Hours <=22) {
    if (Hours <=3) {
        Hours ++;
//console.log (Hours + "hours");
        document.getElementById("Hours").innerHTML = Hours;
//} else if (Hour == 23){
    } else if (Hour == 4){
        resetTime();
        document.getElementById("Hours").innerHTML = Hours;

    }

}

function firstScreen (){

}
