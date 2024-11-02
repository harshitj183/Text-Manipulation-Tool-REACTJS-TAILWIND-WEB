import React from "react";

import PropTypes from "prop-types";
export default function Maintool(props) {
  return (
    <>
      <div className="input-container">
        <label >
          
        <span className="ml-3 text-xl">{props.headname}</span>
        
        </label>
        <br/>
      
      </div>
        <textarea type="text" id="inputBox" placeholder={props.placeholdername}  rows='3' />

  
    
    </>
  );
}
Maintool.propTypes = {
  headname: PropTypes.string,
};