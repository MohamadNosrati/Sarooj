const pjs=document.getElementById("pjs")
const psj=document.getElementById("psj")
const subPj=document.querySelector("div.subPj")
const subPjMb=document.querySelector("div.subPjMb")
const html = document.getElementById("html")
const darkMode = document.getElementById("darkMode")
const world=document.getElementById("world")
const lge=document.querySelector("div.faEn")
const hamburger=document.querySelector("div.hamburger>svg")
const navMb=document.querySelector("nav.mb")
const close=document.getElementById("close")
const closeEn=document.getElementById("closeEn")
const lgeMb=document.getElementById("lgeMb")
function toggleDark() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem("theme", "light");
        darkMode.src = "icons/MainPage/mooon.svg"
    } else {
        html.classList.add('dark');
        localStorage.setItem("theme", "dark");
        darkMode.src = "icons/MainPage/sun.svg"
    }
}
if (localStorage.getItem("theme") === "dark") {
    html.classList.add('dark');
    darkMode.src = "icons/MainPage/sun.svg"

}
document.getElementById("darkMode").addEventListener('click', toggleDark);
pjs.addEventListener("click",function (){
    this.classList.toggle("activeQuestionDi")
    subPj.classList.add("activeAnimation")
    subPj.classList.toggle("activeSub")
})
lgeMb.addEventListener("click",function (){
    this.classList.toggle("activeQuestionDi")
    subPjMb.classList.add("activeAnimation")
    subPjMb.classList.toggle("activeSub")
})
world.addEventListener("click",function () {
    lge.classList.add("activeAnimation")
    lge.classList.toggle("activeSub")
})
hamburger.addEventListener("click",function (){
    navMb.classList.add("activeNavMbFa")
})
hamburger.addEventListener("click",function (){
    navMb.classList.add("activeNavMbEn")
})
close.addEventListener("click",function (){
    navMb.classList.remove("activeNavMbEn")
})
close.addEventListener("click",function (){
    navMb.classList.remove("activeNavMbFa")
})

