import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Pages.css';

export default function MasterDetail() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const option = params.get('option');
    if (category && option) {
      setSelectedCategory(category);
      setSelectedOption(option);
    }
  }, [location.search]);

  const options = {
    'Introductory Module': [
      { 
        label: 'Initial Assessment, New Website, Infrastructure, and Analytics', 
        videos: ['https://www.youtube.com/embed/2un4KTTKTSo'], 
      }
    ],
    'Support Module': [
      { 
        label: 'Social Media Management, Local SEO, KPI, and Customer Engagement', 
        videos: ['https://www.youtube.com/embed/MdA0oIBLe8Q'], 
      }
    ],
    'Growth and Visibility Module': [
      { 
        label: 'Analytics', 
        videos: ['https://www.youtube.com/embed/2KYi0gDTOtI'], 
      },
      { 
        label: 'Local SEO', 
        videos: ['https://www.youtube.com/embed/hP0y1C0NZek'], 
      },
      { 
        label: 'On Page Optimization', 
        videos: ['https://www.youtube.com/embed/7u_Mq-2uOEE'], 
      },
      { 
        label: 'Off Page Optimization', 
        videos: ['https://www.youtube.com/embed/hfLUlRef71s'], 
      },
      { 
        label: 'Social Media', 
        videos: ['https://www.youtube.com/embed/XylpPeh5q9E'],
      },
    ],
    'Building Credibility Module': [
      { 
        label: 'Construction Library', 
        videos: ['https://www.youtube.com/embed/SXU8m456orY'], 
      },
      { 
        label: 'AI and 3D designer', 
        videos: ['https://www.youtube.com/embed/O9U8f6BBjvk'], 
      },
      { 
        label: 'Demo Room', 
        videos: ['https://www.youtube.com/embed/ArgvO6hOYVU'], 
      },
      { 
        label: 'Reviews', 
        videos: ['https://www.youtube.com/embed/jYkPm3jyCNI'], 
      },
    ],
    'Optimize Operations Module': [
      { 
        label: 'Document Management System', 
        videos: ['https://www.youtube.com/embed/2Bn7WZuGMpI'], 
      },
      { 
        label: 'Qualifying Potential Customers', 
        videos: ['https://www.youtube.com/embed/CFnBurkDMJI'], 
      },
      { 
        label: 'Molly Hammer', 
        videos: ['https://www.youtube.com/embed/1H2q_K0dIiQ'], 
      },
      { 
        label: 'Content Management System', 
        videos: ['https://www.youtube.com/embed/sQ-1sEI3x9A'], 
      },
    ],
  };

  const selectOption = (category, option) => {
    setSelectedCategory(category);
    setSelectedOption(option);
    setShowMenu(false);
  };

  const currentOption = options[selectedCategory]?.find(opt => opt.label === selectedOption);
  const currentVideo = currentOption?.videos[0];

  return (
    <div className="master-detail">
      <h4 className='text-center p-5 md-htre'><strong>ClearSky</strong> Special Unique One Time Only Offer (First 20 signups)</h4>
      <div className="master-detail-container">
        <div className="hamburger-menu">
          <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            <div className='m3line'>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          </div>
          {showMenu && (
            <div className="menu-categories">
              {Object.entries(options).map(([category, categoryOptions]) => (
                <div className="menu-group" key={category}>
                  <h4 className="menu-title">{category}</h4>
                  {categoryOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`menu-option ${selectedOption === option.label ? 'selected' : ''}`}
                      onClick={() => selectOption(category, option.label)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`master-section ${showMenu ? 'hidden' : ''}`}>
          <div className='master-one'>
            <h4 className='enhan'>Enhanced Modules</h4>
            {Object.entries(options).map(([category, categoryOptions]) => (
              <div className="option-group" key={category}>
                <h4 className="option-title">{category}</h4>
                {categoryOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`option ${selectedOption === option.label ? 'selected' : ''}`}
                    onClick={() => selectOption(category, option.label)}
                  >
                    <div className="option-label">
                      {option.label}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section1">
          <div className='detplan'>
            <h4 className='detail'>Details:</h4>
          </div>
          <div className="detail-section">
            {selectedOption ? (
              <div className="selected-option-details">
                <h3 className='optiontitle'>{selectedOption}</h3>
                <div className="selected-option-videos">
                  <iframe 
                    src={currentVideo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="selected-option-video video-size">
                  </iframe>
                </div>
                <p>{currentOption?.content}</p>
              </div>
            ) : (
              <p>{selectedCategory ? 'Select an option' : 'Select a category and option'}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
