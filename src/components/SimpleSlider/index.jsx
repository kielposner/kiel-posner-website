import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/home/1.jpg";
import image2 from "../../assets/home/2.jpg";
import image3 from "../../assets/home/3.jpg";
import image4 from "../../assets/home/4.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="image1" className="rounded-md p-5 bg-slate-50 border-2 border-slate-700" />
          </div>
          <div>
            <img src={image2} alt="image2" className="rounded-md p-5 bg-slate-50 border-2 border-slate-700"  />
          </div>
          <div>
            <img src={image3} alt="image3" className="rounded-md p-5 bg-slate-50 border-2 border-slate-700"  />
          </div>
          <div>
            <img src={image4} alt="image4" className="rounded-md p-5 bg-slate-50 border-2 border-slate-700"  />
          </div>
        </Slider>
      </div>
    );
  }
}
