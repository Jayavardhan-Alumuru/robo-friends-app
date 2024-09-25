import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ border: '3px solid black', overflowY: 'scroll', height: '900px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;
