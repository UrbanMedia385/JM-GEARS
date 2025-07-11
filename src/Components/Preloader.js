import React from 'react'

import mainLogo from '../assets/img/home3/logo.png';
const Preloader = () => {
  return (
    <>
        <div id="preloader" className="preloader">
        <div className="animation-preloader">
            {/* <div className="spinner">                
            </div> */}
                <div className="txt-loading">
                    <div className="logo">
                        <img src={mainLogo} alt="logo"/>
                    </div>
                    {/* <span data-text-preloader="J" className="letters-loading">
                        J
                    </span>
                    <span data-text-preloader="M" className="letters-loading">
                        M
                    </span>
                    &nbsp;
                    <span data-text-preloader="G" className="letters-loading">
                       G
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="R" className="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="S" className="letters-loading">
                        S
                    </span> */}
                </div>
            <p className="text-center">Loading</p>
        </div>
        <div className="loader">
            <div className="row">
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Preloader