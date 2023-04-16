let Hours =0;
let Minutes =0;
let Seconds =0;
let MilliSeconds=0;

const button1 = document.querySelector ("#button1");
const button2 = document.querySelector ("#button2");
const button3 = document.querySelector ("#button3");

button1.onclick = startTime;
button2.onclick = stopTime;
button3.onclick = resetTime;



function startTime(){
    setInterval(appendMillisecond, 100);
    
    if (Seconds == 5){
        Seconds= 0;
        appendMinute ();
        console.log (appendMinute);
    } 
}

function stopTime(){
    console.log ("stop");
}

function resetTime(){
    console.log ("reset");
}

function appendMillisecond(){

    if ( MilliSeconds <= 8){
    MilliSeconds++;
    MilliSeconds.innerHTML = "0" + MilliSeconds;
    console.log (MilliSeconds + "ms");
   document.getElementById("timer").innerHTML = MilliSeconds;

    } else if (MilliSeconds == 9){
        MilliSeconds = 0;
        Seconds ++;
        console.log (Seconds + "s" );
    }

}

function appendMinute (){
    Minutes ++;
    console.log (Minutes + "m");
}



/*function second(){
    setInterval(appendSecond, 100);

    function appendSecond() {

    }

    if ( Seconds < 59){
    Seconds++;
    Seconds.innerHTML = "0" + Seconds;
    //console.log (MilliSeconds);
    document.getElementById("timer").innerHTML = Seconds + "." + Seconds;
    }

}
*/
