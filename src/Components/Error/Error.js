import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        // error section added 
        <div className="Error-div">
            <div style={{ color: "yellow" }}>
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h2 id="h-2">404</h2>
            <h5 id="h-5">Error: Data not found ! <br />
                please search something relevent. </h5>
        </div>
    );
};

export default Error;