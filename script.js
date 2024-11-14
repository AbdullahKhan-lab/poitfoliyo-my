const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
menuIcon.classList.toogle('bx-x');
navbar.classList.toogle('active');

}