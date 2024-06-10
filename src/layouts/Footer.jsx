import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-block">
        <div className="footer__logo">
          <Link to={"/"}>
            <img src="assets/logo_icon.png" alt="artist" />
          </Link>
        </div>
        <p>© 2024 cosmetics, Inc.
          <br />
          All rights reserved.</p>
      </div>
      <div className="footer__links-block">
        <div className="footer__links">
          <h6>Explore</h6>
          <Link className="footer__link">Home</Link>
          <Link className="footer__link">Shop</Link>
          <Link className="footer__link">Blog</Link>
          <Link className="footer__link">Sale</Link>
        </div>
        <div className="footer__links">
          <h6>Connect</h6>
          <Link className="footer__link">Instagram</Link>
          <Link className="footer__link">Facebook</Link>
          <Link className="footer__link">Twitter</Link>
          <Link className="footer__link">YouTube</Link>
        </div>
        <div className="footer__links">
          <h6>Support</h6>
          <Link className="footer__link">FAQs</Link>
          <Link className="footer__link">Returns</Link>
          <Link className="footer__link">Contact Us</Link>
          <Link className="footer__link">Privacy</Link>
        </div>
      </div>

    </div >
  );
}
