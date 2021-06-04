const status = document.getElementById('network')
window.navigator.vibrate(300)
if(navigator.onLine){
}else{
     status.innerHTML = "You are currently offline"
}

function position(pos){
    const lat = pos.coords.latitude
    const long = pos.coords.longitude
    console.log(`${lat},${long}`)
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position)
}else{

}


const menu = document.getElementById('menu-box')
menu.addEventListener('click', showCloseIcon)
    
function showCloseIcon() {
    const close = document.getElementById('menu-icon')
    close.style.display = "block"
    menu.style.display = "none"
     const nav = document.getElementsByClassName('mobile')
     nav[0].style.display = "block"

}

function hideMenuIcon() {
    const close = document.getElementById('menu-icon')
    close.style.display = "none"
    const menu = document.getElementById('menu-box')
    menu.style.display = "block"
    const nav = document.getElementsByClassName('mobile')
     nav[0].style.display = "none"
}
 const close = document.getElementById('menu-icon')
 close.addEventListener('click', hideMenuIcon)