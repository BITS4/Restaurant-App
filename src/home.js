export default function loadHome() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Out Restaurant";

    const description = document.createElement("p");
    description.textContent = "Enjoy the finest meals prepared with love and care";

    const image = document.createElement("img");
    image.src = "./image/photo.jpg";

    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(image);
}