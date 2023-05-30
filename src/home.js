export default function() {
    const main = document.getElementsByTagName("main");
    const navOpt =  document.getElementById("home");
    main[0].innerHTML = "<section><h5 class=\"upper-case clr-sec ff-bar char-space-l fs-sh1 text-align-resp\">So, you want to travel to space</h5><h1 class=\"upper-case clr-accent ff-bell fs-h1 text-align-resp\">Space</h1><p class=\"clr-sec ff-bar fs-bodytxt text-align-resp long-txt\">Let\’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\’ll give you a truly out of this world experience!</p></section><button class=\"explore | upper-case clr-pr text-align-cent\">Explore</button>";
    main[0].classList.add("home");
    document.body.className = "";
    document.body.classList.add("homeBG");
    document.body.classList.add("padding-500");
    navOpt.classList.add("selectedLi");
};