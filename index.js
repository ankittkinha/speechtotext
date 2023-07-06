
const speechText = document.querySelector(".speechText");
const btn = document.querySelector(".btn")


btn.addEventListener("click", function () {

    const output = document.querySelector(".words")
    const btn = document.querySelector(".btn")

    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
        btn.innerHTML = "Listening..."
    }
    recognization.onresult = (e) => {
        let transcript = e.results[0][0].transcript;
        output.innerHTML +=  `<p>${transcript}</p>`;
        // output.classList.remove("hide")
    }
    recognization.onaudioend = (e) => {
        btn.innerHTML = "Speech To Text";
    }
    
    recognization.start();
})