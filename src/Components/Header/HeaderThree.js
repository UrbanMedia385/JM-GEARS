import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from '../../assets/img/home3/logo.png';
import MobileMenu from "./MobileMenu";
import OffsetMenu from "./OffsetMenu";
import { MenuItem, Menu, Button } from '@mui/material';
const SubMenu = ({ label, subCategories }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>{label}</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {subCategories.map((subCategory) => (
          <MenuItem
            key={subCategory.path}
            component={Link}
            to={subCategory.path}
          >
            {subCategory.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const HeaderThree = () => {
  const [search, setSearch] = useState(true);
  const [offset, setOffset] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleSearch = () => {
    setSearch(!search);
  }

  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = [
    {
      label: 'Category 1',
      path: '/category1',
      subCategories: [
        { label: 'Subcategory 1.1', path: '/category1/subcategory1' },
        { label: 'Subcategory 1.2', path: '/category1/subcategory2' },
        // Add more sub-categories as needed
      ],
    },
    {
      label: 'Category 2',
      path: '/category2',
      subCategories: [
        { label: 'Subcategory 2.1', path: '/category2/subcategory1' },
        { label: 'Subcategory 2.2', path: '/category2/subcategory2' },
        // Add more sub-categories as needed
      ],
    },
    // Add more categories as needed
  ];
  return (
    <>
    <OffsetMenu offset={offset} handleOffset={handleOffset}  />
    <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/'>
                    <img src={mainLogo} alt="logo"/>
                </Link>
            </div>
            <div className="header-right-area d-flex justify-content-between">
                <div className="main-menu d-none d-xl-block me-xl-5">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">about us</Link></li>
                        {/* <li >
                          <a href="#"> Turnkey Projects <i className="fal fa-plus"></i></a>
                          <ul className="sub-menu">
                            <li><Link to="/cementCompletePlant">Cement Integrated Unit</Link></li>
                            <li><Link to="/cementGrindingUnit">Cement Grinding Unit</Link></li>
                            <li><Link to="/pricing">GGBS Grinding Unit</Link></li>
                            <li><Link to="/pricing">Ultrafine GGBS Grinding Unit </Link></li>
                            <li><Link to="/pricing">DRI Plant/ Sponge Iron plant </Link></li>
                            <li><Link to="/pricing">Rotary Kiln </Link></li>
                            <li><Link to="/pricing">Rotary Dryers </Link></li>
                            <li><Link to="/pricing">Rotary Cooler</Link></li>
                            <li><Link to="/pricing">Rotary Calciner </Link></li>
                            <li><Link to="/pricing">Rotary Drums </Link></li>
                            <li><Link to="/pricing">Grinding Mills </Link></li>       </ul>
                        </li> */}
                        <li><a href="#">Products <i className="fal fa-plus"></i></a>
                            <ul className="sub-menu">
                                <li><Link to="/rotary">Rotary</Link></li>
                                <li><Link to="/horizontal-grinding-mills">Horizontal Grinding Mills</Link></li>
                                <li><Link to="/cement-spares">Cement Plant Spare Parts</Link></li>
                                <li><Link to="/crushers">Crushers</Link></li>
                            </ul>
                        </li>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                          {categories.map((category) => (
                            <SubMenu
                              key={category.path}
                              label={category.label}
                              subCategories={category.subCategories}
                            />
                          ))}
                        </Menu>

                        <li><Link to="/contact">Maintenance & Repairs</Link></li>
                        <li><Link to="/ready-plants">Ready Plants</Link></li>
                        <li><Link to="/blog7">Blogs</Link></li>
  
                       
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <Link to="/contact" className="theme-btn style-3 d-none d-sm-block">Contact Us</Link>
                    <div className="d-inline-block ms-4 d-xl-none">
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger" onClick={handleMobileMenu}>
                                <i className="fal fa-bars"></i>
                            </div>
                            <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default HeaderThree;