import React from "react";
import Card from "../../UI/Card";

const Footer = () => {
  return (
    <footer className="text-center md:text-left">
      <Card>
        <div className="flex gap-4 justify-between links my-12 flex-col items-center text-center w-full md:text-left md:items-start md:flex-row"> 
          <ul>
            <li>
              <h6>COMPANY</h6>
            </li>
            <li>
              <a href="#none">Who Are We</a>
            </li>
          </ul>
          <ul>
            <li>
              <h6>RESOURCES</h6>
            </li>
            <li>
              <a href="#none">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <h6>WORK</h6>
            </li>
            <li>
              <a href="#none">Video</a>
            </li>
            <li>
              <a href="#none">Shoot</a>
            </li>
            <li>
              <a href="#none">Post</a>
            </li>
          </ul>

          <ul>
            <li>
              <h6>SERVICES</h6>
            </li>
            <li>
              <a href="#none">Video</a>
            </li>
            <li>
              <a href="#none">Shoot</a>
            </li>
            <li>
              <a href="#none">Post</a>
            </li>
          </ul>
          <ul>
            <li>
              <h6>CONTACT</h6>
            </li>
            <li>
              <a href="#none">Talk To Us</a>
            </li>
            <li>
              <a href="#none">Collab</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-4  py-8 items-center border-t-2 border-t-slate-200 flex-col md:flex-row">
          <p>Copyright ©2023 Red Bangle</p>
          <ul className="flex  md:gap-8 flex-col md:flex-row  ">
            <li>
              <a href="#none">Privacy Policy</a>
            </li>
            <li>
              <a href="#none">Legal</a>
            </li>
            <li>
              <a href="#none">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
