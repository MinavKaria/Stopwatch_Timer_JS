title=document.querySelector('h1');

startbutton=document.querySelector('.start');
stopbutton=document.querySelector('.stop');
reset=document.querySelector('.reset');
inputbutton=document.querySelector('.data-input');

hourdigit=document.querySelector('.hours');
mindigit=document.querySelector('.minutes');
secdigit=document.querySelector('.seconds');
millidigit=document.querySelector('.milliseconds');

var hour=hour<10 ? "0"+hour : hour;
var min=min<10 ? "0"+min : min;
var sec=sec<10 ? "0"+sec : sec;
var milli=milli<10 ? "0"+milli : milli;

var audio = new Audio('Alarm.mp3');
var counter=false;

inputbutton.addEventListener('click', setTimer);
startbutton.addEventListener('click',start);
stopbutton.addEventListener('click',stop);
reset.addEventListener('click',resetTimer);

stopbutton.style.display="none";

function start()
{
    if(hourdigit.innerHTML=="00" && mindigit.innerHTML=="00" && secdigit.innerHTML=="00" && millidigit.innerHTML=="00")
    {
        alert("Please Enter a Timer");
        return;
    }
    counter=true;
    startbutton.style.display="none";
    stopbutton.style.display="inline-block";
    timerStart();
}

function stop()
{
    counter=false;
    startbutton.style.display="inline-block";
    stopbutton.style.display="none";
}

function setTimer()
{
    hour=document.querySelector('.hour-in').value;
    min=document.querySelector('.min-in').value;
    sec=document.querySelector('.sec-in').value;
    if((hour<0 || min<0 || sec<0) || (hour==0 && min==0 && sec==0) || (hour=="" || min=="" || sec==""))
    {
        alert("Please enter a valid time");
        return;
    }
    else
    {
        counter=false;
        hour=document.querySelector('.hour-in').value;
        min=document.querySelector('.min-in').value;
        sec=document.querySelector('.sec-in').value;
        resetTimer();
    }
    
    
    
}

function timerStart()
{
    if(counter==true)
    {
        if(hour==0 && min==0 && sec==0 && milli==0)
        {
            title.innerHTML="Timer Finished";
            
            audio.play();
            counter = false;
        }
        else
        {
            if(milli==0)
            {
                if(sec==0)
                {
                    if(min==0)
                    {
                        hour--;
                        min=59;
                        sec=59;
                        milli=99;
                    }
                    else
                    {
                        min--;
                        sec=59;
                        milli=99;
                    }
                }
                else
                {
                    sec--;
                    milli=99;
                }
            }
            else
            {
                milli--;
            }
        }
        
        hourdigit.innerHTML=hour<10 ? "0"+hour : hour;;
        mindigit.innerHTML=min<10 ? "0"+min : min;
        secdigit.innerHTML=sec<10 ? "0"+sec : sec;
        millidigit.innerHTML=milli<10 ? "0"+milli : milli;
        setTimeout("timerStart()",10);
    }
}

function resetTimer()
{
    counter=false;
    title.innerHTML="Timer";
    audio.pause();
    startbutton.style.display="inline-block";
    stopbutton.style.display="none";
    hour=document.querySelector('.hour-in').value;
    min=document.querySelector('.min-in').value;
    sec=document.querySelector('.sec-in').value;
    milli=0;
    hourdigit.innerHTML=hour<10 ? "0"+hour : hour;;
    mindigit.innerHTML=min<10 ? "0"+min : min;
    secdigit.innerHTML=sec<10 ? "0"+sec : sec;
    millidigit.innerHTML=milli<10 ? "0"+milli : milli;
    
}


