// Theme button
const themeButton = document.body.getElementsByClassName("theme-button")[0]
const heroBg = document.body.getElementsByClassName("frontpage-start")[0]
const heroHeading = document.body.getElementsByClassName("hero-t")
const footerBg = document.body.getElementsByClassName('footer')[0]
const root = document.querySelector(':root');

// Changed variables
let themeButtonSession = "" 
let heroBgSession = ""
let bodyBgSession = ""
let footerBgSession = ""
let rootSession = ""



// Change the value of the --main-color variable

themeButton.addEventListener("click", () => {
    if (themeButton.style.marginLeft == "0.25em"){
        themeButton.style.marginLeft = "1.1em"
        themeButtonSession = "1.1em"
        
    }else{
        themeButton.style.marginLeft = "0.25em"
        themeButtonSession = "0.25em"
        heroBg.style.backgroundImage = "url('../resources/dark-theme-hero-bg.jpg')"
        heroBgSession = "url('../resources/dark-theme-hero-bg.jpg')"
    }

    if (themeButton.style.marginLeft == "0.25em"){
        heroBg.style.backgroundImage = "url('../resources/IMG_1 (20).JPG')"
        heroBgSession = "url('../resources/IMG_1 (20).JPG')"
        // for(const i in heroHeading){heroHeading[i].style.color = "white"}
        

        footerBg.style.backgroundColor = "#1145A9"
        footerBgSession = "#1145A9"
        document.body.style.backgroundColor = "white"
        bodyBgSession = "white"
        root.style.setProperty('--secondary-font-color', 'black');
        root.style.setProperty('--main-bg-color', 'white');
        rootSession = "black"
    }else{
        heroBg.style.backgroundImage = "url('../resources/dark-theme-hero-bg.jpg')"
        heroBgSession = "url('../resources/dark-theme-hero-bg.jpg')"
        // try{
        //     for(const i in heroHeading){heroHeading[i].style.color = "#10221C"}
        // } catch{}

        footerBg.style.backgroundColor = "#121420"
        footerBgSession = "#121420"
        document.body.style.backgroundColor = "#403f4c"
        bodyBgSession = "#403f4c"
        root.style.setProperty('--secondary-font-color', 'white');
        root.style.setProperty('--main-bg-color', '#403f4c');
        rootSession = "white"
    }


    console.log("JS Working")
})


//------------ Trying to use sessionStorage to make the website remember which theme it had
// if(sessionStorage.getItem("autosave")){

//     themeButton.style.marginLeft = themeButtonSession

//     heroBg.style.backgroundImage = heroBgSession
    
//     footerBg.style.backgroundColor = footerBgSession
//     document.body.style.backgroundColor = bodyBgSession
//     root.style.setProperty('--secondary-font-color', rootSession);
// }


// Mobile Navigation
let mobileNavButton = document.body.getElementsByClassName("mobile-nav-img")[0]
let mobileNavMenu = document.body.getElementsByClassName("header-nav")[0]
let mobileNavHeader = document.body.getElementsByClassName("mobile-menu-header")[0]
let navOptions = document.body.getElementsByClassName("header-nav-options")
let mobileNavExit = document.body.getElementsByClassName("mobile-menu-exit")[0]


mobileNavButton.addEventListener("click", () => {
    mobileNavMenu.style.display = "block"
    mobileNavHeader.style.display = "visible"
    mobileNavMenu.style.visibility = "visible"
})

for(let i of navOptions){
    i.addEventListener("click", () => {
        mobileNavMenu.style.display = "none"
        mobileNavHeader.style.display = "hidden"
        mobileNavMenu.style.visibility = "hidden"
    })
}

mobileNavExit.addEventListener("click", () => {
    mobileNavMenu.style.display = "none"
    mobileNavHeader.style.display = "hidden"
    mobileNavMenu.style.visibility = "hidden"
})