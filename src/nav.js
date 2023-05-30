import home from "./home";
import dest from "./dest";
import crew from "./crew";
import tech from "./tech";

export default function() {
    const navBtn = document.getElementById("navBtn");
    const nav = document.getElementById("nav");

    let open = false;

    navBtn.addEventListener("click", () => {
        if(!open) {
            navBtn.src = "../src/img/shared/icon-close.svg";
            open = true;
        } else {
            navBtn.src = "../src/img/shared/icon-hamburger.svg";
            open = false;
        };
        nav.classList.toggle("navPhoneStyle");
    });

    const navOpts = Array.from(document.querySelectorAll(".navOpt"));
    navOpts.forEach(opt => {
        opt.addEventListener("click", () => {
            navOpts.forEach(o => o.classList.remove("selectedLi"));
            if(opt.dataset.page == 0) {
                home();
            };
            if(opt.dataset.page == 1) {
                dest();
            };
            if(opt.dataset.page == 2) {
                crew();
            };
            if(opt.dataset.page == 3) {
                tech();
            };
        });
    });
};