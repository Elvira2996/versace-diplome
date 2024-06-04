import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>

      <footer className="footer">
        <div className='container'>
          <div className="footer_wrapp">
            <div className="footer-column">
              <h3 className="footer-heading">STORE LOCATOR</h3>
              <ul className="footer-list">
                <li><Link to="#">Find a Boutique</Link></li>
                <li><Link to="#">Versace Watches Stores</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">CLIENT SERVICE</h3>
              <ul className="footer-list">
                <li><Link to="#">Exclusive Services</Link></li>
                <li><Link to="#">Care Guides</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Help / FAQsLink</Link></li>
                <li><Link to="#">Orders & ShippingLink</Link></li>
                <li><Link to="#">Returns & RefundsLink</Link></li>
                <li><Link to="#">Track Your OrderLink</Link></li>
                <li><Link to="#">Authenticity</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">ABOUT US</h3>
              <ul className="footer-list">
                <li><Link to="#">Company Profile</Link></li>
                <li><Link to="#">Corporate Data</Link></li>
                <li><Link to="#">Investor Relations</Link></li>
                <li><Link to="#">Responsible Sourcing</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Sitemap</Link></li>
                <li><Link to="#">Sitemap Products</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">LEGAL</h3>
              <ul className="footer-list">
                <li><Link to="#">Legal Notes</Link></li>
                <li><Link to="#">Terms & Conditions</Link></li>
                <li><Link to="#">General Conditions of Purchase</Link></li>
                <li><Link to="#">Code of Business Conduct and Ethics</Link></li>
                <li><Link to="#">Code of Conduct for Business Partners</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Privacy Notice for Commercial Partners</Link></li>
                <li><Link to="#">Cookie Policy</Link></li>
                <li><Link to="#">Manage Cookies</Link></li>
                <li><Link to="#">Accessibility</Link></li>
              </ul>
            </div>
            <div className='footer_icons flex'>
              <Link to="" className='ins_icons'></Link>
              <Link to="" className='fc_icons'></Link>
              <Link to="" className='tw_icons'></Link>
              <Link to="" className='pintr_icons'></Link>
              <Link to="" className='youtube_icons'></Link>
              <Link to="" className='ld_icons'></Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;