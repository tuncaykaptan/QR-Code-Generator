const input = document.querySelector("#input");
const generateButton = document.querySelector("#generateButton");
const qr = document.querySelector("#qr");
const qrText = document.querySelector("#qrText");
const qrSection = document.querySelector(".qrSection");

generateButton.addEventListener("click", function(){
    if(input.value != ""){
        qrSection.style.opacity = "1"
        let text = input.value;
        qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text;
        qrText.innerHTML = '"'+text+'"';
    }
}
)

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(input.value != ""){
            qrSection.style.opacity = "1"
            let text = input.value;
            qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text;
            qrText.innerHTML = '"'+text+'"';
        }
    }
  }); 

document.addEventListener("DOMContentLoaded", function(){
    if(input.value != ""){
        qrSection.style.width = "100%"
    }
})

input.addEventListener("keyup", function(){
    qrSection.style.width = "100%";
})

input.addEventListener("keyup", function(){
    if(input.value == ""){
        qrSection.style.opacity = "0";
        qrSection.style.width = "0%";
    }
})