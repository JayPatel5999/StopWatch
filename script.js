let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;
let lapTimes = [];
let lapCounter = 0;

function stopwatch ()
{
    seconds++;
    if(seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1)
        {
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function watchStart()
{
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop()
{
    clearInterval(timer);
}

function watchReset()
{
    clearInterval(timer);
    let [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
    lapTimes = [];
    lapCounter = 0;
    let lapList = document.getElementById('lapList');
    lapList.innerHTML = "";
}

function addLap()
{
    let lapTime = displayTime.innerHTML;
    lapTimes.push(lapTime);
    lapCounter++;
    let lapList = document.getElementById('lapList');
    let lap = document.createElement('li');
    lap.appendChild(document.createTextNode("Lap " + lapCounter + ": " + lapTime));
    lapList.appendChild(lap); 
}