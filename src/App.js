import React from 'react'
import IncrementDecrement from './component/IncrementDecrement';
import './App.css';
import PropTypes from "prop-types";

class App extends React.Component {
 render(){
    return (
      <div className="App">
        <IncrementDecrement 
        number={15}
        />    
      </div>
    );
  }
          
} 

App.propTypes = {
  number: PropTypes.number.isRequired
};

export default App;
