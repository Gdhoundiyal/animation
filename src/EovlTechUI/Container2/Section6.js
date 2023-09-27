import React, { Component } from "react";
import { FaBiohazard } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 610,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel section6">
        <h1>Successful Projects</h1>
        <Slider {...settings}>
          <div className="box">
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
          </div>
          <div className="box">
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
          </div>
          <div className="box">
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
          <div className="box">
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
            {/* <h3>4</h3> */}
          </div>
          <div className="box">
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
            {/* <h3>5</h3> */}
          </div>
          <div className="box">
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
            {/* <h3>6</h3> */}
          </div>
          <div className="box">
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
            {/* <h3>7</h3> */}
          </div>
          <div className="box">
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
            {/* <h3>8</h3> */}
          </div>
          <div className="box">
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
            {/* <h3>9</h3> */}
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
}
