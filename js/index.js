
function promptName() {
    const userName = prompt("Adınız nedir?");
    const nameElement = document.querySelector("#myName");
    nameElement.innerHTML = userName;
}

function showTime() {
    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDay();

    switch(day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7: 
            day = "Pazar";
            break;
        default:
            break;
    }
    

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const dateElement = document.querySelector("#myClock");
    dateElement.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;

    setTimeout(showTime, 1000);
}


promptName();
showTime();