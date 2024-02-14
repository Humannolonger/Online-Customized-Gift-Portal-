import React, { useState } from 'react';
import '../assets/css/Sitesettings.css';

function Sitesettings() {
  const [aboutUsText, setAboutUsText] = useState(
    'About Us\nWelcome to Gift Town,...(your existing text here)'
  );
  const [contactUsText, setContactUsText] = useState(
    'Contact Us\nWe\'d Love to Hear from You!...(your existing text here)'
  );

  const handleEdit = (section) => {
    // Retrieve the existing text based on the section
    const existingText = section === 'about' ? aboutUsText : contactUsText;

    // Display a prompt to the user for editing
    const updatedText = prompt('Edit the text:', existingText);

    // Update the state based on the section
    if (section === 'about') {
      setAboutUsText(updatedText);
    } else if (section === 'contact') {
      setContactUsText(updatedText);
    }
  };

  const handleSave = () => {
    // Perform save operation (you can send the data to a server, save to local storage, etc.)
    console.log('Save operation performed');
  };

  return (
    <div className='site-settings-entire'>
      <div className='site-settings-contents'>
        <br />
        <div className='sitesetting-aboutus'>
          <h2>About Us</h2>
          <br />
          <textarea value={aboutUsText} readOnly />
          <br />
          <button className='sitesetting-btn1' onClick={() => handleEdit('about')}>
            Edit
          </button>
          <button className='sitesetting-btn2' onClick={handleSave}>
            Save Changes
          </button>
        </div>
        <br />
        <div className='sitesetting-contactus'>
          <h2>Contact Us</h2>
          <br />
          <textarea value={contactUsText} readOnly />
          <br />
          <button className='sitesetting-btn1' onClick={() => handleEdit('contact')}>
            Edit
          </button>
          <button className='sitesetting-btn2' onClick={handleSave}>
            Save Changes
          </button>
        </div>
        <br />
        {/* Add additional sections as needed */}
      </div>
    </div>
  );
}

export default Sitesettings;