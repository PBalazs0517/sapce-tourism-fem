import techPages from "./techPages";

export default function() {
    const main = document.getElementsByTagName("main");
    const navOpt =  document.getElementById("technology");
    main[0].innerHTML = '<h5 class="module-title | clr-accent ff-bar upper-case fs-h5 char-space-m" ><span class="fw-700">03</span>space launch 101</h5><div class="contToAvoidPadding | margin-block-500"><img class="launchL" draggable="false" id="techImg" src="../src/img/technology/image-launch-vehicle-landscape.jpg" alt="launch"></div><span class="techCont"><article class="termCont | flex"><ul class="techBtnLs | flex"><li class="selcetedBtn techBtn " data-num="0">1</li><li class="techBtn " data-num="1">2</li><li class="techBtn " data-num="2">3</li></ul><section class="techTextCont | flex"><h5 class="fs-h5 upper-case clr-sec ff-bar text-align-resp char-space-s">The terminology...</h5><h3 class="techName | fs-h4 upper-case clr-accent ff-bell text-align-resp">Launch vehicle</h3><p class="techDesc | long-txt fs-bodytxt text-align-resp ff-bar clr-sec margin-bottom-650">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!</p></section></article></span>';
    main[0].classList.remove("home");
    document.body.className = "";
    document.body.classList.add("technologyBG");
    document.body.classList.add("padding-500");
    navOpt.classList.add("selectedLi");

    techPages();
};

