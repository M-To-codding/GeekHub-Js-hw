import React, {Component} from 'react';

class Slider extends Component {
  constructor(props) {

    super(props);

    this.state = {
      slides: props.items
    };

    this.slideSpeed = props.slideSpeed;
  }

  componentDidMount() {

    this.slideInterval = setInterval(
      () => this.changeSlides(),
      this.slideSpeed || 5000
    );

  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  changeSlides() {

    let firstItem = this.state.slides.shift();
    this.state.slides.push(firstItem);

     this.setState({
       slides: this.state.slides
     })
  }

  render() {

    return (
      <div className="slider">
        <ul className="slides-list">
          <li key={'slide'} className="slide-item">
            <img src={this.state.slides[0]} alt=""/>
          </li>
        </ul>
      </div>
    );

  }
}

export default Slider;
