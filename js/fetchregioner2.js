console.log("vi er i fetchregioner")
const urlRegioner = "https://api.dataforsyningen.dk/regioner"

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

regionList = []
async function fetchRegioner() {
    regionList = await fetchAny(urlRegioner);
}

