document.addEventListener("DOMContentLoaded", function () {

    console.log("JS WORKING");

    let required = 486;
    let logged = 367;

    let percent = Math.round((logged / required) * 100);
    let remaining = required - logged;

    // TEXT
    document.getElementById("percent").innerText = percent + "%";
    document.getElementById("logged").innerText = logged + "h";
    document.getElementById("remaining").innerText = remaining + "h";

    // DONUT
    let circle = document.getElementById("progressCircle");

    if (!circle) {
        console.error("progressCircle NOT FOUND");
        return;
    }

    let radius = 65;
    let circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
        let offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }, 500);

    // BARS FIX
    document.querySelectorAll(".bar").forEach(bar => {
        let hours = parseInt(bar.getAttribute("data-hour"));

        bar.style.height = "0px";

        setTimeout(() => {
            bar.style.height = (hours * 10) + "px";
        }, 300);
    });

});