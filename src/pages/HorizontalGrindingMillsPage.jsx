import React from "react";

import "../assets/css/moveToAustralia.scss";
import business from "../assets/img/BannerImages/Business.jpg";
import rotaryKlin from "../assets/img/BannerImages//Rotary.jpg";
import { EnquiryForm } from "./EnquiryForm";
import { HorizontalGrindingMills } from "../Constants/HorizontalGrindingMills";
import { BallMill } from "../Constants/BallMill";
import { RodMill } from "../Constants/RODMill";
import { TubeMill } from "../Constants/TubeMill";
import { SAGMill } from "../Constants/SAGMill";
import { CementMill } from "../Constants/CementMill";
import { OreGrindingMill } from "../Constants/OreGrindingMill";
// import { OreGrindingMill } from "../Constants/OreGrindingMill";

export const HorizontalGrindingMillsPage = () => {
  const [selectedList, setMenu] = React.useState("HorizontalGrinding");
  const [selectedSubList, setSubMenu] = React.useState("");

  const AboutUsEnums = {
    HorizontalGrinding : <HorizontalGrindingMills />,
    BallMill : <BallMill />,
    RODMill : <RodMill />,
    TubeMill : <TubeMill />,
    SAGMill : <SAGMill />,
    CementMill : <CementMill />,
    OreGrindingMill : <OreGrindingMill />
  };
  const bannerArray = {
    HorizontalGrinding: business ,
    BallMill :rotaryKlin,
    RODMill : rotaryKlin,
    TubeMill : rotaryKlin,
    SAGMill : rotaryKlin,
    CementMill : rotaryKlin,
    OreGrindingMill : rotaryKlin
  };
const HandleMenuChange = (main) => {
  setMenu(main)
  setSubMenu("")
}
  return (
    <div className="move-to-australia">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data='HORIZONTALGRINDING' />
          <div className="breadCrumbSection mt-20">Home &gt; Horizontal Grinding Mills</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>Horizontal Grinding Mills</label>
              <ul>
                <li
                  className={`${
                    selectedList === "BallMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("BallMill")}
                >
                 Ball Mill{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <li
                  className={`${
                    selectedList === "RODMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("RODMill")}
                >
                  ROD Mill {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <li
                  className={`${
                    selectedList === "TubeMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("TubeMill")}
                >
                  Tube Mill {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
              <li
                  className={`${
                    selectedList === "SAGMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("SAGMill")}
                >
                  SAG Mill (Semi-Autogenous Grinding) {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
              <li
                  className={`${
                    selectedList === "CementMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("CementMill")}
                >
                  Cement Mill  {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <li
                  className={`${
                    selectedList === "OreGrindingMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("OreGrindingMill")}
                >
                 Ore Grinding Mill  {" "}
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


export default HorizontalGrindingMillsPage;
