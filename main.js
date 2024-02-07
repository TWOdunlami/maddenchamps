    // Regular season start date
var countDown = new Date("February 4, 2024 22:30:00").getTime();

var playyoffs = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.getElementById("regszn").innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(playyofff);
        document.getElementById("regszn").innerHTML = "PLAYOFF MODE! Let the best 1 win!";
    }

},
    1000)

    // Playoffs start date
var countDownDate = new Date("February 24, 2024 22:30:00").getTime();

var ramos = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.getElementById("playoffs").innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(ramos);
        document.getElementById("playoffs").innerHTML = "Let the Games Begin!";
    }

},
    1000)
