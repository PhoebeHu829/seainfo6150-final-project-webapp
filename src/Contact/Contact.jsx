import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ setUser, user }) => {
  console.log(user);
  const [prefix, setPrefix] = useState("Ms");
  const [preferance, setPrefer] = useState("Email")
  console.log(prefix, preferance)
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const iterator = data.values();
    const firstName = iterator.next().value;
    const lastName = iterator.next().value;
    const email = iterator.next().value;
    const telephone = iterator.next().value;
    const ava_hrs = iterator.next().value;
    const hear_from = iterator.next().value;
    setUser({
      'firstName': firstName, 'lastName': lastName, 'email': email,
      'telephone': telephone, 'ava_hrs': ava_hrs, 'hear_from': hear_from
    });
  }
  // const thank_hear = 
  return (
    <div className="contact_page">
      {(user) ?
        <div className='feedback'>
          <h2>Hello, {prefix + '. '}{user.firstName}</h2>
          <p> Thank you for joining us. All your information has been collected.</p>
          <p>Contact Preferance: {preferance} {preferance === 'Email' ? user.email : user.telephone}</p>
          <p> Your available hours are : {user.ava_hrs} </p>
          {(!user.hear_from) ? '' : <p>Finally, thank you for sharing with us that you hear us from {user.hear_from}</p>}
        </div>
        : (
          <form className='form' onSubmit={handleSubmit}>
            <div className="basicInfo">
              <div>
                <div>
                  <label className='contact'>Prefix</label>
                  <select id="contactDropdown"
                    value={prefix} onChange={(event) => setPrefix(event.target.value)}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
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
              <select className="contactDropdown"
                value={preferance} onChange={(event) => setPrefer(event.target.value)}>
                <option value="Email">Email</option>
                <option value="TelePhone">TelePhone</option>
              </select>
            </div>

            <div className='overview'>
              <label htmlFor="contactDropdownId">Available hours:</label>
              <div><input type="radio" name="overview_rate" id="nice" value="morning" required /><label htmlFor="nice"> Morning</label></div>
              <div><input type="radio" name="overview_rate" id="good" value="afternoon" /><label htmlFor="good"> Afternoon</label></div>
              <div><input type="radio" name="overview_rate" id="good" value="evenings" /><label htmlFor="good"> Evenings</label></div>
            </div>

            <label htmlFor="myTextId">Where you hear from us:</label>
            <input type="text" name="myText" className="contactText" />
            <input type="submit" value="Submit" className='contact_button' />
          </form>)}


      <div className='contact_text'>
        <h1> Thank You Join Us!</h1>
        <p>
          Join our monthly movie membership and make FREE online reservations in advance.
          Watch movies in any format, including AAA Cinema, IMAX, Real 3D and more.
          Plus, indulge in the premium perks of AAA Stubs Premiere, including 10% back on food & drink purchases.
          Reserve a ticket as soon as you join.
        </p>
      </div>
    </div >
  )
}

export default Contact;
