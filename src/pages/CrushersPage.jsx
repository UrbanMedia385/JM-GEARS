import React, {  useEffect } from "react";

import "../assets/css/crushers.scss";
import business from "../assets/img/BannerImages/crushers.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";
import { CrushersDescription } from "../Constants/Crushers/Crushers";
import { ImpactCrusher } from "../Constants/Crushers/ImpactCrusher";
import { RollCrusher } from "../Constants/Crushers/RollCrusher";
import { HammerCrusher } from "../Constants/Crushers/HammerCrusher";
export const CrushersPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedList, setMenu] = React.useState("CRUSHERS");
  const [selectedSubList, setSubMenu] = React.useState("CRUSHERSDESC");
  const AboutUsEnums = {
    CRUSHERSDESC  : <CrushersDescription />,
    IMPACTCRUSHER :  <ImpactCrusher />,
    ROLLCRUSHER : <RollCrusher />,
    HAMMERCRUSHER : <HammerCrusher />

  };
  const bannerArray = {
  
    CRUSHERSDESC : business,
    IMPACTCRUSHER : business,
    ROLLCRUSHER : business,
    HAMMERCRUSHER : business
  };
const HandleMenuChange = (main, sub) => {
  setMenu(main)
  if(sub)
  setSubMenu(sub)
  else
  setSubMenu("")
}
const HandleSubMenuChange = (main,sub) => {
  setMenu(main)
  setSubMenu(sub)

}
  return (
    <div className="crushers">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data='CRUSHERS' />
          <div className="breadCrumbSection mt-20">Home &gt; Crushers</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>CRUSHERS</label>
              <ul>
                <li
                  className={`${
                    selectedList === "CRUSHERS" ? "active" : " "
                  }`}
                  style={{fontWeight:'bold'}}
                  onClick={() => HandleMenuChange("CRUSHERS","CRUSHERSDESC")}
                >
                  Crushers{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "CRUSHERS" || selectedSubList === "HAMMERCRUSHER"?
                <li
                  className={`${
                    selectedSubList === "HAMMERCRUSHER" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CRUSHERS","HAMMERCRUSHER")}
                >
                  {"Hammer Crushers"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CRUSHERS" || selectedSubList === "IMPACTCRUSHER"?
                <li
                  className={`${
                    selectedSubList === "IMPACTCRUSHER" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CRUSHERS","IMPACTCRUSHER")}
                >
                  {"Impact Crushers"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CRUSHERS" || selectedSubList === "ROLLCRUSHER"?
                <li
                  className={`${
                    selectedSubList === "ROLLCRUSHER" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CRUSHERS","ROLLCRUSHER")}
                >
                  {"Roll Crushers "}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
            
              </ul>
               

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


export default CrushersPage;
