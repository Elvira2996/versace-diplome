import Header from '../../Components/Header/Header';
import './Delivery.css';
import { Link } from 'react-router-dom';
import CustomAccordion from '..//..//Components/CustomAccordion/CustomAccordion'
import FooterMail from '../../Components/FooterMail/FooterMail';

function Delivery() {
  return (
    <>
      <Header />
      <section className="Delivery">
        <div className='container'>
          <div className='delivery_info flex'>
            <p className='delivery_logo'><Link to="#">Home</Link></p>
            <div className='delivery_vertical'></div>
            <p className='delivery_logo'><Link to="#">Client Service</Link></p>

            <div className='delivery_vertical'></div>
            <p className='delivery_logo'><Link to="#">Orders & Shipping</Link></p>
          </div>
        </div>
        <div className='delivery_wrapp flex'>
          <div className='delivery_list'>
            <ul className='delivery_in'>
              <li className='delivery_name'>CLIENT SERVICE<Link to=""></Link></li>
              <li className='delivery_desc'><Link to="">Contact Us</Link></li>
              <li className='delivery_desc'><Link to="">Help & FAQs</Link></li>
            </ul>
            <ul className='delivery_in'>
              <li className='delivery_name'>Orders & Shipping<Link to=""></Link></li>
              <li className='delivery_desc'><Link to="">Returns & Refunds</Link></li>
              <li className='delivery_desc'><Link to="">Authenticity</Link></li>
              <li className='delivery_desc'><Link to="">Phone Orders & Assistance</Link></li>
            </ul>
            <ul className='delivery_in'>
              <li className='delivery_name'>ABOUT US<Link to=""></Link></li>
              <li className='delivery_desc'><Link to="">Company Profile</Link></li>
              <li className='delivery_desc'><Link to="">Corporate Data</Link></li>
              <li className='delivery_desc'><Link to="">Careers</Link></li>
              <li className='delivery_desc'><Link to="">Responsible Sourcing</Link></li>
            </ul>
            <ul className='delivery_in'>
              <li className='delivery_name'>LEGAL<Link to=""></Link></li>
              <li className='delivery_desc'><Link to="">Cookie Policy</Link></li>
              <li className='delivery_desc'><Link to="">Ethical Code</Link></li>
              <li className='delivery_desc'><Link to="">General Conditions of Purchase</Link></li>
              <li className='delivery_desc'><Link to="">Legal Notes</Link></li>
              <li className='delivery_desc'><Link to="">Privacy Policy</Link></li> <li className='delivery_desc'><Link to="">Legal Notes</Link></li>
              <li className='delivery_desc'><Link to="">Privacy Notice for Commercial Partners</Link></li>
              <li className='delivery_desc'><Link to="">Google Lead Ads Privacy Policy</Link></li>
              <li className='delivery_desc'><Link to="">Terms & Conditions</Link></li>
              <li className='delivery_desc'><Link to="">California: Do Not Sell or Share My Personal Information</Link></li>
              <li className='delivery_desc'><Link to="">Accessibility</Link></li>
              <li className='delivery_desc'><Link to="">Code of Conduct Partners</Link></li>
            </ul>
          </div>
          <div className='delivery_accor'>
            <h2 className='main_title'>ORDERS & SHIPPING</h2>

            <h3 className='accor_title'>SHIPPING INFORMATION</h3>
            <CustomAccordion />

            <h3 className='accor_title'>ORDERS</h3>
            <CustomAccordion />
            <h3 className='accor_title'>ORDER INFORMATION</h3>
            <CustomAccordion />
          </div>
        </div>
        <FooterMail />
      </section>
    </>
  );
}

export default Delivery;