import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import '../styles/style.css'
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

export default function Firstpage() {

    useEffect(() => {
        /*================================ toggle icon navbar ====================================*/
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        /*================================scroll Sections active  link==============================================*/
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
                    });
                };
            });
            /*==================Sticky navbar=======================*/
            const header = document.querySelector('header');

            header.classList.toggle('sticky', window.scrollY > 100);

            /*================== remove toggle icon navbar when click navbar link(sroll) =======================*/
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        /*================== scroll reveal =======================*/
        ScrollReveal({
            // reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        /*================== typed js =======================*/
        const typed = new Typed('.multiple-text', {
            strings: ['Full Stack Developer', 'Web Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          });
          return () => {
            typed.destroy();
          };
    }, []);

    /*================== dark Mode =======================*/
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('darkMode', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('darkMode', 'light')
        localStorage.setItem("selectedTheme", "light")
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    /*================== SMTP js =======================*/
    //   function sendEmail(){
    //     Email.send({
    //       Host : "smtp.gmail.com",
    //       Username : "yadavwebyugank01@gmail.com",
    //       Password : "yugank@123",
    //       To : 'monstervillan2930@gmail.com',
    //       From : document.getElementById("#email").value,
    //       Subject : "New Contact Form Enquiry",
    //       Body : "Name: " + document.getElementById("#name").value 
    //         + "<br> Email: " + document.getElementById("#email").value
    //         + "<br> Number: " + document.getElementById("#number").value
    //         + "<br> Message: " + document.getElementById("#message").value
    //     }).then(
    //       message => alert("Message Sent Succesfully")
    //     );
    //  }
    return (
        <div>
            {/* <!-- header design --> */}
            <header className="header">
                <a href="#home" className="logo">Port<span>Folio</span></a>

                <i className='bx bx-menu' id="menu-icon"></i>

                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">PortFolio</a>
                    <a href="#Contact">Contact</a>
                    <a className='dark_mode'>
                        <input
                            className='dark_mode_input'
                            type='checkbox'
                            id='darkmode-toggle'
                            onChange={toggleTheme}
                            defaultChecked={selectedTheme === "dark"}
                        />
                        <label className='dark_mode_label' for='darkmode-toggle'>
                            <Sun />
                            <Moon />
                        </label>
                    </a>

                </nav>
            </header>

            {/* <!-- home section design --> */}

            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Yugank Kumar Yadav</h1>
                    <h3>And I'm a <span className="multiple-text"></span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.ncidunt officia aspernatur beatae porro iure minus sunt minima.</p>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/yugank-yadav/" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a></li>

                        <li><a href="https://twitter.com/Yugank_yadav_01?t=cnffE_6AQmEOUeUC-gyKMw&s=09" target="_blank">
                            <i className="fa fa-twitter"></i></a>
                        </li>

                        <li><a href="https://github.com/Yugank-yadav" target="_blank">
                            <i className="fa fa-github"></i></a>
                        </li>

                        <li><a href="https://www.instagram.com/villan_yugank/" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a></li>
                    </ul>
                    <a href="Yugank_Kumar Yadav_Resume.pdf" className="btn" target="_blank">Download CV</a>
                </div>
                <div className="home-img">
                    <img src="./img/img.jpg" alt="" />
                </div>
            </section>
            {/* <!-- End of home section design --> */}

            {/* <!-- About Section design --> */}

            <section className="about" id="about">
                <div className="about-img">
                    <img src="./img/img.jpg" alt="Internal Error" />
                </div>
                <div className="about-content">
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>Full Stack Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut, numquam debitis dolore saepe aliquid nobis culpa dolorem tempore voluptate ratione laborum illum sint soluta ab ipsa quod at ipsum aperiam nam quidem dignissimos, quisquam optio! Aperiam alias, tempore voluptates sequi illo ullam voluptate nisi earum culpa praesentium?</p>
                    <a href="aboutme.html" className="btn">Read More</a>
                </div>
            </section>
            {/* <!-- End of About section design --> */}

            {/* <!-- Services Section design --> */}

            <section className="services" id="services">
                <h2 className="heading">Our <span>Services</span></h2>
                <div className="services-container">
                    <div className="services-box">
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda labore ipsam exercitationem eos beatae cum nemo? Ex, provident quae?</p>
                        <a href="/" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <i className='bx bxs-paint' ></i>
                        <h3>Grapics Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda labore ipsam exercitationem eos beatae cum nemo? Ex, provident quae?</p>
                        <a href="/" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <i className='bx bxs-graduation' ></i>
                        <h3>Teaching</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda labore ipsam exercitationem eos beatae cum nemo? Ex, provident quae?</p>
                        <a href="/" className="btn">Read More</a>
                    </div>

                </div>
            </section>
            {/* <!-- End of Services section design --> */}

            {/* <!-- PortFolio Section design --> */}

            <section className="portfolio" id="portfolio">
                <h2 className="heading">Latest <span>Project</span></h2>
                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src="./img/1.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="./img/2.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="./img/3.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="./img/4.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="./img/5.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="./img/6.jpg" alt="" />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cupiditate!</p>
                            <a href="/"><i className='bx bx-link-external' ></i></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End of Services section design --> */}

            {/* <!-- Contact Section design --> */}

            <section className="contact" id="Contact">
                <h2 className="heading">Contact <span>Me!</span></h2>
                <form action="/">
                    <div className="input-box">
                        <input type="text" id="name" placeholder="Full Name" required />
                        <input type="email" id="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-box">
                        <input type="text" id="number" placeholder="Mobile Number" required />
                        <input type="text" id="message" placeholder="Email subject" required />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn">Send Message</button>
                    {/* <!-- <input type="submit" value="Send Message" className="btn"> --> */}
                </form>

            </section>
            {/* <!-- End of Contact section design --> */}

            {/* <!-- Footer design --> */}

            <footer className="footer">
                <div className="footer-text">
                    <p>CopyRight &copy; Yugank Yadav | All Rights Reserved.</p>
                </div>
                <div className="footer-iconTop">
                    <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
                </div>
            </footer>
            {/* <!-- End of Footer design --> */}



            {/* <!-- custom js --> */}

            <script src="script.js"></script>
        </div>
    )
}
