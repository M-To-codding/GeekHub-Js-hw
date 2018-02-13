import React, {Component} from 'react';
import './App.css';
import Slider from './slider/Slider'
import data from './data/options.json';


class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="content">
        <Slider items={data.slider1.items} slideSpeed={data.slider1.slideSpeed}/>
        <Slider items={data.slider2.items} slideSpeed={data.slider2.slideSpeed}/>
      </div>
    );

  }
}

export default App;
