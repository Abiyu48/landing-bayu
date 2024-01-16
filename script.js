<<<<<<< HEAD
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
=======
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
>>>>>>> 3709bda63ef125cab9e4570b4f8a0a91c79590d7
}