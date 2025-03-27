import React, {  useEffect } from "react";

import "../assets/css/spare-parts.scss";
import { Business } from "../Constants/Business";
import grinding from "../assets/img/BannerImages/spare-parts/grinding-mill.jpg";
import klin from "../assets/img/BannerImages/spare-parts/mill-spares.jpg";
import miscellaneous from "../assets/img/BannerImages/spare-parts/miscellaneous.jpg";
import vrm from "../assets/img/BannerImages/spare-parts/vrm-rollers.jpg";
import { useSearchParams } from "react-router-dom";
import { EnquiryForm } from "./EnquiryForm";
import { KilnShell } from "../Constants/KILN/KilnShell";
import { KilnTyre } from "../Constants/KILN/KilnTyre";
import { GirthGear } from "../Constants/KILN/GirthGear";
import { SupportingRoller } from "../Constants/KILN/SupportingRollers";
import { BearingHousings } from "../Constants/KILN/BearingHousing";
import { ChairPlate } from "../Constants/KILN/ChairPlate";
import { SpringPlate } from "../Constants/SpringPlate";
import { ThrustRoller } from "../Constants/KILN/ThrustRoller";
import { PinionAndPinionShafts } from "../Constants/KILN/PinionShafts";
import { GearCouplings } from "../Constants/KILN/GearCouplings";
import { TorsionShafts } from "../Constants/KILN/TorsionShafts";
import { BaseFrames } from "../Constants/KILN/BaseFrames";
import { MillShell } from "../Constants/GrindingMill/MillShell";
import { MillGirthGear } from "../Constants/GrindingMill/MillGirthGear";
import { MillPinion } from "../Constants/GrindingMill/MillPinion";
import { MillPinionBearingHousing } from "../Constants/GrindingMill/MillPinionBearingHousing";
import { MillHeads } from "../Constants/GrindingMill/MillHeads";
import { VrmRollerHub } from "../Constants/VRMRoller/VrmRollerHub";
import { RotaryAirSeparator } from "../Constants/VRMRoller/RotaryAirSeparator";
import { GrindingTable } from "../Constants/VRMRoller/GrindingTable";
import { PullRods } from "../Constants/VRMRoller/PullRods";
import { TieRods } from "../Constants/VRMRoller/TieRods";
import { RockerArms } from "../Constants/VRMRoller/RockerArms";
import { RotaryArms } from "../Constants/VRMRoller/RotaryArms";
import { RotaryFeeders } from "../Constants/VRMRoller/RotaryFeeders";
import { RollerPressRolls } from "../Constants/Miscellaneous/RollerPressRolls";
import { ImpellersAndFans } from "../Constants/Miscellaneous/ImpellersAndFans";
import { WobblerShaft } from "../Constants/Miscellaneous/WobblerShaft";
import { GrindingPathAccessories } from "../Constants/Miscellaneous/GrindingPathAccessories";
import { StructuralSteel } from "../Constants/Fabrication/StructuralSteel";
import { Industrial } from "../Constants/Fabrication/Industrial";
export const CementPlantsSpares = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedList, setMenu] = React.useState("KILN");
  const [selectedSubList, setSubMenu] = React.useState("KILNSHELL");
  const AboutUsEnums = {
    KILNSHELL : <KilnShell />,
    KILNTYRE :  <KilnTyre />,
    GIRTHGEAR : <GirthGear />,
    SUPPORTINGROLLERS : <SupportingRoller />, 
    BEARINGHOUSINGS : <BearingHousings />,
    CHAIRPLATES : <ChairPlate />,
    SPRINGPLATES : <SpringPlate />,
    THRUSTROLLER : <ThrustRoller />,
    PINIONANDPINIONSHAFTS : <PinionAndPinionShafts />,
    GEARCOUPLINGS : <GearCouplings />,
    TORSIONSHAFT : <TorsionShafts />,
    BASEFRAMES : <BaseFrames />,
    MILLSHELL : <MillShell />,
    MILLGIRTHGEAR : <MillGirthGear />,
    MILLPINION : <MillPinion />,
    MILLPINIONBEARINGHOUSING : <MillPinionBearingHousing />,
    MILLHEADS : <MillHeads />,
    VRMROLLERHUB : <VrmRollerHub />,
    ROTARYAIR : <RotaryAirSeparator />,
    GRINDINGTABLE : <GrindingTable />,
    PULLRODS : <PullRods />,
    TIERODS : <TieRods />,
    ROCKERARMS : <RockerArms />,
    ROTARYARMS : <RotaryArms />,
    ROTARYFEEDERS : <RotaryFeeders />,
    ROLLERPRESS : <RollerPressRolls />,
    IMPELLERS : <ImpellersAndFans />,
    WOBBLERSHAFT : <WobblerShaft />,
    GRINDINGPATH : <GrindingPathAccessories />,
    STRUCTURALSTEEL : <StructuralSteel />,
    INDUSTRIAL: <Industrial />

  };
  const bannerArray = {
    KILNSHELL: klin,
    KILNTYRE : klin,
    GIRTHGEAR : klin,
    SUPPORTINGROLLERS : klin,
    BEARINGHOUSINGS :klin,
    CHAIRPLATES : klin,
    SPRINGPLATES : klin,
    THRUSTROLLER : klin,
    PINIONANDPINIONSHAFTS : klin,
    GEARCOUPLINGS : klin,
    TORSIONSHAFT : klin,
    BASEFRAMES :klin,
    MILLSHELL : grinding,
    MILLGIRTHGEAR : grinding,
    MILLPINION : grinding,
    MILLPINIONBEARINGHOUSING :grinding,
    MILLHEADS :grinding,
    VRMROLLERHUB : vrm,
    ROTARYAIR : vrm,
    GRINDINGTABLE : vrm,
    PULLRODS : vrm,
    TIERODS : vrm,
    ROCKERARMS :  vrm,
    ROTARYARMS : vrm,
    ROTARYFEEDERS : vrm,
    ROLLERPRESS : miscellaneous,
    IMPELLERS : miscellaneous,
    WOBBLERSHAFT : miscellaneous,
    GRINDINGPATH : miscellaneous,
    STRUCTURALSTEEL: miscellaneous,
    INDUSTRIAL: miscellaneous,
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
    <div className="cement-spare-parts">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data= "CementSpareParts" />
          <div className="breadCrumbSection mt-20">Home &gt; Cement and Steel Spares</div>
          <div className="AboutUsSection">
            <div className="aboutus-left">
              <label style={{fontWeight:"bolder"}}>CEMENT AND STEEL SPARES</label>
              <ul>
                <li
                  className={`${
                    selectedList === "KILN" ? "active" : " "
                  }`}
                  style={{fontWeight:'bold'}}
                  onClick={() => HandleMenuChange("KILN","KILNSHELL")}
                >
                  KILN{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "KILN" || selectedSubList === "GIRTHGEAR"?
                <li
                  className={`${
                    selectedSubList === "GIRTHGEAR" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","GIRTHGEAR")}
                >
                  {"Girth Gear "}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
                {selectedList === "KILN" || selectedSubList === "KILNSHELL"?
                <li
                  className={`${
                    selectedSubList === "KILNSHELL" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","KILNSHELL")}
                >
                  {"Kiln Shell"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KILN" || selectedSubList === "KILNTYRE"?
                <li
                  className={`${
                    selectedSubList === "KILNTYRE" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","KILNTYRE")}
                >
                  {"Kiln Tyre"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              
              {selectedList === "KILN" || selectedSubList === "SUPPORTINGROLLERS"?
                <li
                  className={`${
                    selectedSubList === "SUPPORTINGROLLERS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","SUPPORTINGROLLERS")}
                >
                  {"Supporting Rollers"}{" "}
                  {/* {/* <span className="material-symbols-outlined">expand_more</span> */} 
                </li>:
                ""
              }
               {selectedList === "KILN" || selectedSubList === "BEARINGHOUSINGS"?
                <li
                  className={`${
                    selectedSubList === "BEARINGHOUSINGS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","BEARINGHOUSINGS")}
                >
                  {"Bearing Housings"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KILN" || selectedSubList === "CHAIRPLATES"?
                <li
                  className={`${
                    selectedSubList === "CHAIRPLATES" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","CHAIRPLATES")}
                >
                  {"Chair Plates"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "KILN" || selectedSubList === "SPRINGPLATES"?
                <li
                  className={`${
                    selectedSubList === "SPRINGPLATES" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","SPRINGPLATES")}
                >
                  {"Spring Plates"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KILN" || selectedSubList === "THRUSTROLLER"?
                <li
                  className={`${
                    selectedSubList === "THRUSTROLLER" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","THRUSTROLLER")}
                >
                  {"Thrust Rollers"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "KILN" || selectedSubList === "PINIONANDPINIONSHAFTS"?
                <li
                  className={`${
                    selectedSubList === "PINIONANDPINIONSHAFTS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","PINIONANDPINIONSHAFTS")}
                >
                  {"Pinions and Pinion Shafts"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "KILN" || selectedSubList === "GEARCOUPLINGS"?
                <li
                  className={`${
                    selectedSubList === "GEARCOUPLINGS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","GEARCOUPLINGS")}
                >
                  {"Gear Couplings"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "KILN" || selectedSubList === "TORSIONSHAFT"?
                <li
                  className={`${
                    selectedSubList === "TORSIONSHAFT" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","TORSIONSHAFT")}
                >
                  {"Torsion Shaft"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "KILN" || selectedSubList === "BASEFRAMES"?
                <li
                  className={`${
                    selectedSubList === "BASEFRAMES" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("KILN","BASEFRAMES")}
                >
                  {"Base Frames"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              </ul>
                <li
                  className={`${
                    selectedList === "GRINDINGMILLMIll" ? "active" : " "
                  }`}
                  style={{fontWeight:'bold'}}
                  onClick={() => HandleMenuChange("GRINDINGMILLMIll","MILLSHELL")}
                >
                  Grinding Mill/Ball Mill {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "GRINDINGMILLMIll" || selectedSubList === "MILLSHELL"?
                <li
                  className={`${
                    selectedSubList === "MILLSHELL" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("GRINDINGMILLMIll","MILLSHELL")}
                >
                  {"Mill Shell"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "GRINDINGMILLMIll" || selectedSubList === "MILLGIRTHGEAR"?
                <li
                  className={`${
                    selectedSubList === "MILLGIRTHGEAR" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("GRINDINGMILLMIll","MILLGIRTHGEAR")}
                >
                  {"Mill Girth Gear"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "GRINDINGMILLMIll" || selectedSubList === "MILLPINION"?
                <li
                  className={`${
                    selectedSubList === "MILLPINION" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("GRINDINGMILLMIll","MILLPINION")}
                >
                  {"Mill Pinion"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "GRINDINGMILLMIll" || selectedSubList === "MILLPINIONBEARINGHOUSING"?
                <li
                  className={`${
                    selectedSubList === "MILLPINIONBEARINGHOUSING" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("GRINDINGMILLMIll","MILLPINIONBEARINGHOUSING")}
                >
                  {"Mill Pinion Bearing Housing"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "GRINDINGMILLMIll" || selectedSubList === "MILLHEADS"?
                <li
                  className={`${
                    selectedSubList === "MILLHEADS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("GRINDINGMILLMIll","MILLHEADS")}
                >
                  {"Mill/Trunnion Heads"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              </ul>
                <li
                  className={`${
                    selectedList === "VRMROLLER" ? "active" : " "
                  }`}
                  style={{fontWeight:'bold'}}
                  onClick={() => HandleMenuChange("VRMROLLER","VRMROLLERHUB") }
                >
                  VRM Roller {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "VRMROLLER" || selectedSubList === "VRMROLLERHUB"?
                <li
                  className={`${
                    selectedSubList === "VRMROLLERHUB" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","VRMROLLERHUB")}
                >
                  {"VRM Roller Hub/Grinding Roller"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "VRMROLLER" || selectedSubList === "ROTARYAIR"?
                <li
                  className={`${
                    selectedSubList === "ROTARYAIR" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","ROTARYAIR")}
                >
                  {"Rotary Air Separator"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "VRMROLLER" || selectedSubList === "GRINDINGTABLE"?
                <li
                  className={`${
                    selectedSubList === "GRINDINGTABLE" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","GRINDINGTABLE")}
                >
                  {"Grinding Table"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "VRMROLLER" || selectedSubList === "PULLRODS"?
                <li
                  className={`${
                    selectedSubList === "PULLRODS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","PULLRODS")}
                >
                  {"Pull Rods"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "VRMROLLER" || selectedSubList === "TIERODS"?
                <li
                  className={`${
                    selectedSubList === "TIERODS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","TIERODS")}
                >
                  {"Tie Rods"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "VRMROLLER" || selectedSubList === "ROCKERARMS"?
                <li
                  className={`${
                    selectedSubList === "ROCKERARMS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","ROCKERARMS")}
                >
                  {"Rocker Arms"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "VRMROLLER" || selectedSubList === "ROTARYARMS"?
                <li
                  className={`${
                    selectedSubList === "ROTARYARMS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","ROTARYARMS")}
                >
                  {"Rotary Arms"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "VRMROLLER" || selectedSubList === "ROTARYFEEDERS"?
                <li
                  className={`${
                    selectedSubList === "ROTARYFEEDERS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("VRMROLLER","ROTARYFEEDERS")}
                >
                  {"Rotary Feeders"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }

              </ul>
              <li
                  className={`${
                    selectedList === "MISCELLANEOUSSPARES" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("MISCELLANEOUSSPARES", "ROLLERPRESS")}
                  style={{fontWeight:'bold'}}
                >
                  Miscellaneouss Spares {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "MISCELLANEOUSSPARES" || selectedSubList === "ROLLERPRESS"?
                <li
                  className={`${
                    selectedSubList === "ROLLERPRESS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("MISCELLANEOUSSPARES","ROLLERPRESS")}
                >
                  {"Roller Press Rolls"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "MISCELLANEOUSSPARES" || selectedSubList === "IMPELLERS"?
                <li
                  className={`${
                    selectedSubList === "IMPELLERS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("MISCELLANEOUSSPARES","IMPELLERS")}
                >
                  {"Impellers and Fans"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "MISCELLANEOUSSPARES" || selectedSubList === "WOBBLERSHAFT"?
                <li
                  className={`${
                    selectedSubList === "WOBBLERSHAFT" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("MISCELLANEOUSSPARES","WOBBLERSHAFT")}
                >
                  {"Wobbler Shaft"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "MISCELLANEOUSSPARES" || selectedSubList === "GRINDINGPATH"?
                <li
                  className={`${
                    selectedSubList === "GRINDINGPATH" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("MISCELLANEOUSSPARES","GRINDINGPATH")}
                >
                  {"Grinding Path Accessories"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              

              </ul>
              <li
                  className={`${
                    selectedList === "FABRICATION" ? "active" : " "
                  }`}
                  onClick={() => HandleMenuChange("FABRICATION", "STRUCTURALSTEEL")}
                  style={{fontWeight:'bold'}}
                >
                  Fabrication  {" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>
                <ul  style={{marginLeft:"7px"}}>
                {selectedList === "FABRICATION" || selectedSubList === "STRUCTURALSTEEL"?
                <li
                  className={`${
                    selectedSubList === "STRUCTURALSTEEL" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","STRUCTURALSTEEL")}
                >
                  {"Structural Steel Fabrication"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "FABRICATION" || selectedSubList === "INDUSTRIAL"?
                <li
                  className={`${
                    selectedSubList === "INDUSTRIAL" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","INDUSTRIAL")}
                >
                  {"Industrial Sheds"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "FABRICATION" || selectedSubList === "WAREHOUSE"?
                <li
                  className={`${
                    selectedSubList === "WAREHOUSE" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","WAREHOUSE")}
                >
                  {"Warehouse"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
              {selectedList === "FABRICATION" || selectedSubList === "STORAGE"?
                <li
                  className={`${
                    selectedSubList === "STORAGE" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","STORAGE")}
                >
                  {"Storage yards"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "FABRICATION" || selectedSubList === "PREFAB"?
                <li
                  className={`${
                    selectedSubList === "PREFAB" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","PREFAB")}
                >
                  {"Prefab buildings"}{" "}
                  {/* <span className="material-symbols-outlined">expand_more</span> */}
                </li>:
                ""
              }
               {selectedList === "FABRICATION" || selectedSubList === "TANKSANDWESSELS"?
                <li
                  className={`${
                    selectedSubList === "TANKSANDWESSELS" ? "active" : " "
                  }`}
                  onClick={() => HandleSubMenuChange("FABRICATION","TANKSANDWESSELS")}
                >
                  {"Tanks and Vessels"}{" "}
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


export default CementPlantsSpares;
