const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours')
const minutesEl =document.getElementById('mins')
const secondsEl =document.getElementById('seconds')


const parisTrip = "17 March 2022 17:30"

function countdown() {
    const parisTripDate = new Date(parisTrip);
    const currentdate = new Date();

    const seconds = (parisTripDate - currentdate)/1000;

    const daysLeft = Math.floor(seconds/(3600*24));
    const hoursLeft = Math.floor(((seconds/(3600*24))%daysLeft)*24);
    const minutesLeft = Math.floor(((((seconds/(3600*24))%daysLeft)*24)%hoursLeft)*60);
    const secondsLeft = Math.floor(((((((seconds/(3600*24))%daysLeft)*24)%hoursLeft)*60)%minutesLeft)*60);


    daysEl.innerHTML = daysLeft;
    hoursEl.innerHTML = hoursLeft;
    minutesEl.innerHTML = minutesLeft;
    secondsEl.innerHTML= secondsLeft;


    console.log(seconds)
    console.log(daysLeft)
    console.log(hoursLeft)
    console.log(minutesLeft)
    console.log(secondsLeft)

}
countdown()

setInterval(countdown, 1000);