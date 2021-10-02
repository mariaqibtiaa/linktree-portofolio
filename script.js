const btnContainer = document.getElementById("btn-container");
const dateHTML = document.querySelector("#date");

const date = new Date().toUTCString().slice(12, 16);
dateHTML.innerHTML = date;

const links = [{
    label: "Whatsapp",
    link: "https://wa.me/6285155377105",
}, {
    label: "Instagram",
    link: "https://www.instagram.com/mariabct/",
}, {
    label: "Github",
    link: "https://github.com/mariaqibtiaa",
}, {
    label: "Twitter",
    link: "https://www.twitter.com/ariamqi",
}, ];

for (let i = 0; i < links.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-link");
    btn.innerHTML = links[i].label;
    btn.addEventListener("click", () => clickLink(links[i].link));
    btnContainer.append(btn);
}

function clickLink(url) {
    window.open(url, "_blank");
}