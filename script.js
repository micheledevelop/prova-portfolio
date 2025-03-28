function Sidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

//riempio i cerchi della sezione lingue della sidebar
document.querySelectorAll( '.circle-yellow-part' ).forEach( ( circle, index ) => {
    const values = [ 100, 90, 50];
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - ( values[index] / 100 ) * circumference;
} );