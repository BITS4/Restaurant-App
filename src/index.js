import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

document.getElementById("home").addEventListener("click", () => {
    clearContent();
    loadHome();
});

document.getElementById("menu").addEventListener("click", () => {
    clearContent();
    loadMenu();
});


document.getElementById("contact").addEventListener("click", () => {
    clearContent();
    loadContact();
});

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = '';
}


const content = document.getElementById("content");

function createHomePage() {
    const title = document.createElement("h1");
    title.textContent = "Welcome to Our Restaurant"; 

    const description = document.createElement("p");
    description.textContent = "The best place in the World, so take a while to enjoy our food";

    content.appendChild(title);
    content.appendChild(description);
}

createHomePage();