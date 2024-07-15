import React, { useState } from "react";
import {
  RiShareLine,
  RiCloseLine,
  RiInstagramLine,
  RiTwitterLine,
  RiSnapchatLine,
} from "react-icons/ri";
import "./SocialIcons.css";

const SocialIcons = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleOptions = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50%",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "85%", marginLeft:"-50%" }}>Follow Us :</div>
        <div>
          <div className={`wrapper ${isActive ? "activ" : ""}`}>
            <div className="one">
              <button className="button" onClick={toggleOptions} style={{position:"absolute", top:"5px"}}>
                {isActive ? <RiCloseLine /> : <RiShareLine />}
              </button>
            </div>
            <div className="two">
              <ul className="list">
                <li className="item">
                  <a href="#" className="link ig">
                    <RiInstagramLine />
                  </a>
                </li>
                <li className="item" style={{ "--d": "0.25s" }}>
                  <a href="#" className="link tw">
                    <RiTwitterLine />
                  </a>
                </li>
                <li className="item" style={{ "--d": "0.5s" }}>
                  <a href="#" className="link sc">
                    <RiSnapchatLine />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
