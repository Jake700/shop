import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, PersonOutlined } from "@mui/icons-material";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="leftItem">
            <Link className ="link" to="/">
              <img
                src="/img/Phoenix_B.png"
                alt="logo"
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="resized-image"
              />
            </Link>
          </div>
          <div className="leftItem">
            <Link className ="link" to="/">42Phoenix</Link>
          </div>
        </div>
        <div className="center">
          <div className="centerItem">
            center
          </div>
        </div>
        <div className="right">
          <div className="rightItem">
            <Link className ="link" to="/">HomePage</Link>
          </div>
          <div className="rightItem">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="rightItem">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
