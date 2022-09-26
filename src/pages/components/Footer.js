import React from "react";
import "./Footer.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = ({ onAddModal }) => {
  return (
    <div className="Footer">
      <Link to="/addmeal">
        <IoAddCircleOutline className="add-btn" onClick={onAddModal} />
      </Link>
    </div>
  );
};

export default Footer;
