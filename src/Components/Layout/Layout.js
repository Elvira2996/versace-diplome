import "./Layout.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <>
      <div className="container">
      
        <div className="Layout flex">
         
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}