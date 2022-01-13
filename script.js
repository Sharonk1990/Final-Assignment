let openMenu = document.querySelector("#click");
openMenu.addEventListener('click', function () {
    let makeVisible = document.getElementsByClassName("toggle-nav-ul")
    makeVisible[0].classList.toggle("toggle-nav-ul-visible")
})

let clickRed = document.querySelector("#red-button");
clickRed.addEventListener('click', function () {
    let backgroundRed = document.getElementsByTagName("body")
    backgroundRed[0].classList.remove("orange", "yellow", "green", "home")
    backgroundRed[0].classList.toggle("red")
});

let clickOrange = document.querySelector("#orange-button");
clickOrange.addEventListener('click', function () {
    let backgroundOrange = document.getElementsByTagName("body")
    backgroundOrange[0].classList.remove("red", "yellow", "green", "home")
    backgroundOrange[0].classList.toggle("orange")
});

let clickYellow = document.querySelector("#yellow-button");
clickYellow.addEventListener('click', function () {
    let backgroundYellow = document.getElementsByTagName("body")
    backgroundYellow[0].classList.remove("red", "orange", "green", "home")
    backgroundYellow[0].classList.toggle("yellow")
});

let clickGreen = document.querySelector("#green-button");
clickGreen.addEventListener('click', function () {
    let backgroundGreen = document.getElementsByTagName("body")
    backgroundGreen[0].classList.remove("red", "orange", "yellow", "home")
    backgroundGreen[0].classList.toggle("green")
});

let clickHome = document.querySelector("#home-button");
clickHome.addEventListener('click', function () {
    let backgroundHome = document.getElementsByTagName("body")
    backgroundHome[0].classList.remove("red", "orange", "yellow", "green")
    backgroundHome[0].classList.toggle("home")
});


