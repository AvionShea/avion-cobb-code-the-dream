const body = document.body;

async function populateFoodPics() {
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

populateFoodPics();

async function getNarutoPic() {
    const url = "https://api.jikan.moe/v4/anime?q=narut";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const img = document.createElement("img");
            const imgSrc = response.data[0].images.jpg.image_url;

            img.src = imgSrc;
            img.alt = "pic of Naruto"

            body.appendChild(img);
        })
        .catch(function () {
            console.log("404 - Not Found");
        })
}

getNarutoPic();

