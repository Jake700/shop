import React from "react";
import moment from "moment";
import "./Footer.scss";

const Footer = () => {
  const currentYear = moment().format("YYYY");

  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Featured</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            eveniet! Sint animi sunt soluta, vitae natus voluptates nesciunt.
            Harum adipisci sed consequatur esse itaque corrupti atque molestias
            similique sapiente facilis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            eveniet! Sint animi sunt soluta, vitae natus voluptates nesciunt.
            Harum adipisci sed consequatur esse itaque corrupti atque molestias
            similique sapiente facilis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">42Phoenix</span>
          <span className="copyright">
          Copyright &copy; {currentYear}
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment options" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
