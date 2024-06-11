import './Contacts.css';
import { Link } from 'react-router-dom';
import FooterMail from '../../Components/FooterMail/FooterMail';
import Header from '../../Components/Header/Header';
import SubmitForm from '../../Components/SubmitForm/SubmitForm';

function Contacts() {
  return (
    <>
      <Header />
      <section className='contacts'>
        <div className='container'>
          <div className='contact_info flex'>
            <p className='contact_logo'><Link to="#">Versace.com</Link></p>
            <div className='contact_vertical'></div>
            <p className='contact_logo'><Link to="#">Contact us</Link></p>
          </div>
          <Link to=""><h1 className='contact_title'>Versace</h1></Link>
          <nav>
            <ul className='contact_list flex'>
              <Link to=""><li className='contact_name'>Sale</li></Link>
              <Link to=""><li className='contact_name'>Fashion</li></Link>
              <Link to=""><li className='contact_name'>Lifestyle</li></Link>
            </ul>
          </nav>
          <hr />
          <div className='contact_main'>
            <h3 className='contact_us'>CONTACT US</h3>
            <p className='contact_txt'>
              We want to make it possible for you to have the perfect shopping experience! Please have a look at our Help & FAQ section or contact our Client <br/> Service team should you need further information.</p>
            <h3 className='contact_titl'>Book An Appointment</h3>
            <p className='contact_txt'>To book a virtual or in-store appointment simply click here to fill out the short request form and a member of our team will reach out to you to <br/> confirm your booking as soon as possible.</p>
            <h3 className='contact_titl'>Call or Email Us</h3>
            <p className='contact_txt'>Our Online Store Client Service will answer any question you have about our products, orders and deliveries, returns or payments.</p>
            <p className='contact_txt'>You can contact us <a  className='contact_tel' href="tel:+1 5513070015">+1 5513070015</a> or via form.
            
            </p>
            <p className='contact_txt'>Our Client Service team is happy to help you and is available from Monday to Friday from 9 AM to 8 PM (ET), excluding holidays*</p>
            
            <hr className='contact_line' />
          </div>
        </div>
      </section>
      <SubmitForm />

      <section className='map'>
        <div className='container'>
          <div className='map_wrapp'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0726868382085!2d9.192426275643632!3d45.46833967107404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b040c6cf8d%3A0x4fbe90160342aa7e!2zVmlhIE1vbnRlIE5hcG9sZW9uZSwgMTEsIDIwMTIxIE1pbGFubyBNSSwg0JjRgtCw0LvQuNGP!5e0!3m2!1sru!2skg!4v1717733211104!5m2!1sru!2skg"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
      <FooterMail />
    </>
  );
}

export default Contacts;
