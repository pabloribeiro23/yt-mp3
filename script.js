const convertButton = document.getElementById("convert-button");
const convertInput = document.getElementById("convert-input");
const resultDisplay = document.querySelector(".result");

convertButton.addEventListener("click", () => {
    getAudio();
})

async function getAudio() {
    let link = convertInput.value;
    let parts = link.split("=");
    let videoId = "";

    if(parts.length === 2) {
        videoId = parts[1];
        console.log(videoId);
    } else {
        console.log("Error! Invalid youtube Link");
    }

    const url = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoId}`;
    const options = {
        method: 'GET',
        url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
        params: {id: 'UxxajLWwzqY'},
        headers: {
          'X-RapidAPI-Key': '679135a67dmsh6fcee0061377b12p1f304ajsna9fdb79ef1e4',
          'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
        }
      };

    const response = await fetch(url, options);
    const result = await response.json();
    //resultDisplay.innerHTML = `<p class="title">Title: ${result.title}</p>`;

    setTimeout(() => {
        window.open(result.link, "_blank");
    }, 1000);
}