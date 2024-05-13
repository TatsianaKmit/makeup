import React from "react";
import { Link } from "react-router-dom";
import style from '../style/footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Link to={"/"}>
          <img src="assets/logo_icon.png" alt="artist" className="footer-icon" />
        </Link>
        <p>© 2024 cosmetics, Inc.
          <br />
          All rights reserved.</p>
      </div>
      <div className="footer_right">
        <div className="footer_right_segment">
          <h6>Explore</h6>
          <Link>Home</Link>
          <Link>Shop</Link>
          <Link>Blog</Link>
          <Link>Sale</Link>
        </div>
        <div className="footer_right_segment">
          <h6>Connect</h6>
          <Link>Instagram</Link>
          <Link>Facebook</Link>
          <Link>Twitter</Link>
          <Link>YouTube</Link>
        </div>
        <div className="footer_right_segment">
          <h6>Support</h6>
          <Link>FAQs</Link>
          <Link>Returns</Link>
          <Link>Contact Us</Link>
          <Link>Privacy</Link>
        </div>
      </div>

    </div >
  );
}
