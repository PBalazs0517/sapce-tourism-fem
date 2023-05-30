export default function() {
    const btns = Array.from(document.querySelectorAll(".destOpt"));
    const pages = [
        {
            title: "Moon", 
            text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            url: "../src/img/destination/image-moon.png",
            dist: "384,400 km",
            time: "3 days"
        },
        {
            title: "Mars", 
            text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            url: "../src/img/destination/image-mars.png",
            dist: "225 mil. km",
            time: "9 months"
        },
        {
            title: "Europa",
            text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            url: "../src/img/destination/image-europa.png",
            dist: "628 mil. km",
            time: "3 years"
        },
        {
            title: "Titan",
            text: "  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            url: "../src/img/destination/image-titan.png",
            dist: "1.6 bil. km",
            time: "7 years"
        }
    ];

    const img = document.getElementById("destImg");
    const title = document.getElementById("destName");
    const text = document.getElementsByClassName("dest-desc");
    const dist = document.getElementById("destDist");
    const time = document.getElementById("destTime");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => {
                b.classList.remove("selectedDestOpt");
            });
            btn.classList.add("selectedDestOpt");

            img.src = pages[btn.dataset.num].url;
            title.innerHTML = pages[btn.dataset.num].title;
            text[0].innerHTML = pages[btn.dataset.num].text;
            dist.innerHTML = pages[btn.dataset.num].dist;
            time.innerHTML = pages[btn.dataset.num].time;
        });
    });
}