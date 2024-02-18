import React, {  useEffect } from "react";

import "../assets/css/moveToAustralia.scss";
import business from "../assets/img/BannerImages/Business.jpg";
import rotaryKlin from "../assets/img/BannerImages//Rotary.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";
import { RotaryDryer } from "../Constants/Rotary/RotaryDryer";
import { RotaryKlin } from "../Constants/Rotary/RotaryKlin";

export const RotaryPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedList, setMenu] = React.useState("ROTARYKILN");
  const [selectedSubList, setSubMenu] = React.useState("");
  const AboutUsEnums = {
    ROTARYKILN : <RotaryKlin />,
    ROTARYDRYERS : <RotaryDryer />

  };
  const bannerArray = {
    ROTARYKILN: business,
    ROTARYDRYERS: rotaryKlin,
  };
const HandleMenuChange = (main) => {
  setMenu(main)
  setSubMenu("")
}
const HandleSubMenuChange = (main,sub) => {
  setMenu(main)
  setSubMenu(sub)
}
  return (
    <div className="move-to-australia">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data='ROTARY'/>
          <div className="breadCrumbSection mt-20">Home &gt; Rotary</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>ROTARY KILN & ROTARY DRYERS</label>
              <ul>
                <li
                  className={`${
                    selectedList === "ROTARYKILN" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("ROTARYKILN")}
                >
                  Rotary Kiln{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <li
                  className={`${
                    selectedList === "ROTARYDRYERS" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("ROTARYDRYERS")}
                >
                 Rotary Dryers {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                
            </ul>
            </div>
           
            <div className="aboutus-right">
            <img
                src={
                  bannerArray[selectedSubList?selectedSubList: selectedList]
                    ? bannerArray[selectedSubList?selectedSubList: selectedList]
                    : bannerArray["business"]
                }
                alt={selectedList}
                className="aboutus-right-banner"
              />
              {AboutUsEnums[selectedSubList?selectedSubList: selectedList]}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default RotaryPage;
