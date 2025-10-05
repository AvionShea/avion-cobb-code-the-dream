const body = document.body;

async function populateInfo() {
    const requestHTML = "https://foodish-api.com/api/";

    const request = new Request(requestHTML);

    const response = await fetch(request);
    const image = await response.json();

    const img = document.createElement("img");
    img.src = image.image;
    img.alt = "picture of food";
    img.height = "800";
    img.width = "800";

    body.appendChild(img);
}

populateInfo();