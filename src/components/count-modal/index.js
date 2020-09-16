import React from 'react';

import './count-modal.css';

const CountModal = (props) => {

    return (
      <div className="App-count">
          <h2>Thank you for Shopping!</h2>
          <span>Your count: {props.count}$</span>
          <button onClick={props.closeCount}>O`key</button>
      </div>
    );
};

export default CountModal;
