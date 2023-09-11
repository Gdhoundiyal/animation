// import $ from "jquery";

// function Page6() {
//   $(document).ready(function () {
//     let slidecount = $(".dot").length;
//     let currentIndex = 0;
//     $(".next").click(function () {
//       console.log(slidecount);
//       currentIndex++;
//       console.log(currentIndex);

//       if (currentIndex >= slidecount) {
//         currentIndex = 0;
//         console.log("came");
//       }
//       showimages(currentIndex);
//     });

//     $(".prev").click(function () {
//       currentIndex--;
//       console.log(currentIndex);
//       if (currentIndex < 0) {
//         currentIndex = slidecount - 1;
//         console.log("works");
//       }
//       showimages(currentIndex);
//       console.log(currentIndex);
//     });

//     $(".dot").click(function () {
//       currentIndex = $(this).index();
//       console.log(currentIndex);
//       showimages(currentIndex);
//     });

//     function showimages(index) {
//       $(".slide").hide().removeClass("active");
//       $(".slide").eq(index).show().addClass("active");
//       $(".dot").removeClass("active-dot");
//       $(".dot").eq(index).show().addClass("active-dot");
//       console.log(index);
//     }
//   });

//   return (
//     <div className=" p-5 page6 slider-container">
//       <div className="bg-3 w-100  border container-xl page6div slide active">
//         <h2 className="p-8 page6txt">
//           "Working with evil Tech has been a game changer for our business.
//           Their expertise in cloud computing allowed us to scale our operations
//           quickly and efficiently, and their personalized approach ensured that
//           we got exactly but we needed."
//         </h2>
//         <div className="d-flex justify-content-center p-5 page6nameicon">
//           <img
//             className="bbimg"
//             src="./images/imggggg2.jpg"
//             alt="walter white"
//           />
//           <div className="m-3">
//             <div className="john">John Smith</div>
//             <div className="ceo">CEO of Uwang Corporation</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-3 w-100  border container-xl page6div slide">
//         <h2 className="p-8 page6txt">
//           "Working with evil Tech has been a game changer for our business.
//           Their expertise in cloud computing allowed us to scale our operations
//           quickly and efficiently, and their personalized approach ensured that
//           we got exactly but we needed."
//         </h2>
//         <div className="d-flex justify-content-center p-5 page6nameicon">
//           <img className="bbimg" src="./images/bb.png" alt="walter white" />
//           <div className="m-3">
//             <div className="john">Walter White</div>
//             <div className="ceo">CEO of evance Corporation</div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-3 w-100  border container-xl page6div slide">
//         <h2 className="p-8 page6txt">
//           "Working with evil Tech has been a game changer for our business.
//           Their expertise in cloud computing allowed us to scale our operations
//           quickly and efficiently, and their personalized approach ensured that
//           we got exactly but we needed."
//         </h2>
//         <div className="d-flex justify-content-center p-5 page6nameicon">
//           <img
//             className="bbimg"
//             src="./images/imggggg3.jpg"
//             alt="walter white"
//           />
//           <div className="m-3">
//             <div className="john">Jack Ryan</div>
//             <div className="ceo">CEO of zubek technology</div>
//           </div>
//         </div>
//       </div>
//       <button className="prev">❮</button>
//       <button className="next">❯</button>
//       <div className="dots">
//         <div className="dot active-dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaBiohazard } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section6() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section6">
      <h1>Successful Projects</h1>

      <Slider {...settings}>
        <div className="carddiv  ">
          <div className="card1">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Uwang Corp.</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Uwang Corp.</h3>
            </div>
          </div>
          <div className="card2">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Mika Medika</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mika Medika</h3>
            </div>
          </div>
          <div className="card3">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">uwang Corp</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mackland Corp.</h3>
            </div>
          </div>
        </div>
        <div className="carddiv  ">
          <div className="card1">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Uwang Corp.</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Uwang Corp.</h3>
            </div>
          </div>
          <div className="card2">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Mika Medika</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mika Medika</h3>
            </div>
          </div>
          <div className="card3">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">uwang Corp</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mackland Corp.</h3>
            </div>
          </div>
        </div>
        <div className="carddiv  ">
          <div className="card1">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Uwang Corp.</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Uwang Corp.</h3>
            </div>
          </div>
          <div className="card2">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">Mika Medika</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mika Medika</h3>
            </div>
          </div>
          <div className="card3">
            <div className="hovershowdiv">
              <div className="hoverdiv">
                <p className="cyber">CYBER SECURITY</p>
                <FaBiohazard className="iconafterhover" />
                <h4 className="uwang">uwang Corp</h4>
                <p className="uwangtxt">
                  Uwang corporation, a large Textile industry, was concerned
                  about the big building Projects
                </p>
                <button className="readbtn">Read More &rarr;</button>
              </div>
              <p className="year">2022</p>
              <h3 className="bottomname">Mackland Corp.</h3>
            </div>
          </div>
        </div>
      </Slider>
      <div>
        <div className="d-flex justify-content-between">
          <p className="samsung">SAMSUNG</p>
          <p className="google">Google</p>
          <p className="amazon">Amazon</p>
          <p className="window">Windows</p>
          <p className="sony">SONY</p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
