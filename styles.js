timer=document.querySelector('.display');
startbutton=document.querySelector('.start');
stopbutton=document.querySelector('.stop');
resetbutton=document.querySelector('.reset');
ms=document.querySelector('.milliseconds');


let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let milliseconds = 0o0;



startbutton.addEventListener('click',startTimer);
stopbutton.addEventListener('click',stopTimer);
resetbutton.addEventListener('click',resetTimer);



function startTimer()
{
    console.log('timer started');
    timer=true;
    stopwatch();
}

function stopTimer()
{
    console.log('timer stopped');
    timer=false;
}

function resetTimer()
{
    console.log('timer reset');
    timer=false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.querySelector('.seconds').innerHTML = "00";
    document.querySelector('.minutes').innerHTML = "00";
    document.querySelector('.hours').innerHTML = "00";
    ms.innerHTML = "00";
}

function stopwatch()
{
    if(timer==true)
    {
        milliseconds++;
        if(milliseconds/100==1)
        {
            milliseconds=0;
            second++;
            if(second/60==1)
            {
                second=0;
                minute++;
                if(minute/60==1)
                {
                    minute=0;
                    hour++;
                }
            }
        }
        if(milliseconds<10)
        {
            ms.innerHTML='0'+milliseconds;
        }
        else
        {
            ms.innerHTML=milliseconds;
        }
        if(second<10)
        {
            document.querySelector('.seconds').innerHTML='0'+second;
        }
        else
        {
            document.querySelector('.seconds').innerHTML=second;
        }
        if(minute<10)
        {
            document.querySelector('.minutes').innerHTML='0'+minute;
        }
        else
        {
            document.querySelector('.minutes').innerHTML=minute;
        }
        if(hour<10)
        {
            document.querySelector('.hours').innerHTML='0'+hour;
        }
        else
        {
            document.querySelector('.hours').innerHTML=hour;
        }


        setTimeout("stopwatch()",10);
    }
}