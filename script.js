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


document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './doc/curriculo_nicholas.pdf';
    link.target = '_blank';
    link.dowload = 'curriculo_nicholas.pdf';
    link.click();
});

