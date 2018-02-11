import React, {Component} from 'react';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.items = props.items;
    this.slideSpeed = props.slideSpeed;

    console.log(this.items.indexOf(this.items[0]));
  }

  changeSlides() {
    let firstItem = this.items.shift();
    this.items.push(firstItem);
    console.log('ldsdk');
  }

  componentDidMount() {
     setInterval(
      () => this.changeSlides(),
      this.slideSpeed
    );
  }
  //
  // componentWillUnmount() {
  //   clearInterval(this.slideInterval);
  // }

  render() {

    return (
      <div className="slider">
        <ul className="slides-list">
          <li key={'slide'} className="slide-item">
            <img src={this.items[0]} alt=""/>
          </li>
        </ul>
      </div>
    );

  }
}

export default Slider;
