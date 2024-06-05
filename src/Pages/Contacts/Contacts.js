
import './Contacts.css';
import { Link } from 'react-router-dom'


function Contacts() {
  return (
    <>
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
    
    </>
  );
}

export default Contacts;
