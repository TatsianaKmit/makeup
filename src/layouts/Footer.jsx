import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="page-container-content">
      <div className="footer">
        <div className="footer__logo-block">
          <div className="footer__logo">
            <Link to={"/"}>
              <picture>
                <source media="(max-width: 768px)" srcSet='./assets/logo_lipstick.png' />
                <source media="(min-width: 767px)" srcSet='./assets/logo_icon.png' />
                <img src='./assets/logo_icon.png' />
              </picture>
            </Link>
          </div>
          <p>© 2024 cosmetics, Inc.
            <br />
            All rights reserved.</p>
        </div>

        <div className="footer__links">
          <h6>Company</h6>
          <Link className="footer__link" to={"/about"}>About</Link>
          <Link className="footer__link" to={"/contact"}>Contact</Link>
        </div>
        <div className="footer__links">
          <h6>Products</h6>
          <Link className="footer__link" to={"/catalog"}>Catalog</Link>
          <Link className="footer__link" to={"/brands"}>Brands</Link>
          <Link className="footer__link" to={"/"}>Tags</Link>
        </div>

        <div className="footer__links">
          <h6>Follow Us</h6>
          <div className="footer__icons">
            <Link className="footer__link" to='https://www.instagram.com/tania_kmit/' target="_blank"> <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
            </svg></Link>
            <Link className="footer__link" to='https://www.facebook.com/tania_kmit' target="_blank">  <svg
              viewBox="0 0 860 1000"
              fill="currentColor"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644" />
            </svg></Link>
            <Link className="footer__link" to='https://t.me/tania_kmit' target="_blank"> <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
              <path
                fill="currentColor"
                d="M14.993 1.582a.5.5 0 00-.661-.553l-14 5a.5.5 0 00-.056.918l4 2a.5.5 0 00.501-.031l3.32-2.214L6.11 9.188a.5.5 0 00.113.728l6 4a.5.5 0 00.77-.334l2-12z"
              />
            </svg></Link>
            <Link className="footer__link" to='https://www.linkedin.com/in/tatsiana-kmit-9a1409308' target="_blank"><svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg></Link>
            <Link className="footer__link" to='https://github.com/TatsianaKmit' target="_blank"> <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg></Link>
          </div>
        </div>
      </div>

    </div>
  );
}
