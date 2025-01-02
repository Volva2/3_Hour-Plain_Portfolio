// Theme button
let themeButton = document.body.getElementsByClassName("theme-button");

themeButton.addEventListener("click", function() {
    if (themeButton.style.marginRight == 0){
        themeButton.style.margin = "1.65em"
    }else{
        themeButton.style.margin = "0em"
    }
    console.log("JS Working")
})

