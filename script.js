function Sidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active"); // toggle una classe che mostri/nasconda la sidebar
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Aggiungi o rimuovi la classe 'open' alla sidebar per aprirla/chiuderla
    sidebar.classList.toggle('open');
    
    // Aggiungi o rimuovi la classe 'sidebar-open' al body per disabilitare lo scroll
    body.classList.toggle('sidebar-open');
});}

//riempio i cerchi della sezione lingue della sidebar
document.querySelectorAll( '.circle-yellow-part' ).forEach( ( circle, index ) => {
    const values = [ 100, 90, 50];
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - ( values[index] / 100 ) * circumference;
} );

//collegamenti footer
document.getElementById("instagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/michele_latte_", "_blank");
});

document.getElementById("gitHub").addEventListener("click", function() {
    window.open("https://github.com/micheledevelop", "_blank");
});

document.getElementById("fiverr").addEventListener("click", function() {
    window.open("https://fiverr.com/s/xX5r5BD", "_blank");
});

document.getElementById("gmail").addEventListener("click", function() {
    var email = "michelelatte.dev@gmail.com";
    var subject = "Creazione/modifica di un sito web";
    var body = "Ciao, mi piacerebbe sapere di più riguardo ai servizi che offri.";
    var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
});

document.getElementById("ifthenelse").addEventListener("click", function() {
    window.open("https://ifthenelse.netlify.app/", "_blank");
});