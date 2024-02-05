import React, {  useEffect } from "react";

import "../assets/css/moveToAustralia.scss";
import { Business } from "../Constants/Business";
import business from "../assets/img/BannerImages/Business.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";

export const CementPlant = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedList, setMenu] = React.useState("CementSpares");
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
          <div className="breadCrumbSection mt-20">Home &gt; Cement and Steel Spares</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>CEMENT AND STEEL SPARES</label>
              <ul>
                <li
                  className={`${
                    selectedList === "KLIN" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("KLIN")}
                >
                  KLIN{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "KLIN" || selectedSubList === "KILNSHELL"?
                <li
                  className={`${
                    selectedSubList === "KILNSHELL" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KLIN","KILNSHELL")}
                >
                  {"KILN SHELL"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KLIN" || selectedSubList === "KILNTYRE"?
                <li
                  className={`${
                    selectedSubList === "KILNTYRE" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KLIN","KILNTYRE")}
                >
                  {"KILN TYRE"}{" "}
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
                    selectedList === "RawMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("RawMill")}
                >
                  Raw Mill Circuit {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "RawMill" || selectedSubList === "GrindingMillRaw"?
                <li
                  className={`${
                    selectedSubList === "GrindingMillRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","GrindingMillRaw")}
                >
                  {"Grinding Mill"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "RawMill" || selectedSubList === "FeedingSilos"?
                <li
                  className={`${
                    selectedSubList === "FeedingSilos" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","FeedingSilos")}
                >
                  {"Feeding Silos"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "RawMill" || selectedSubList === "WeighFeedersRaw"?
                <li
                  className={`${
                    selectedSubList === "WeighFeedersRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","WeighFeedersRaw")}
                >
                  {"Weigh Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "RawMill" || selectedSubList === "BucketEleRaw"?
                <li
                  className={`${
                    selectedSubList === "BucketEleRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","BucketEleRaw")}
                >
                  {"Bucket Elevators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "RawMill" || selectedSubList === "RotarySeparatorsRaw"?
                <li
                  className={`${
                    selectedSubList === "RotarySeparatorsRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","RotarySeparatorsRaw")}
                >
                  {"Rotary Separators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "RawMill" || selectedSubList === "CyclonesRaw"?
                <li
                  className={`${
                    selectedSubList === "CyclonesRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","CyclonesRaw")}
                >
                  {"Cyclones"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "RawMill" || selectedSubList === "BagFiltersRaw"?
                <li
                  className={`${
                    selectedSubList === "BagFiltersRaw" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("RawMill","BagFiltersRaw")}
                >
                  {"Bag Filters"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              </ul>
                <li
                  className={`${
                    selectedList === "CoalMill" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("CoalMill")}
                >
                  Coal Mill Circuit {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "CoalMill" || selectedSubList === "GrindingMillCoal"?
                <li
                  className={`${
                    selectedSubList === "GrindingMillCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","GrindingMillCoal")}
                >
                  {"Grinding Mill"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CoalMill" || selectedSubList === "FeedingBinCoal"?
                <li
                  className={`${
                    selectedSubList === "FeedingBinCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","FeedingBinCoal")}
                >
                  {"Feeding Bin"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CoalMill" || selectedSubList === "WeighFeedersCoal"?
                <li
                  className={`${
                    selectedSubList === "WeighFeedersCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","WeighFeedersCoal")}
                >
                  {"Weigh Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CoalMill" || selectedSubList === "BucketEleCoal"?
                <li
                  className={`${
                    selectedSubList === "BucketEleCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","BucketEleCoal")}
                >
                  {"Bucket Elevators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CoalMill" || selectedSubList === "RotarySeparatorscoal"?
                <li
                  className={`${
                    selectedSubList === "RotarySeparatorscoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","RotarySeparatorscoal")}
                >
                  {"Rotary Separators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CoalMill" || selectedSubList === "CyclonesCoal"?
                <li
                  className={`${
                    selectedSubList === "CyclonesCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","CyclonesCoal")}
                >
                  {"Cyclones"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CoalMill" || selectedSubList === "BagFiltersCoal"?
                <li
                  className={`${
                    selectedSubList === "BagFiltersCoal" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CoalMill","BagFiltersCoal")}
                >
                  {"Bag Filters"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }

              </ul>
              <li
                  className={`${
                    selectedList === "KlinCircuit" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("KlinCircuit")}
                >
                  Klin Circuit {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "KlinCircuit" || selectedSubList === "CyclonePreHeater"?
                <li
                  className={`${
                    selectedSubList === "CyclonePreHeater" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KlinCircuit","CyclonePreHeater")}
                >
                  {"Cyclone Pre Heater"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KlinCircuit" || selectedSubList === "RotaryClin"?
                <li
                  className={`${
                    selectedSubList === "RotaryClin" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KlinCircuit","RotaryClin")}
                >
                  {"Rotary Clin"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "KlinCircuit" || selectedSubList === "ClinkerCooler"?
                <li
                  className={`${
                    selectedSubList === "ClinkerCooler" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KlinCircuit","ClinkerCooler")}
                >
                  {"Clinker Cooler"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              

              </ul>
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
                {selectedList === "CementMill" || selectedSubList === "GrindingMillCement"?
                <li
                  className={`${
                    selectedSubList === "GrindingMillCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","GrindingMillCement")}
                >
                  {"Grinding Mill"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CementMill" || selectedSubList === "FeedingBinCement"?
                <li
                  className={`${
                    selectedSubList === "FeedingBinCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","FeedingBinCement")}
                >
                  {"Feeding Bin"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "WeighFeedersCement"?
                <li
                  className={`${
                    selectedSubList === "WeighFeedersCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","WeighFeedersCement")}
                >
                  {"Weigh Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "BucketEleCement"?
                <li
                  className={`${
                    selectedSubList === "BucketEleCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","BucketEleCement")}
                >
                  {"Bucket Elevators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "RotarySeparatorsCement"?
                <li
                  className={`${
                    selectedSubList === "RotarySeparatorsCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","RotarySeparatorsCement")}
                >
                  {"Rotary Separators"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "CementMill" || selectedSubList === "CyclonesCement"?
                <li
                  className={`${
                    selectedSubList === "CyclonesCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","CyclonesCement")}
                >
                  {"Cyclones"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "CementMill" || selectedSubList === "BagFiltersCement"?
                <li
                  className={`${
                    selectedSubList === "BagFiltersCement" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("CementMill","BagFiltersCement")}
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


export default CementPlant;
