import React from 'react';
import Footer from '../Footer/Footer';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us">
            <div>
                {/* about us section added  */}
                <h1 style={{ color: "cyan" }}>Welcome to "Animals Care"</h1>
                <p style={{ color: "black" }, { fontWeight: 'bold' }, { backgroundColor: "White" }}>Headquartered in Hershey, Pennsylvania, USA, IGI Global is a leading international academic publisher committed to facilitating the discovery of pioneering research that enhances and expands the body of knowledge available to the research community.Working in close collaboration with expert researchers and professionals from leading institutions, including Massachusetts Institute of Technology (MIT), Harvard University, Stanford University, University of Cambridge, University of Oxford, Tsinghua University, and Australian National University, IGI Global disseminates quality content across 350+ topics in 11 core subject areas.All of these publications have been contributed by over 100,000+ industry-leading researchers and experts worldwide, ensuring that each title contains the most emerging and timeliest research.To ensure that institutions are able to affordably access this valuable research content, all of these titles are available through the IGI Global e-Book Collection and e-Journal Collection.Additionally, IGI Global offers a full collection of Open Access (OA) offerings, including a portfolio of full Gold OA journals, OA reference book publishing, as well as Author Services, to ensure that research can be easily accessible to the entire academic community.Learn more about our OA opportunities here.Also, view our subject coverage below
                </p>
                <h3 style={{ color: "yellow" }}>Our Specialist: </h3>
            </div>
            <div className="about-img">
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573122618.png" alt="" />
                <img className="img-2" src=" https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625574077316.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573160811.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573176714.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573189607.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573334879.png" alt="" />
                <img src=" https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625574531839.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573485356.png" alt="" />
                <img src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1625573392044.png" alt="" />
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AboutUs;