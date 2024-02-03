import React, {  useEffect } from "react";

import "../assets/css/moveToAustralia.scss";
import { Business } from "../Constants/Business";
import business from "../assets/img/BannerImages/Business.jpg";
import rotaryKlin from "../assets/img/BannerImages//Rotary.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";
import { RotaryDryer } from "../Constants/RotaryDryer";
import { RotaryKlin } from "../Constants/RotaryKlin";

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
    ROTARYDRYERS: rotaryKlin 
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
          <EnquiryForm />
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
                  ROTARY KILN{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "Crusher" || selectedSubList === "HammerCushers"?
                <li
                  className={`${
                    selectedSubList === "HammerCushers" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","HammerCushers")}
                >
                  {"Hammer Cushers "}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "Crusher" || selectedSubList === "ImpactCrusher"?
                <li
                  className={`${
                    selectedSubList === "Impact Crusher" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","ImpactCrusher")}
                >
                  {"Impact Crusher"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "Crusher" || selectedSubList === "ConeCrusher"?
                <li
                  className={`${
                    selectedSubList === "ConeCrusher" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","ConeCrusher")}
                >
                  {"Cone Crusher "}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "Crusher" || selectedSubList === "JawCruhser"?
                <li
                  className={`${
                    selectedSubList === "JawCruhser" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","JawCruhser")}
                >
                  {"Jaw Cruhser"}{" "}
                  {/* {/* <span className="material-symbols-outlined">expand_more</span> */} 
                </li>:
                ""
              }
               {selectedList === "Crusher" || selectedSubList === "RollCruhser"?
                <li
                  className={`${
                    selectedSubList === "RollCruhser" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","RollCruhser")}
                >
                  {"Roll Cruhser"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "Crusher" || selectedSubList === "WobblerFeeders"?
                <li
                  className={`${
                    selectedSubList === "WobblerFeeders" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","WobblerFeeders")}
                >
                  {"Wobbler Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "Crusher" || selectedSubList === "Screenings"?
                <li
                  className={`${
                    selectedSubList === "Screenings" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","Screenings")}
                >
                  {"Screenings"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "Crusher" || selectedSubList === "BeltConveyor"?
                <li
                  className={`${
                    selectedSubList === "BeltConveyor" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("Crusher","BeltConveyor")}
                >
                  {"Belt Conveyor"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              </ul>
                <li
                  className={`${
                    selectedList === "ROTARYDRYERS" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("ROTARYDRYERS")}
                >
                 ROTARY DRYERS {" "}
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
