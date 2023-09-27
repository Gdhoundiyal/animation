import { FaFacebookMessenger } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer1">
        <div className="footdiv1">
          <h1>EvolTech</h1>
        </div>
        <div className="navigbar">
          <h5>Services</h5>
          <h5>About Us</h5>
          <h5>Blog</h5>
          <h5>Career</h5>
          <h5>Terms & Conditions</h5>
        </div>
      </div>

      <div className="footdiv2">
        <p>Copyright &#169; 2023 for Evoltech. All rights reserved.</p>

        <div className="footdiv2-1">
          <div>
            <FaLocationArrow />
            <span>Lee Farm Corporate Park, Danbry .</span>
          </div>
          <div>
            <FaFacebookMessenger />
            <span>support@evoltech.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
