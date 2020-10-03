const hamburger= document.getElementById("hamburger");
const menuMobile = document.getElementById("menu-mobile");
const main = document.querySelector("main");

hamburger.addEventListener('click', () =>{
    if(menuMobile.classList.contains('hidden')){
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('hidden-desktop');
        document.getElementById('header').classList.add('header-opacity');
        hamburger.classList.toggle('change');
        document.querySelector(".infos-container").classList.remove('hidden');
    }else{
        menuMobile.classList.remove('hidden-desktop');
        menuMobile.classList.add('hidden');
        document.getElementById('header').classList.remove('header-opacity');
        hamburger.classList.toggle('change');
        document.querySelector(".infos-container").classList.add('hidden');
    }
})

main.style.marginTop = document.querySelector("header").offsetHeight + "px";
