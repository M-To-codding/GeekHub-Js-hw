import React, {Component} from 'react';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.items = props.items;
    this.slideSpeed = props.slideSpeed;
    this.allSlides = [];
    console.log(this.allSlides);
  }

   handlePrev() {
    let firstSlide = this.allSlides[0];
    this.allSlides.splice(firstSlide, 1);
    this.allSlides.push(firstSlide);
    console.log(this.allSlides);
  }

   handleNext() {
    let lastSlide = this.allSlides[this.allSlides.length-1];
    this.allSlides.splice(lastSlide, 1);
    this.allSlides.unshift(lastSlide);
    console.log(this.allSlides);
  }

  render() {

    const slides = this.items.map((slide, index) =>
      <li key={index} className="slide-item">
        <img src={slide} alt=""/>
      </li>
    )

    return (
      <div className="slider">
        <div className="slide-prev" onClick={this.handlePrev}> </div>
        <div className="slide-next" onClick={this.handleNext}> </div>
        <ul className="slides-list">
          {slides}
        </ul>
      </div>

    );

  }
}

export default Slider;
