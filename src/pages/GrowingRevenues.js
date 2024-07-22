import React from "react"
import './Services.css';
import { Link } from 'react-router-dom';


export default function GrowingRevenues(){
    return(
   <>
      <div className="maingrow">
        <div className="leftgrow">
        <h1>Growing Revenues <br/>
        With ClearSky Software</h1>
        <h2 className="htwo">Our First step</h2>
        <p className="para">Prior to rolling out business solutions that Grow Revenues, it is imperative that we better understand your business. We would be considering the following:</p>
        <li className="para">SWOT Analysis, outlining Strengths, Weaknesses, Opportunities, and Threats.</li>
        <li className="para">Online Presence, understand the business environment. </li>
        <li className="para">Identify Competitors, direct and indirect competitors within your industry or niche.</li>
        <li className="para">Marketing and Positioning, unique selling propositions.</li>
        <li className="para">Pricing Strategy, pricing strategy of competitors in comparison to your business.</li>
        </div>
        <div className="rightgrow">
          <img className="rgimg" src="images/grow.png" height={600}></img>
        </div>
      </div>

      <div className='AARRRtitle'>
          <h2 className="htwo">Moving Forward</h2>
          <p className="para">ClearSky Software process can be broken down into 5 components: Each component is unique, and with each component there will be programmatic and manual solutions. The exact composition of the component will come from the metrics and what defines <strong>"Best results".</strong> The best process is ever changing and requires constant monitoring.</p>
      </div>

      <div className="AArrrcontent">
        <div className="AR1">
        <img className="aarrr" src="images/AR.png" height={400}></img>
        </div>
        <div className="AR2">
          <h5 className="hfiveorange">Aquisition</h5>
          <p className="paraAR">Traditional media, Word of mouth, Online/Digital, Physical Events/Establishment.</p>
          <h5 className="hfiveorange">Activation</h5>
          <p className="paraAR">The moment a user becomes a customer, 
          and sees value in a product.</p>
          <h5 className="hfiveorange">Retention</h5>
          <p className="paraAR"> Meet or exceed customer expectation.</p>
          <h5 className="hfiveorange">Referral</h5>
          <p className="paraAR">Developing a brand where your customers are comfortable sharing with their friends and associates.</p>
          <h5 className="hfiveorange">Revenue</h5>
          <p className="paraAR">Optimizing all of the above steps producing the most efficient journey.</p>
        </div>
      </div>
 
      <div className="banner">
        <div className="bannerdiv">
        <div className="bann1">
        <h3>Unlocking Success: <br/> <strong className="banwhite">ClearSky Software Case Studies</strong> </h3>
        <p>Discover how ClearSky Software transformed businesses through innovative solutions. </p>
        </div> 
        <div className="banbtn">
          <Link className="btnban" as={Link} to="/CaseStudy">Explore the Case Studies</Link>
        </div>
        </div>
      </div>

   </>
 )
}