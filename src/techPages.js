export default function() {
    const btns = Array.from(document.querySelectorAll(".techBtn"));
    const pages = [
        {
            title: "Launch vehicle", 
            text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            urlLs: "./img/technology/image-launch-vehicle-landscape.jpg",
            class: "launchL"
        },
        {
            title: "Spaceport", 
            text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            urlLs: "./img/technology/image-spaceport-landscape.jpg",
            class: "spaceportL"
        },
        {
            title: "Space capsule",
            text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            urlLs: "./img/technology/image-space-capsule-landscape.jpg",
            class: "capsuleL"
        }
    ];

    const img = document.getElementById("techImg");
    const title = document.getElementsByClassName("techName");
    const text = document.getElementsByClassName("techDesc");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => {
                b.classList.remove("selcetedBtn");
            });
            btn.classList.add("selcetedBtn");


            img.className = "";
            img.classList.add(pages[btn.dataset.num].class)
            img.src = pages[btn.dataset.num].urlLs;
            title[0].innerHTML = pages[btn.dataset.num].title;
            text[0].innerHTML = pages[btn.dataset.num].text;
        });
    });
};