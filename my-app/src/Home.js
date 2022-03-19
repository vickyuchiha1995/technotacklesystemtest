import React from 'react';

//material ui
import {AppBar, Toolbar, Grid,Box, Container, Button, Typography, TextField,Paper} from '@mui/material';

//css
import './browsecollege.css';

import { BrowserRouter,Routes, Route,Link } from "react-router-dom";

//files
import HomeContent from './HomeContent';
import Browsecollege from './BrowseCollege';
import About from './About';
import Contact from './Contact';
//mui icons
import ApartmentIcon from '@mui/icons-material/Apartment';


const HomePage = () => {
    return(
        <BrowserRouter>
        <React.Fragment>

            <AppBar>
                <Toolbar>
                    <Grid container>
                        <Grid item md={2} sm={12} xs={12}>
                            {/* logo goes here */}
                        </Grid>
                        <Grid item md={8} sm={12} xs={12}>
                            <Box sx={{display:'flex',justifyContent:'end'}}>
                            <nav>
                                <ul>
                               
                                    <li><Link to="Browse-college" id="menulist">Browse College</Link></li>
                                    <li> <Link to="/" id="menulist">Home</Link></li>
                                    <li> <Link to="about" id="menulist">About us</Link></li>
                                    <li> <Link to="contact" id="menulist">contact us</Link></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </nav>
                            </Box>
                        </Grid>

                        <Grid item md={2} sm={12} xs={12}>
                            <Box sx={{display:'flex',alignItems:'center',height:'64px',justifyContent:'end'}}>
                            <ApartmentIcon/>
                            </Box>
                       
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


        
       
           
            <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="Browse-college" element={<Browsecollege />} />
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>



        </React.Fragment>
        </BrowserRouter>
    );
}

export default HomePage;