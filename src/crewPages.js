export default function() {
    const slides = Array.from(document.querySelectorAll(".splide__slide"));

    function cb(mutationsList, observer) {
        for(let i = 0; i < mutationsList.length; i++) {
            const classList = mutationsList[i].target.attributes[0].textContent
            if( classList.includes("is-active") ) {
                role.innerHTML = pages[mutationsList[i].target.ariaLabel[0] - 1].role;
                name.innerHTML = pages[mutationsList[i].target.ariaLabel[0] - 1].name;
                text.innerHTML = pages[mutationsList[i].target.ariaLabel[0] - 1].text;
                break
            }
        }
    };
    const classChange = new MutationObserver(cb);
    slides.forEach(slide => {
        classChange.observe(slide, { attributes: true })
    });

    const pages = [
        {
            role: "Commander", 
            name: "Douglas Hurley",
            text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        {
            role: "Mission Specialist", 
            name: "Mark Shuttleworth",
            text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        {
            role: "Pilot",
            name: "Victor Glover",
            text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        },
        {
            role: "Flight Engineer",
            name: "Anousheh Ansari",
            text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        }
    ];

    const role = document.getElementById("crewRole");
    const name = document.getElementsByClassName("crewName")[0];
    const text = document.getElementById("crewText");
};