import React, { Component } from 'react';
import './App.css';
import { FormControl } from '@material-ui/core';
import { Line } from 'react-chartjs-2';


class Linear extends Component {

    render(){
      return (
        <div className= "split right">
                
                <div>
         <Line 
            options = {{
                responsive: true
            }}
            data= {this.props.data}
        />
       </div>
                
          </div>
      );
  }
  }
  
  export default Linear;
  