ABDULLAH KHAN
    HTML
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <body>

<header class="header">
    <a href="#home" class="logo"> Abdullah
        <span>khan</span></a>

<i class="bx bx-menu" id="menu-icon"></i>
<nav class="navbar">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
</nav>
</header>

<section class="home" id="home">

<div class="home-content">
    <h1>Hi, It's <span>Abdullah</span></h1>
    <h3>I'm a <span>Web Developer</span></h3>
    <!-- change -->
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aspernatur suscipit in culpa sed numquam pariatur ea optio voluptate consequuntur excepturi quae dolorem fugit, reiciendis ullam aperiam voluptates. Nulla, reiciendis!</p>
     <div class="social-icon">
        <a href="#">

    <i class="bx bxl-github"></i>        
        </a>

        <a href="#">

            <i class="bx bxl-linkedin-square"></i>        
                </a>
                <a href="#">

                    <i class="bx bxl-linkedin-square"></i>        
                        </a>
                        <a href="#">

                            <i class="bx bxl-instagram-alt"></i>        
                                </a>
                                <a href="#">

                                    <i class="bx bxl-twitter"></i>        
                                        </a>
                                        

     </div>
<div class="btn-group">

    <a href="#" class="btn">Hire</a>
    <a href="#contact" class="btn">Contact</a>
</div>



</div>

<div class="home-img">

    <img src="../image.jpg" alt="">
</div>
</section>
<section class="about" id="about">
    <div class="about-img">
        <img src="../image.jpg" alt="">
    </div>
<div class="about-contect">
    <h2>About <span>Me</span></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde dolore, dolores molestias voluptatibus maiores. Sequi nesciunt architecto doloremque amet deleniti, dicta cum aspernatur at, perferendis quaerat aut error! Assumenda!</p>
    <a href="#" class="btn">Read More</a>
</div>
 
</section>

<section class="services" id="services">
    <h2 class="heading">Services</h2>
    <div class="services-container">
        <div class="service-box">
            <div class="service-info">
                <i class="bx bxs-devices"></i>
                <h4>Mobile App Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur repudiandae labore praesentium incidunt quia nisi. Eos, et laborum. Accusamus aliquam sequi minima alias, dolorem ullam autem sed accusantium aliquid.</p>

            </div>
        </div>
        <div class="service-box">
            <div class="service-info">
                <i class="bx bx-code"></i>
                <h4>Frontend Development </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur repudiandae labore praesentium incidunt quia nisi. Eos, et laborum. Accusamus aliquam sequi minima alias, dolorem ullam autem sed accusantium aliquid.</p>

            </div>
        </div>
         <div class="service-box">
            <div class="service-info">
                <i class="bx bx-code-curly"></i>
                <h4>Backend Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur repudiandae labore praesentium incidunt quia nisi. Eos, et laborum. Accusamus aliquam sequi minima alias, dolorem ullam autem sed accusantium aliquid.</p>

            </div>
        </div>
   
    </div>

</section>
<section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me</span></h2>
<form action="">
    <div class="input-group">
<div class="input-box">
    <input type="text" placeholder="Full Name">
    <input type="email" placeholder="Email">
</div>
<div class="input-box">
    <input type="number" placeholder="Phone Nummber">
<input type="text" placeholder="subject">
</div>

    </div>
    <div class="input-group-2">
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
<input type="submit" value="Send Message" class="btn">
    </div>
</form>




</section>
<footer class="footer">
    <div class="social-icon">
        <a href="#">

    <i class="bx bxl-github"></i>        
        </a>

        <a href="#">

            <i class="bx bxl-linkedin-square"></i>        
                </a>
                <a href="#">

                    <i class="bx bxl-linkedin-square"></i>        
                        </a>
                        <a href="#">

                            <i class="bx bxl-instagram-alt"></i>        
                                </a>
                                <a href="#">

                                    <i class="bx bxl-twitter"></i>        
                                        </a>
                                        

     </div>
     <ul class="list">
        <li>
            <a href="#">FAQ</a>

        </li>
        <li>
            <a href="#services">Services</a>

        </li>
        <li>
            <a href="#about">About ME</a>

        </li>
        <li>
            <a href="#contact">Contact</a>

        </li>


     </ul>
<p class="copyright">
    &copy Abdullah Khan | All Rights Reserved
</p>

</footer>

    <script src="script.js"></script>
  </body>
</html>
-------------------------------------------------------------------------------------------------------------------------------------------------------------


