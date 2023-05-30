import destPages from "./destPages";

export default function() {
    const main = document.getElementsByTagName("main");
    const navOpt =  document.getElementById("destination");
    main[0].innerHTML = '<h5 class="module-title | clr-accent ff-bar upper-case fs-h5 char-space-m" ><span class="fw-700">01</span>pick your destination</h5><section class="dest-cont"><img draggable="false" id="destImg" src="../src/img/destination/image-moon.png" alt="moon"><section class="dest-text-cont"><ul><li data-num="0" class="destOpt selectedDestOpt | clr-sec fs-bodytxt ff-bar upper-case">moon</li><li data-num="1" class="destOpt | clr-sec fs-bodytxt ff-bar upper-case">mars</li><li data-num="2" class="destOpt | clr-sec fs-bodytxt ff-bar upper-case">europa</li><li data-num="3" class="destOpt | clr-sec fs-bodytxt ff-bar upper-case">titan</li></ul><h2 id="destName" class="clr-accent ff-bell fs-h2 upper-case ">moon</h2><p id="destDesc" class="dest-desc | text-align-resp long-txt clr-sec fs-bodytxt ff-bar">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p><section class="dest-data-cont"><h5 class="fs-bodytxt clr-sec ff-bar upper-case">avg. distance</h5><p id="destDist" class="clr-accent fs-h5 ff-bell upper-case fw-500">348,400 km</p><h5 class="fs-bodytxt clr-sec ff-bar upper-case">est. travel time</h5><p id="destTime" class="clr-accent fs-h5 ff-bell upper-case fw-500">3 days</p></section></section></section>';
    main[0].classList.remove("home");
    document.body.className = "";
    document.body.classList.add("destinationBG");
    document.body.classList.add("padding-500");
    navOpt.classList.add("selectedLi");

    destPages();
};
