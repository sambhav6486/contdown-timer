const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEL = document.querySelector("#seconds")



function countdownTimer(){
    let currentDate = new Date()
    let newYearsDate = new Date("1 Jan 2022")
    let diffDate = newYearsDate -currentDate
    setSectonds(diffDate)

}


setInterval(countdownTimer , 1000)

function setSectonds(miliseconds){
    let totalseconds = Math.floor(miliseconds / 1000)
    let seconds = totalseconds % 60
    secondsEL.innerText = formatTime(seconds);
    setMinutes(totalseconds)
    setHours(totalseconds)
    setDays(totalseconds)
}

function setMinutes(secondsValue){
    let minutes = Math.floor(secondsValue / 60) % 60
    minutesEl.innerText = formatTime(minutes);
}

function setHours(hoursValue){
    let hours = Math.floor(hoursValue / 60 / 60) % 60
    hoursEl.innerText = formatTime(hours);
}

function setDays(daysValue){
    let days = Math.floor(daysValue / 60 / 60 / 24)
    daysEl.innerText = formatTime(days);
}


function formatTime(time){
    if(time<10){
        time = "0"+time
        return time
    }else{
        return time
    }
}