
import React, { Component } from 'react';
import './App.css';
import {HorizontalBar} from 'react-chartjs-2';

class Horizontal extends Component {
    render(){
      return (
        <div className= "split right">
                <div>
                        <div>
                            <HorizontalBar data={this.props.data}/>
                        </div>
                </div>   
          </div>
      );
  }
  }
  export default Horizontal;
  