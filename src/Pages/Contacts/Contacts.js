import './Contacts.css';
import { Link } from 'react-router-dom';

import CustomAccordion from '..//..//Components/CustomAccordion/CustomAccordion';
import FooterMail from '../../Components/FooterMail/FooterMail';
import Header from '../../Components/Header/Header';

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
              <Link to=""> <li className='contact_name'>Sale</li></Link>
              <Link to=""> <li className='contact_name'>Fashion</li></Link>
              <Link to=""> <li className='contact_name'>Lifestyle</li></Link>
            </ul>
          </nav>
          <hr />
          <div className='contact_main'>
            <h2 className='contact_us'>CONTACT US</h2>
            <p className='contact_txt'>If you need help with your purchase or to find the information you require, please select your reason for seeking assistance.</p>
            <hr className='contact_line' />
          </div>
        </div>
      </section>
      <CustomAccordion />
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