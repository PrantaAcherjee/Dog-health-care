import React from 'react';
import "./Support.css"
const Support = () => {
    return (
        <div className='support-style row  m-3'>
           <div className="col-md-4 py-3">
            <h3><i class="fas fa-headphones text-success"></i> 24/7 SUPPORT</h3>
            <p>Call Us Now At 0(123)-456-78-99</p>
           </div>
           <div className="col-md-4 py-3">
           <h3><i class="fas fa-truck-pickup text-success"></i> SHIPPING</h3>
           <p>On orders over $50 - exclusions apply</p>
           </div>
           <div className="col-md-4 py-3">
            <h3><i class="fas fa-hand-holding-usd text-success"></i> MONEY BACK</h3>
            <p>100% Money Back Guarantee</p>
           </div>
           <h3></h3> 
        </div>
    );
};

export default Support;