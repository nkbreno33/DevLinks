function toggleMode () {
    const html = document.documentElement
        html.classList.toggle('light')

    let img = document.querySelector("#profile img") 
        
        if (html.classList.contains('light')) {

            img.setAttribute('src', './assets/avatar-light.png')
    
        }
        else {
            img.setAttribute('src', "./assets/avatar.png")
        }
    }

function toggleMode () {
    const html = document.documentElement
        html.classList.toggle('light')

    let img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('alt', "Foto de perfil em lightmode")
    }
    else {
        img.setAttribute('alt', "foto de perfil em darkmode")
    }
        
}