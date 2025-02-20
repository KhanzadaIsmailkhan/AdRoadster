import React, { useState } from 'react';

const CampaignForm = () => {
  const [town, setTown] = useState('');
  const [interest, setInterest] = useState('');
  const [locations, setLocations] = useState([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const towns = [
    'Gulberg',
    'Model Town',
    'DHA',
    'Johar Town',
    'Bahria Town',
    'Lahore Cantonment',
    'Iqbal Town',
    'Allama Iqbal Town',
  ];

  const interests = [
    'Billboards/Hoardings',
    'Outdoor SMD’S',
    'Digital Streamers',
    '3D Signs',
    'Bus Shelters',
    'Vehicle Branding',
  ];

  // Define available locations for each town and interest combination
  const townLocations = {
    'Gulberg': {
      'Billboards/Hoardings': ['Main Market', 'Gulberg Street'],
      'Outdoor SMD’S': ['Liberty Market', 'Main Boulevard'],
      'Digital Streamers': ['Gulberg Boulevard', 'Gulberg Main Square'],
      '3D Signs': ['Mini Market', 'Gulberg Block C'],
      'Bus Shelters': ['Gulberg Bus Stop', 'Main Gulberg'],
      'Vehicle Branding': ['Main Boulevard', 'Gulberg Plaza'],
    },
    'DHA': {
      'Billboards/Hoardings': ['DHA Phase 1', 'DHA Phase 2', 'DHA Phase 5', 'DHA Phase 4', 'DHA Phase 5'],
      'Outdoor SMD’S': ['DHA Phase 3 Main', 'DHA Commercial Market'],
      'Digital Streamers': ['DHA Sector Y', 'DHA Mall Road'],
      '3D Signs': ['DHA Phase 5', 'Cavalry Ground'],
      'Bus Shelters': ['DHA Ring Road', 'DHA Phase 6 Entry'],
      'Vehicle Branding': ['DHA Street Market', 'DHA Main Boulevard'],
    },
    'Model Town': {
      'Billboards/Hoardings': ['Model Town Park', 'Model Town Link Road'],
      'Outdoor SMD’S': ['Model Town Market', 'Model Town Block A'],
      'Digital Streamers': ['Link Road', 'Model Town Main Square'],
      '3D Signs': ['Block A Commercial', 'Central Market'],
      'Bus Shelters': ['Model Town Entry Point', 'Block B Bus Stop'],
      'Vehicle Branding': ['Model Town Roundabout', 'Link Road Boulevard'],
    },
    'Johar Town': {
      'Billboards/Hoardings': ['Expo Center', 'Johar Town Main'],
      'Outdoor SMD’S': ['Emporium Mall', 'Johar Town Sector G'],
      'Digital Streamers': ['Johar Town Main Market', 'Sector H Square'],
      '3D Signs': ['Johar Block A', 'Township Market'],
      'Bus Shelters': ['Johar Main Road', 'Near Expo Center'],
      'Vehicle Branding': ['Johar Boulevard', 'Emporium Road'],
    },
    'Bahria Town': {
      'Billboards/Hoardings': ['Bahria Main Boulevard', 'Sector A'],
      'Outdoor SMD’S': ['Bahria Commercial Area', 'Sector B Market'],
      'Digital Streamers': ['Bahria Entrance', 'Sector D Square'],
      '3D Signs': ['Sector E Park', 'Bahria Mall'],
      'Bus Shelters': ['Bahria Entry Point', 'Sector F Stop'],
      'Vehicle Branding': ['Bahria Central', 'Boulevard Road'],
    },
    'Lahore Cantonment': {
      'Billboards/Hoardings': ['Cantt Main', 'Fortress Stadium'],
      'Outdoor SMD’S': ['Cantt Market', 'Fortress Mall'],
      'Digital Streamers': ['Mall of Lahore', 'R A Bazar'],
      '3D Signs': ['Cantt View Plaza', 'Fortress Square'],
      'Bus Shelters': ['Cantt Main Bus Stop', 'Fortress Road'],
      'Vehicle Branding': ['Cantt Boulevard', 'Fortress Stadium Road'],
    },
    'Iqbal Town': {
      'Billboards/Hoardings': ['Main Boulevard', 'Iqbal Town Park'],
      'Outdoor SMD’S': ['Moon Market', 'Allama Iqbal Road'],
      'Digital Streamers': ['Iqbal Town Square', 'Sector C Market'],
      '3D Signs': ['Sector B Block', 'Commercial Area'],
      'Bus Shelters': ['Main Road Bus Stop', 'Moon Market Stop'],
      'Vehicle Branding': ['Main Boulevard', 'Park Road'],
    },
    'Allama Iqbal Town': {
      'Billboards/Hoardings': ['Main Square', 'Town Main Market'],
      'Outdoor SMD’S': ['Town Entrance', 'Commercial Area'],
      'Digital Streamers': ['Main Market', 'Central Block'],
      '3D Signs': ['Block B Area', 'Market Boulevard'],
      'Bus Shelters': ['Town Entry', 'Main Market Bus Stop'],
      'Vehicle Branding': ['Town Main', 'Commercial Drive'],
    }
  };
  
  const handleTownChange = (e) => {
    const selectedTown = e.target.value;
    setTown(selectedTown);

    // Reset interest and locations when town changes
    setInterest('');
    setLocations([]);
  };

  const handleInterestChange = (e) => {
    const selectedInterest = e.target.value;
    setInterest(selectedInterest);

    // Update locations based on selected town and interest
    if (town && townLocations[town] && townLocations[town][selectedInterest]) {
      setLocations(townLocations[town][selectedInterest]);
    } else {
      setLocations([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Optionally, handle form submission logic here

    // Reset all fields to initial state
    setTown('');
    setInterest('');
    setLocations([]);
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      <div className="form-content">
        <h1 className="form-title">LET'S TALK ABOUT YOUR CAMPAIGN!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>I WANT TO REACH</label>
            <select className="form-select" required value={town} onChange={handleTownChange}>
              <option value="">Select a Town</option>
              {towns.map((town) => (
                <option key={town} value={town}>
                  {town}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>I'M INTERESTED IN</label>
            <select className="form-select" required value={interest} onChange={handleInterestChange}>
              <option value="">Select an Option</option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </div>
          {/* Locations selector that appears when a service is selected */}
          {locations.length > 0 && (
            <div className="form-group available-locations">
              <label>AVAILABLE LOCATIONS</label>
              <select className="form-select" required>
                <option value="">Select a Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label>MY NAME IS</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>I WORK AT</label>
            <input 
              type="text" 
              placeholder="Your Company" 
              required 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>PLEASE CALL ME</label>
              <input 
                type="text" 
                placeholder="Phone Number" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label>OR EMAIL ME</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
          </div>
          <div className="form-group">
            <label>ADDITIONAL INFORMATION</label>
            <textarea 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
          </div>
          <button type="submit" className="submit-button">CONTACT SALES TEAM</button>
        </form>
        {submitted && <p className="success-message">🎉 Congratulations! Your form has been submitted successfully.</p>}
      </div>
    </div>
  );
};

export default CampaignForm;
