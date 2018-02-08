import React, {Component} from 'react';
import './App.css';
import Slider from './slider/Slider'
import data from './data/options.json';


class App extends Component {
  constructor(props){
    super(props);

    this.slider = new Slider(data.slider1);
    this.slider2 = new Slider(data.slider2);
  }

  render() {

    return (
      <div className="content">
        {this.slider.render()}
        {this.slider2.render()}
      </div>
    );
  }
}

export default App;
