var pagea = document.getElementById('pagea');
var topPosa = pagea.offsetTop;
function gotoPagea() {
    window.scrollTo(0,topPosa);
}
var pageb = document.getElementById('pageb');
var topPosb = pageb.offsetTop;
function gotoPageb() {
    window.scrollTo(0,topPosb);
}
var pagec = document.getElementById('pagec');
var topPosc = pagec.offsetTop;
function gotoPagec() {
    window.scrollTo(0,topPosc);
}
var paged = document.getElementById('paged');
var topPosd = paged.offsetTop;
function gotoPaged() {
    window.scrollTo(0,topPosd);
}
var pagez = document.getElementById('pagez');
var topPosz = pagez.offsetTop;
function gotoPagez() {
    window.scrollTo(0,topPosz);
}


function ajaxpost () {
    console.log("send");
    notification =document.getElementById("notification");
    notification.style.display="block";
    notification.style.animation="inandout 2s ease"
    setTimeout(() => {
        notification.style.display="none";
        notification.style.animation="none";
    }, 2000);
   
}


