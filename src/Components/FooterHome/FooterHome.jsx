import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="top-item">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <NavLink to="">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Shopping</NavLink>
                </li>
                <li>
                  <NavLink to="">NikeId</NavLink>
                </li>
                <li>
                  <NavLink to="">Nike+</NavLink>
                </li>
              </ul>
            </div>
            <div className="top-item">
              <h4>Orders</h4>
              <ul>
                <li>
                  <NavLink to="">Payment Optins</NavLink>
                </li>
                <li>
                  <NavLink to="">Shipping anh delivery</NavLink>
                </li>
                <li>
                  <NavLink to="">Returns</NavLink>
                </li>
              </ul>
            </div>
            <div className="item-register">
              <h4>Register</h4>
              <p className="des">
                Create one account to manage everything you do with Nike, from
                your shopping preferences to your Nike + activity
              </p>
              <NavLink to="">Learn More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="bottom-item">
              <h4>Email Sign Up</h4>
              <p>Be the first to know about new products and special others.</p>
              <NavLink to="">Sign Up Now</NavLink>
            </div>
            <div className="bottom-item">
              <h4>Gift Cards</h4>
              <p>Give the gifts that always fits</p>
              <NavLink to="">View Card</NavLink>
            </div>
            <div className="bottom-item">
              <h4>Store near you</h4>
              <p>Locate the Nike retail store or authorized retailer</p>
              <NavLink to="">Search</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
