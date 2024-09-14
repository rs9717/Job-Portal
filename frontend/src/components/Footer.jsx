import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By XYZ Industries.
      </div>
    </>
  );
};

export default Footer;
