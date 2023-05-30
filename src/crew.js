import slider from "./slider";
import crewPages from "./crewPages";

export default function() {
    const main = document.getElementsByTagName("main");
    const navOpt =  document.getElementById("crew");
    main[0].innerHTML = '<h5 class="module-title | clr-accent ff-bar upper-case fs-h5 char-space-m"><span class="fw-700">02</span>meat your crew</h5><section class="splide" aria-label="crew slider"><div class="splide__track"><ul class="splide__list"><li class="splide__slide"><img class="crewImg" src="./img/crew/image-douglas-hurley.webp"></li><li class="splide__slide"><img class="crewImg" src="./img/crew/image-mark-shuttleworth.webp"></li><li class="splide__slide"><img class="crewImg" src="./img/crew/image-victor-glover.webp"></li><li class="splide__slide"><img class="crewImg" src="./img/crew/image-anousheh-ansari.webp"></li></ul></div></section><section class="memberDesc | margin-block-500"><h5 id="crewRole" class="fs-h5 text-align-resp upper-case clr-accent2 ff-bell">commander</h5><h4 class="crewName | fs-h4 text-align-resp upper-case clr-accent ff-bell">douglas hurley</h4><p id="crewText" class="fs-bodytxt margin-bottom-650 text-align-resp clr-sec ff-bar long-txt">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p></section>';
    main[0].classList.remove("home");
    document.body.className = "";
    document.body.classList.add("crewBG");
    document.body.classList.add("padding-500");
    navOpt.classList.add("selectedLi");
    slider();
    crewPages();

/*     function resizeThenSetBack() {
        document.body.style.width = window.innerWidth - 1 + "px";
        document.body.style.width = "100%";
    }
    resizeThenSetBack() */
};

