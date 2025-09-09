import videoBg from '../../assets/img/video_bg_1.jpg';
import imgBlock1 from '../../assets/img/home1/img-block1.jpg';
import tabImg1 from '../../assets/img/home1/tab-img.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

import JsonData from '../../Constants/ReadyPlants.json'
import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider, Grid, TextField, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../../assets/css/about.scss";
import { EnquiryForm } from '../../pages/EnquiryForm';
const AboutOne = ({pt}) => {
    const drawerBleeding = 0;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? '#fff' : '#fff',
}));
const isMobile = useMediaQuery('(max-width:600px)');
const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#fff',
}));
const handleInputChange = (event) => {
    let inputValue = event.target.value;

    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/\D/g, '');

    // Limit the input to a maximum of 10 characters
    const truncatedValue = numericValue.slice(0, 10);

    // Update the input field value with the truncated numeric value
    event.target.value = truncatedValue;

    // Perform your logic or update state with the truncated value
    // For example, you can setState or dispatch an action with truncatedValue
  };

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#fff',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
    const [isOpen, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const data = JsonData.ReadyPlants
  
    const toggleDrawer = () => () => {
      setOpen(!isOpen);
      
    };
    const submitRequest = () => {
        setOpen(!isOpen);
    }
    const handleSelection = (item) => {
        setOpen(!isOpen);
        setSelectedProduct(item)
    }
    // This is used only for the example
    return (
        <>
        {/* <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="EZ9DrY43wtw"
            onClose={() => setOpen(false)}
        /> */}
        <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(35% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
        <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
          <Puller />
          <Card sx={{ width:'100%', height:'100%' }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h3>Hello,</h3> Please type in your email and phone number and we will share the detailed enquiry about <b>{selectedProduct}</b> via email.
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {}
        </Typography>
        <Grid container spacing={2} justify="center" alignItems="center">
  <Grid item xs={6} sm={2}>
    <TextField
      required
      id="outlined-required"
      label="Phone Number"
      type="text"
      onInput={handleInputChange}
    />
  </Grid>
  <Grid item xs={6} sm={2}>
    <TextField
      required
      id="outlined-required"
      label="Email Address"
      type="text"
      onInput={handleInputChange}
    />
  </Grid>
</Grid>
      </CardContent>
      <CardActions style={{marginLeft:'10px'}}>
      <div className="header-right-elements" justify="center" alignItems="center">
                    <Button className="theme-btn style-3  d-sm-block" onClick={submitRequest} >Submit </Button>
                   
                </div>
      </CardActions>
    </Card>
    
      </SwipeableDrawer>
      <section className="about-section section-padding" style={{paddingTop:'0px'}}>
            <div className="about-jm">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data='READYPLANTS'/>
          <div className='about-container'>
        {data.map((item, index) => ( 
        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0'}>
            <div className="container ">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="jm-gears"/>
                            {/* <div className="popup-video-block d-flex justify-content-center align-items-center bg-cover" style={{backgroundImage: `url(${videoBg})`}}>
                                <div className="video-play-btn">
                                    <span className="popup-video" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>                     
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>{item.made_in}</span>
                                <h2 style={{padding:'0px'}}>{item.product_title}</h2>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                        <div className="tab-content-block">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="true">Specifications</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                               
                                
                                 <div className="tab-pane fade show active" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab">
                                 <div className="tab-inner-contents">
                                     <div className="img-box">
                                         <img src={tabImg1} alt=""/>
                                     </div>
                                     <div className= {isMobile?"checked-features-list": "checked-features-list d-flex"}>
                                     {!item.specs?
                                         <ul>
                                             <li>{item.field1}</li>
                                             <li>{item.field2}</li>
                                             <li>{item.field3}</li>
                                         </ul>:
                                         <>
                                         <ul>
                                                <>
                                                {item.specs.slice(0, 4).map((key) => (
                                                    <li>{key}</li>
                                                ))}
                                                </>
                                                
                                            </ul>
                                            <ul>
                                                <>
                                                {item.specs.slice(4).map((key) => (
                                                    <li>{key}</li>
                                                ))}
                                                </>
                                                
                                            </ul>
                                            </>}
                                     </div>
                                 </div>
                             </div>
                            </div>                          
                        </div>
                        <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <Button className="theme-btn style-3  d-sm-block mt-4"  onClick={()=>handleSelection(item.product_title)}>Enquire Now </Button>
                   
                </div>
                    </div>
                </div>
            </div>
            <Divider className='mt-2' /></section>))}
</div>
        </div>
        </div>
        </div>
        </section>
        </>
        
    )
}

export default AboutOne;