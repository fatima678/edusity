import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1c04df8b-f8f7-49e4-be40-7db82d141c40");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon} alt=''></img></h3>
            <p>Feel free to contact us for any query , your suggestions and feedback are very
                important for us please send us the email f you have any query.
            </p>
            <ul>
                <li><img src={mail_icon} alt=''></img>abc@gmail.com</li>
                <li><img src={phone_icon} alt=''></img>03000000000</li>
                <li><img src={location_icon} alt=''></img>Gujranwala, main road</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>  
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required></input>
                <label>Phone Number</label>
                <input type='tel' name='name' placeholder='Enter your phone number' required></input>
                <label>Write Your message here</label>
                <textarea name='message'rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit'   className='btn dark-btn'>Submit now<img src={white_arrow} alt=''></img></button>

            </form>
            <span>{result}</span>

        </div>
      
    </div>
  )
}

export default Contact
