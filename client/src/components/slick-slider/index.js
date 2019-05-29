import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };

    return (
      <div>
        <Slider {...settings}>
          {[0, 1, 2, 3, 4].map((item) => {
            return (
              <div>
                <div key={item} style={{display: 'inline-block', backgroundColor: 'red', height: 300, margin: 10, fontSize: 40, textAlign: 'center', lineHeight: 200}}>
                  <img src={item % 2 ? 'https://espano.ge/upload/images/products/15.jpg' : 'https://espano.ge/upload/images/products/5c9e52d307794.jpg'} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}