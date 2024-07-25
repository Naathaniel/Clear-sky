import './Services.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

export default function GrowingRevenues() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url) => {
    console.log('Opening modal with URL:', url);
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModalIsOpen(false);
    setVideoUrl('');
  };

  return (
    <>
    <div className="maingrow">
        <div className="leftefficiency">
        <h1>Operational Efficiency <br/>
        With ClearSky Software</h1>
        <p>Prior to rolling out business solutions that will make your business more efficient, we will need to better understand your business processes. We will be looking at how your business produces products and or services and the time and money needed to produce said product or service</p>
        </div>
        <div className="rightgrow">
          <img className="rgimg" src="images/Efficiency.png" height={600}></img>
        </div>
      </div>

      <div  className="sec2eff">
        <h4>Optimizing Your Business for Profitability: A Tailored Approach</h4>
        <p>Every business is unique, so there's no single solution to boosting profits. Our focus is on maximizing your resources to achieve sustainable growth. Here's our approach:</p>
        <ol>
          <li>Document and Standardize:
            <ul>
              <li>Clearly define and document all processes to establish benchmarks and identify inefficiencies.</li>
            </ul>
          </li>
          <li>Measure and Track:
            <ul>
              <li>Determine key performance indicators (KPIs) to track the impact of any changes. Continuous monitoring ensures improvements are maintained.</li>
            </ul>
          </li>
          <li>Leverage Technology Wisely:
            <ul>
              <li>Evaluate potential technology investments by quantifying time and cost savings.</li>
              <li>Identify manual tasks that can be automated or outsourced to improve efficiency.</li>
            </ul>
          </li>
          <li>Analyze Production Costs:
            <ul>
            <li>Accurately track unit and project costs to uncover hidden expenses.</li>
            <li>Explore opportunities to reduce input costs through negotiation or alternative sourcing.</li>
            </ul>
          </li>
          <li>Prioritize Customer Experience:
            <ul>
            <li>Continuously improve customer interactions to maximize satisfaction and loyalty.</li>
            </ul>
          </li>
          <li>Address Bottlenecks Proactively:
            <ul>
            <li>Analyze and resolve bottlenecks promptly to maintain smooth operations and avoid profit erosion.</li>
            </ul>
          </li>
        </ol>

      <h5>Our Approach:</h5>
      <p>By making incremental improvements to operational efficiency, your business can achieve long-term profitability. We believe it's better to take a proactive, step-by-step approach rather than waiting for a crisis to force drastic changes.
      Let's work together to tailor a strategy that aligns with your specific goals and challenges.</p>
      </div>


      {/* --------------------- videos --------------------- */}

      <div className="growVids text-center">
        <h2 className="htwo">Enhanced Components that will Improve Efficiency</h2>
        <p>Innovative Approaches to Operation Efficiency</p>
        <div className="Gvid1">
          <img src="./images/thumb/6.png" onClick={() => openModal('https://www.youtube.com/embed/2Bn7WZuGMpI')} alt="Video 1" />
          <img src="./images/thumb/7.png" onClick={() => openModal('https://www.youtube.com/embed/CFnBurkDMJI')} alt="Video 2" />
          <img src="./images/thumb/8.png" onClick={() => openModal('https://www.youtube.com/embed/sQ-1sEI3x9A')} alt="Video 3" />
          <img src="./images/thumb/9.png" onClick={() => openModal('https://www.youtube.com/embed/1H2q_K0dIiQ')} alt="Video 4" />
        </div>

        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <button onClick={closeModal} className="close-button">Close</button>
          <div className="iframe-container">
            {videoUrl && (
              <iframe 
                src={videoUrl} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                onLoad={() => console.log('Iframe loaded with URL:', videoUrl)}
              ></iframe>
            )}
          </div>
        </Modal>
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
  );
}
