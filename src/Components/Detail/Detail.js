import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => {
                
                const findServiceData = data.find(service => service.id == id)
                if (findServiceData) {
                    setService(findServiceData);
                }
            })
    }, [])
    
    return (
        <div>
             <img src={service.img} alt="" />
            <h3>price : {service.price}</h3>
            <h3>description :{ service.des}</h3>
            <button className="bg-warning">Order Now</button>
        </div>
    );
};

export default Detail;