import React, {  useEffect } from "react";

import "../assets/css/moveToAustralia.scss";
import { Business } from "../Constants/Business";
import business from "../assets/img/BannerImages/Business.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";

export const GrindingUnit = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedList, setMenu] = React.useState("HammerCushers");
  const [selectedSubList, setSubMenu] = React.useState("");

  



  const AboutUsEnums = {
    HammerCushers : <Business />,
  };
  const bannerArray = {
    HammerCushers: business  
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
          <div className="breadCrumbSection mt-20">Home &gt; Integrated Unit</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>Cement Complete Integrated Unit</label>
              <ul>

              <li
                  className={`${
                    selectedList === "CementMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("CementMill")}
                >
                  Cement Mill Circuit {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "CementMill" || selectedSubList === "GrindingMill"?
                <li
                  className={`${
                    selectedSubList === "GrindingMill" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","GrindingMill")}
                >
                  {"Grinding Mill"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CementMill" || selectedSubList === "FeedingBin"?
                <li
                  className={`${
                    selectedSubList === "FeedingBin" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","FeedingBin")}
                >
                  {"Feeding Bin"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "WeighFeeders"?
                <li
                  className={`${
                    selectedSubList === "WeighFeeders" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","WeighFeeders")}
                >
                  {"Weigh Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "BucketEle"?
                <li
                  className={`${
                    selectedSubList === "BucketEle" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","BucketEle")}
                >
                  {"Bucket Elevators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "RotarySeparator"?
                <li
                  className={`${
                    selectedSubList === "RotarySeparator" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","RotarySeparator")}
                >
                  {"Rotary Separators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CementMill" || selectedSubList === "Cyclones"?
                <li
                  className={`${
                    selectedSubList === "Cyclones" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","Cyclones")}
                >
                  {"Cyclones"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "BagFilters"?
                <li
                  className={`${
                    selectedSubList === "BagFilters" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","BagFilters")}
                >
                  {"Bag Filters"}{" "}
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


export default GrindingUnit;
