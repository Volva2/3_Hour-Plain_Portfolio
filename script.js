// Theme button
let themeButton = document.body.getElementsByClassName("theme-button")[0];

themeButton.addEventListener("click", () => {
    if (themeButton.style.marginLeft == "0.25em"){
        themeButton.style.marginLeft = "1.1em"
    }else{
        themeButton.style.marginLeft = "0.25em"
    }
    console.log("JS Working")
})

