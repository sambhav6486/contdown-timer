const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEL = document.querySelector("#seconds")


setInterval(countdownTimer , 1000)
function countdownTimer(){
    let currentDate = new Date()
    let newYear = currentDate.getFullYear() + 1
    let newYearsDate = new Date(`1 Jan ${newYear}`)
    let diffDate = newYearsDate -currentDate
    setSectonds(diffDate)

}


function setSectonds(miliseconds){
    let totalseconds = Math.floor(miliseconds / 1000)
    let seconds = totalseconds % 60
    let newSeconds = formatTime(seconds);
    updateCounter(secondsEL , newSeconds)
    setMinutes(totalseconds)
    setHours(totalseconds)
    setDays(totalseconds)
}

function setMinutes(secondsValue){
    let minutes = Math.floor(secondsValue / 60) % 60
    let newminutes = formatTime(minutes);
    updateCounter(minutesEl , newminutes)
}

function setHours(hoursValue){
    let hours = Math.floor(hoursValue / 60 / 60) % 60
    let newHours = formatTime(hours);
    updateCounter(hoursEl , newHours)
}

function setDays(daysValue){
    let days = Math.floor(daysValue / 60 / 60 / 24)
    let newDays = formatTime(days);
    updateCounter(daysEl , newDays)
}

function updateCounter(element , newTime){
    element.innerText = newTime
}

function formatTime(time){
    if(time<10){
        time = "0"+time
        return time
    }else{
        return time
    }
}