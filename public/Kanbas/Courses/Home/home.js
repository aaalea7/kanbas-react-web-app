document.addEventListener("DOMContentLoaded", function() {
    const navWrapper = document.querySelector(".wd-kanbas-navigation-wrapper");
    const openNavButton = document.querySelector("#left-icon");
    const closeNavButton = document.querySelector("#closeNav");

    openNavButton.addEventListener("click", function() {
        navWrapper.style.display = "block";
    });

    closeNavButton.addEventListener("click", function() {
        navWrapper.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var rightIcon = document.getElementById("right-icon");
    var courseNavbar = document.querySelector(".course-navbar");
    
    rightIcon.addEventListener("click", function() {
        var displayStatus = getComputedStyle(courseNavbar).display;
        if (displayStatus === "none") {
            courseNavbar.style.display = "block";
        } else {
            courseNavbar.style.display = "none";
        }
    });
});