CSS


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: "Poppins", sans-serif;
  }
  html {
    font-size: 60%;
    overflow-x: hidden;
  }
  :root {
    --bg-color: #080808;
    --second-bg-color: #001005;
    --text-color: white;
    --main-color: #00ff51;
  }
  body{
    background: var(--bg-color);
    color: var(--text-color);
  }
  .header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 4rem 12%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  #menu-icon{
    font-size: 3.6rem;
    color: var(--main-color);
    display: none;
  }
  .logo{
    font-size: 3rem;
    color: var(--text-color);
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .logo:hover{
    transform: scale(1.1);
  }
  span{
    color: var(--main-color);
}
.navbar a{
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left: 4rem;
    font-weight: 500;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease;
}
.navbar a:hover{
    border-bottom: 3px solid var(--main-color);
    color: var(--main-color);
}
section{
    min-height: 100vh;
    padding: 10rem 12%;
}
.home{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem;
}
.home-content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
}
.home-content h1{
    font-size: 8rem;
    font-weight: 700;
    margin-top: 1.5rem;
    line-height: 1;
}
.home-content h3{
    font-size: 4rem;
    margin: 1rem 0;
}
.home-content p{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8;
}
.home-img img{
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 25px var(--main-color);
    transition: 0.4s ease-in-out;
}
.home-img img:hover{
    box-shadow: 0 0 25px var(--main-color),
                0 0 50px var(--main-color),
                0 0 100px var(--main-color);
}
.social-icon a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    padding: 1rem;
    background: transparent;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    color: var(--main-color);
    margin: 3rem 0.5rem;
    transition: 0.3s ease;
}
.social-icon a:hover{
    color: var(--text-color);
    background-color: var(--main-color);
    transform: scale(1.2)translate(-5px);
    box-shadow: 0 0 25px var(--main-color);
}
.btn-group{
    display: flex;
    gap: 1.5rem;
}
.btn{
    display: inline-block;
    padding: 1rem 3rem;
    background: var(--main-color);
    box-shadow: 0 0 25px var(--main-color);
    border-radius: 3rem;
    font-size: 1.8rem;
    color: black;
    border: 2px solid transparent;
    font-weight: 600;
    transition: 0.3s ease-in-out;
}
.btn:hover{
    transform: scale(1.05);
    box-shadow: 0 0 25px var(--main-color),
                0 0 50px var(--main-color);
}
/* .btn-group a:nth-of-type(2){
    border-color: black;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    box-shadow: 0 0 25px transparent;
}
.btn-group a:nth-of-type(2):hover{
    box-shadow: 0 0 25px var(--main-color);
    background-color: var(--main-color);
    color: black;
} */
.about{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    background-color: var(--second-bg-color);
}
.about-img img{
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 25px var(--main-color);
    transition: 0.4s ease in out;
}
.about-img img:hover{
    
    box-shadow: 0 0 25px var(--main-color),
    0 0 50px var(--main-color),
    0 0 100px var(--main-color);

}
.about-contect h2{
font-size: 7rem;
text-align: left;
}
.about-contect p{
    font-size: 1.5rem;
}
.about-contect .btn{
    margin: 3rem 0;
}
::-webkit-scrollbar{
    width: 20px;
}
::-webkit-scrollbar-thumb{
    background-color: var(--main-color);
}
::-webkit-scrollbar-track{
    background-color: var(--bg-color);
}
.heading{
    text-align: center;
    font-size: 7rem;
    margin: 5rem 0;
}
.services{
    background-color: var(--bg-color);
    color: black;
    
}
.services h2{
    color: var(--text-color);
}
.services-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax (300px, 1fr));
    align-items: center;
    gap: 2.5rem;
    display: flex;
    
}
.service-box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    height: 600px;
    border-radius: 3rem;
    cursor:pointer;
    border: 5px solid transparent;
    transition: 0.4s ease-in-out;
}
.service-box:hover{
    background-color: var(--second-bg-color);
    color: var(--main-color);
    border: 5px solid var(--main-color);
    transform: scale(1.03);
}
.service-info{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}
.service-info i{
font-size: 8rem;
}
.service-info h4{
    font-size: 4rem;
    margin: 2rem 0;
    font-weight: 800;
}


.service-info p{
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.7;
}
.contact{
background-color: var(--second-bg-color);
}
.contact{
    margin-bottom: 3rem;
    color: var(--text-color);
}
.contact form{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 5rem 0;
    text-align: center;
}
.contact form .input-box input,
.contact form textarea{
    width: 100%;
    padding: 2.5rem;
    font-size: 1.8rem;
    color: var(--text-color);
    background-color: var(--bg-color);
    border-radius: 2rem;
    border: 2px solid var(--main-color);
    margin: 1.5rem 0;
}
.footer{
    background-color: var(--bg-color);
    padding: 50px 0;
}
.footer .social-icon{
    text-align: center;
}
.footer ul{
    text-align: center;
    font-size: 1.8rem;   
}
.footer ul li{
    display: inline-block;
    margin-left: 20px;
}
.footer ul li a{
    color: white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
}
.footer ul li a:hover{
    border-bottom: 3px solid var(--main-color);
}
.footer .copyright{
    text-align: center;
    margin-top: 40px;
    font-size: 16px;
}
@media(max-width:1024px){
#menu-icon{
    display: block;
}
.navbar{
    position: absolute;
    top: 100%;
    right: 0;
    width: 50%;
    padding: 1rem 3rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-left: 2px solid var(--main-color);
    border-bottom: 2px solid var(--main-color);
    border-bottom-left-radius: 2rem;
    display: none;
}
.navbar a{
    display: block;
margin: 3rem 0;
    font-size: 2rem;
    color: var(--text-color);
}
.navbar.active{
    display: block;
}
.home{
    flex-direction: column-reverse;
    margin: 5rem 0;
    gap: 5rem;
}
.home-content{
    align-items: center;
    text-align: center;
}
.home-img img{
    width: 52vw;
}
.about{
    flex-direction: column-reverse;
    text-align: center;
}
.about h2{
    text-align: center;
    margin: 2rem 0;
}
.about-img{
    width: 52vw;
}
.contact form{
    flex-direction: column;
}
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

JS

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
menuIcon.classList.toogle('bx-x');
navbar.classList.toogle('active');

}
