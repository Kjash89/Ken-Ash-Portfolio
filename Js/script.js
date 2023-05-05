const header = document.querySelector('header');
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const port = document.getElementsByClassName('porttabs');
const tabs = document.getElementsByClassName('tabs');
const mdlbtn = document.getElementsById('contact-modal');
const mdl = docuent.getElementsByClassName('modal');
// const modal = document.getElementsByClassName('modal');
// const btn = document.getElementsByClassName('modalbtn');

// btn.onclick = function () {
//     modal.style.display = "block";
// }

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
}))

mdlbtn.addEventListener("click", () => {
    modal.classlist.toggle("active");
    console.log("works");
})
function openpg(pgname) {
    var i;
    var x = document.getElementsByClassName("poop");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pgname).style.display = "flex";
}

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

