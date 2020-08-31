$(document).ready(function () {
    $('#main-container').fadeOut(1000);
    $('#main-container').fadeIn(3000);
    $('#mainfooter').fadeOut(1000);
    $('#mainfooter').fadeIn(2000);
    $('#social-btns-main').css('display', 'flex');

    document.getElementById("moreaboutme").onclick = function () {
        location.href = "about.html";
    };
    document.getElementById("getintouch").onclick = function () {
        location.href = "contact.html";
    };
    document.getElementById("linkedinbtn").onclick = function () {
        window.open("https://www.linkedin.com/in/abhijeetbhagat/");

    };
    document.getElementById("githubbtn").onclick = function () {
        window.open("https://github.com/bhagatabhijeet");
    };

});

particlesJS.load('particles-js', 'assets/scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });