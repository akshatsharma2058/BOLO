const options = document.querySelectorAll("label");
const option = document.getElementById("options");
const poll = document.getElementById("poll-submit");
const msg = document.getElementById("final-msg");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        for (let j = 0; j < options.length; j++) { if (options[j].classList.contains("selected")) { options[j].classList.remove("selected"); } } options[i].classList.add("selected"); for (let k = 0; k < options.length; k++) { options[k].classList.add("selectall"); } let forVal = options[i].getAttribute("for"); let selectInput = document.querySelector("#" + forVal); let getAtt = selectInput.getAttribute("type"); if (getAtt == "checkbox") { selectInput.setAttribute("type", "radio"); } else if (selectInput.checked == true) { options[i].classList.remove("selected"); selectInput.setAttribute("type", "checkbox"); } let array = []; for (let l = 0; l < options.length; l++) { if (options[l].classList.contains("selected")) { array.push(l); } } if (array.length == 0) { for (let m = 0; m < options.length; m++) { options[m].removeAttribute("class"); } }
    });
}

poll.addEventListener("click", () => {
    option.parentElement.removeChild(option);
    msg.innerText = "Thanks for voting!";
})


