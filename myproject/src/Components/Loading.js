import React, { Component } from 'react';
// import './loading.css'
import loading from './vidio-output.gif';

export class Loading extends Component {
  render() {
    return (
      <>
        <img className='h-24' src={loading}/>
      </>
    )
  }
}

export default Loading