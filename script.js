const nav = document.querySelector("nav");
const links = nav.querySelectorAll(".header_links");

nav.addEventListener("click", (event) => {
    const targetLink = event.target.closest(".header_links");
    if (!targetLink) {
        return;
    }
    links.forEach((link) => link.classList.remove("active"));
    targetLink.classList.add("active");
});

$(".header_links").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

// var v = document.getElementById('aboutAppBlock');
// var h = document.getElementById('header').classList;
//
// window.addEventListener('scroll', ()=>{
//     if (window.scrollY > v.offsetHeight){
//         h.add('bgDark');
//     } else {
//         h.remove('bgDark');
//     }
// });

(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
        localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
        $('#favicon').attr('href', 'https://i.ibb.co/tK153CM/qurie-black.png');
        $('#logo').attr('src', 'https://i.ibb.co/tK153CM/qurie-black.png');
        $('body').css('transition', 'ease .5')
    } else {
        localStorage.setItem("theme", "dark-mode");
        $('#favicon').attr('href', 'https://i.ibb.co/gt7CznF/qurie-white.png');
        $('#logo').attr('src', 'https://i.ibb.co/gt7CznF/qurie-white.png');
    }

    document.getElementById("theme").textContent = localStorage.getItem("theme");
}