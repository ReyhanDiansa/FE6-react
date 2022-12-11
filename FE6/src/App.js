import React from "react"; 
import "./css/style.css";
// import data from './siswa';
// import fotbar from "./assets/images/fotbar.png";
// import data   from "./data.json";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./Home";
import Detail from "./Detail";


function App() {
  // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  return (  
    <React.Fragment>
       <Router>
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path='/detail' element={<Detail />} />
    </Routes>
    </Router>
    </React.Fragment>
  );
}

// class Navbar extends Component {
//   render() {
//     return (
//       <section class="navbar" id="navbar">
//         <div class="navbar-title">
//           <h3>UNDEFINED</h3>
//         </div>
//         <nav>
//           <ul class="menu">
//             <li>
//               <a href="#hero">Dashboard</a>
//             </li>
//             <li>
//               <a href="https://www.youtube.com/embed/knk1mipy0Ss?rel=0">
//                 Video
//               </a>
//             </li>
//             <li>
//               <a href="#aboutus">About Us</a>
//             </li>
//           </ul>
//           <div class="menu-toggle">
//             <input type="checkbox" />
//             <div class="icon-bars">
//               <i class="fa-solid fa-bars"></i>
//             </div>
//             <div class="icon-close">
//               <i class="fa-solid fa-xmark"></i>
//             </div>
//           </div>
//         </nav>
//       </section>
//     );
//   }
// }

// class Hero extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div class="hero-content">
//           <div class="hero-content-title">
//             <h1>UNDEFINED</h1>
//           </div>
//           <div class="hero-content-info">
//             <div class="info-build">
//               <h5>24/10/2k22</h5>
//               <div class="line-hero"></div>
//               <h6>Created On</h6>
//             </div>
//             <div class="info-desc">
//               <p>
//                 Haloo Semua, kenalin kami dari kelompok 6 TEFA MLG bidang
//                 Frontend. Cari tahu yuk siapa aja membernya!
//               </p>
//             </div>
//           </div>
//           <div class="hero-content-tagline">
//             <h3>yang penting JJ</h3>
//           </div>
//           <div class="hero-content-btn">
//             <a href="#aboutus">VIEW TEAM</a>
//           </div>
//         </div>
//         <div class="hero-video">
//           {/* <!-- <video controls src="assets/videos/team-jj.mp4"></video> --> */}
//           <iframe
//             title="video_jj"
//             width="553"
//             height="314"
//             src="https://www.youtube.com/embed/knk1mipy0Ss?rel=0"
//             frameborder="0"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// class Aboutus extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div class="team-foto">
//           <img src={fotbar} alt="" class="fotbar" />
//           <a href="/detail">
//             Show Details<i class="fa-solid fa-arrow-right-long"></i>
//           </a>
//           {/* <Link to="/detail" >
//           <i class="fa-solid fa-arrow-right-long"></i>
//           </Link> */}
          
         

//         </div>
//         <div class="aboutus-content">
//           <div class="aboutus-content-title">
//             <h1>ABOUT US</h1>
//           </div>
//           <div class="aboutus-content-main">
//             <Data />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// function Data() {
//   return data.map((data) => (
//     <div class="aboutus-person">
//       <div class="person-img">
//         <img src={require (`./assets/images/${data.image}`)} alt="" />
//         <div class="line-person"></div>
//         <h4>{data.nickname}</h4>
//         <div class="line-person"></div>
//       </div>
//       <div class="person-content">
//         <p>{data.deskripsi}</p>
//       </div>
//     </div>
//   ));
// }

// class Footer extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div class="footer-connect">
//           <h4>Connect With Us</h4>
//           <a href="https://www.instagram.com/reyhanmd._">
//             <i class="fa-brands fa-instagram"></i>
//           </a>
//           <a href="https://www.instagram.com/reyhanmd._">
//             <i class="fa-brands fa-youtube"></i>
//           </a>
//           <a href="https://www.instagram.com/reyhanmd._">
//             <i class="fa-brands fa-twitter"></i>
//           </a>
//         </div>
//         <div class="footer-content">
//           <div class="content-privacy">
//             <p>Privacy Statement</p>
//             <p>Term of Use</p>
//           </div>
//           <div class="content-copyright">
//             <p>©Undefined. 2022</p>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// function Script(){
//   const menuToggle = document.querySelector(".menu-toggle input");
//   const nav = document.querySelector("nav ul");

//   menuToggle.addEventListener("click", function () {
//     nav.classList.toggle("slide");
//   });

//   // Smooth Scroll
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });

//   // Navbar Scroll
//   window.addEventListener("scroll", function () {
//     var navbar = document.querySelector(".navbar");
//     navbar.classList.toggle("sticky", window.scrollY > 0);
//   });
// }
export default App;
