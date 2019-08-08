import React from 'react'
import Click from './Click'

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          <Click />
        </button>
      );
    }
  }
  

  export default Square;
