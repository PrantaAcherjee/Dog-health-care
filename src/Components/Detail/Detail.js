import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data);
    }, [])
    const iteam = data.filter(td => td.id === id);
    return (
        <div>
            <h1>More about service Details :{id}</h1>
            <h3>price : {iteam.price}</h3>
            <h3>description :{iteam.des}</h3>
            <button className="bg-warning">Order Now</button>
        </div>
    );
};

export default Detail;