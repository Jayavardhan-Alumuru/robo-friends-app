import React from "react";

const searchBox = ({onSearchFieldChange}) => {
    return (
        <div className="pa2">
                 <input
                 className="pa3 ba b--green bg-lightest-blue tc"
                 placeholder="search robots"
                 onChange={onSearchFieldChange}
                  type="search" >
                  </input>
        </div>
   
    );
}

export default searchBox;