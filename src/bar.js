import React, { Component } from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';

class Bars extends Component {

    render(){
      return (
        <div className= "split right">
                <div>
                        <Bar
                            data={this.props.data}
                            width={1000}
                            height={500}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                </div>   
          </div>
      );
  }
  }
  
  export default Bars;
  