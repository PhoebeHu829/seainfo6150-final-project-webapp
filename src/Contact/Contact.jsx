import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact_page">
      <form className='form'>
        <div className="basicInfo">
          <div>
            <div>
              <label className='contact'>Prefix</label>
              <select id="contactDropdown">
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
            </div>

            <label> First Name:</label>
            <input type="text" name="myText" className="contactText" required />
            <label> Last Name:</label>
            <input type="text" name="myText" className="contactText" required />
          </div>
          <div>
            <label> Email Address:</label>
            <input type="text" name="myText" className="contactText" required />
          </div>
          <div>
            <label> Mobile Phone: </label>
            <input type="text" name="myText" className="contactText" required />
          </div>
        </div>

        <div >
          <label htmlFor="contactDropdownId">Contact Preference</label>
          <select className="contactDropdown">
            <option>Email</option>
            <option>TelePhone</option>
          </select>
        </div>

        <div className='overview'>
          <label htmlFor="contactDropdownId">Available hours:</label>
          <div><input type="radio" name="overview_rate" id="nice" value="4" required /><label htmlFor="nice"> Morning</label></div>
          <div><input type="radio" name="overview_rate" id="good" value="3" /><label htmlFor="good"> Afternoon</label></div>
          <div><input type="radio" name="overview_rate" id="good" value="3" /><label htmlFor="good"> Evenings</label></div>
        </div>

        <label htmlFor="myTextId">Where you hear from us:</label>
        <input type="text" name="myText" className="contactText" required />
        <input type="submit" value="Submit" className='contact_button' />
      </form>

      <div className='contact_text'>
        <h1> Thank You Join Us!</h1>
        <p>
          Join our monthly movie membership and make FREE online reservations in advance.
          Watch movies in any format, including Dolby Cinema, IMAX®, RealD® 3D and more.
          Plus, indulge in the premium perks of AMC Stubs Premiere, including 10% back on food & drink purchases.
          Reserve a ticket as soon as you join.
        </p>
      </div>
    </div >
  )
}

export default Contact;
