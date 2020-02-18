import React from 'react';

function Spinner(props) {
  const count = props.count;
  const setCount = props.setCount;

  function onChange() {}

  return (
    <div className="spinner">
      <button className="spinner-button"
        onClick={() => (
          count > 1 ? setCount(count - 1) : null
        )}
      >&minus;</button>
      <input className="spinner-count" type="text"
        value={count}
        onChange={() => onChange()}
      />
      <button className="spinner-button"
        onClick={() => (
          count < 99 ? setCount(count + 1) : null
        )}
      >&#43;</button> 
      
    </div>
  );
}

export default Spinner;