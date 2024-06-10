import './FooterMail.css';

function FooterMail() {
  return (
    <>
        <section className='enter'>
            <div className='container'>
              <h2 className='enter_title'>ENTER THE WORLD OF VERSACE</h2>
              <p className='enter_txt'>Stay up to date on events, collections and exclusive news
              </p>
              <form className='enter_mail'>
             
                
                <input className='form_input' type="email" placeholder='Enter your email address' />
                  <div className='enter_ic'></div>
                
              </form>
            </div>
          </section>
    </>
  );
}

export default FooterMail;