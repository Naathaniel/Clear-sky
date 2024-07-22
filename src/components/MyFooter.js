import React from "react"
import { Link } from 'react-router-dom';
import './MyFooter.css';
import 'animate.css';


export default function MyFooter(){
    return(
    <>
      <div className="foot" id="Contact">
       <div className="foot2">
        <div className="frow1">
        <div className="contft">
          <img className="ftlogo" src="images/footlogo.png" height={200}></img>
          </div>
        </div>
        <div className="frow2">
          <h4>Quick Links</h4>
          <div className="footions">
            <p><Link to="/" className="footlink">Home</Link></p>
            <p id="link">About</p>
            <p id="Services">Services</p>
            <p><Link to="/CaseStudy" className="footlink">Case Studies</Link></p>
            <p id="Prices">Beta Program</p>
            </div>
        </div>
        
        <div className="frow3">
        <h4>Contact Us</h4>
        <div className="footions">
        <p><strong>Email:</strong> r.dredhart@clearskysoftware.net</p>
        <p><strong>Phone:</strong> 1-705-274-9564</p>
        <div class="social-icons">
        <a href="https://www.facebook.com/ClearSkySoftwareSolutions/" target="_blank">
           <img src="/images/icons (1).png" height={28}></img>
        </a>
        <a  href="https://www.linkedin.com/company/clearsky-software/" target="_blank">
           <img src="/images/icons (2).png" height={30}></img>
        </a>
        <a className="icon2"  href="https://www.youtube.com/@ClearSkySoftwareSolutions" target="_blank">
           <img src="/images/icons (3).png" height={32}></img>
        </a>
        </div>  
        </div>
        <div className="btfoot">
        <a className='talktousfoot' href="https://calendly.com/r-dredhartclearskymarketing/overview-of-construction-beta-program" target="_blank">Talk to Us</a>
        </div>
        </div>
        
       </div>
      </div>
      <div className="foot3">
          <p>© clearskysoftware. All Right Reserved 2024.</p>
       </div>
    </>
    )
}


// <div className="contac">
//   <p>Email: r.dredhart@clearskysoftware.net</p>
//   <p>Phone: 1-705-274-9564</p>
// </div>
// <div className="btnfoot">
//   <button className="btnft">Book An Appointment</button>
// </div>