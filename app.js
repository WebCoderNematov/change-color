
window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    
    const copyBtn = document.querySelector(".copyBtn")
    const heroInner = document.querySelector(".hero-inner")
    const colorInputs = document.querySelectorAll(".hero-inner input")
    copyBtn.classList.add("d-none");

    let redValue = document.querySelector(".red-value");
    let greenValue = document.querySelector(".green-value");
    let blueValue = document.querySelector(".blue-value");

    function handleChangeColor(red, green, blue) {
        copyBtn.classList.remove("d-none");
        return `rgb(${red}, ${green}, ${blue})`;
    }
    function handleChange(event) {
        if(event.target.matches("#red")) {
            handleChangeColor( event.target.parentNode.querySelector("#green").value,
            event.target.parentNode.querySelector("#blue").value );
            redValue.textContent = event.target.value;
        }
        else if(event.target.closest("#green")) {
            handleChangeColor( event.target.parentNode.querySelector("#red"),
            event.target.value,
            event.target.parentNode.querySelector("#blue").value );
            greenValue.textContent = event.target.value;
        }
        else if(event.target.closest("#blue")) {
            handleChangeColor(event.target.parentNode.querySelector("#red"), 
            event.target.parentNode.querySelector("#green").value, event.target.value );
            blueValue.textContent = event.target.value; 
        }
    }
    colorInputs.forEach( function (item)  {
        item.addEventListener("change", handleChange)
    } )
    window.addEventListener("click", (event) => {
        if(event.target.matches(".copyBtn")) {
            let result = handleChangeColor(heroInner.querySelector("#red").value,
            heroInner.querySelector("#green").value, heroInner.querySelector("#blue").value);
            
            document.body.classList.remove("bg-dark");
            document.body.style.background = result;
        }

    }) 
})