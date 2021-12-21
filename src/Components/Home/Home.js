import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import "./Home.css"
import Services from '../Services/Services';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Support></Support>
            <Footer></Footer>
        </div>
    );
};

export default Home;