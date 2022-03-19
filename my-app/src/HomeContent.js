import React from 'react';

import { Grid,Box, TextField, Button, Paper, Typography, Container,Card,CardContent, Avatar } from '@mui/material';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';




// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//css
import './homecontent.css';


const HomeContent = () => {


    const cardknowmore = () => {
        alert('know more')
    }




    return(
        <React.Fragment>
             <Box sx={{ml:'30px',mr:'30px'}}>
        <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                        <Box className='homeimagecontainer'>   
                        <img src="https://wallpaperaccess.com/full/1209458.jpg" width='100%' height="600px"></img>
                        <div className='homeimagehero'>
                        {/* <div className='homeimageherocontainer-1'>
                            <Typography variant='h4' style={{color:'#fff'}}>India's fastest college search engine</Typography>
                        </div>



                        <div className='homeimageherocontainer-2'>
                            <Typography variant='h4' style={{color:'#fff'}}>India's fastest college search engine</Typography>
                        </div> */}
                        <div className='homeimageherocontainer-1'>
                            <Grid container spacing={4}>
                                <Grid item md={6} sm={6} xs={6}>
                                    <div className='fastestcollegesearchengine'>
                                    <Typography variant='h4' style={{color:'#fff'}}>India's fastest college search engine</Typography>
                                    </div>
                               
                                </Grid>

                                <Grid item md={6} sm={6} xs={6}>
                                    <div className='homeimageherocontainer-2'>
                                    <Typography variant='h5' style={{color:'#fff',display:'flex',justifyContent:'left',width:'100%'}}>Find your Dream College by filling 3 <br></br> simple details,within 5 minutes</Typography>
                                        <Box sx={{width:'100%',height:'300px',m:'15px'}}>
                                            <div className='homeimageborderinput'>
                                                <Box sx={{m:'15px'}}>
                                                    <Grid container spacing={4}>
                                                        <Grid item md={7} sm={8} xs={8}>
                                                        <TextField fullWidth style={{backgroundColor:'#fff'}} label="Course"/>
                                                        </Grid>
                                                        <Grid item md={5} sm={4} xs={4}>
                                                        <TextField fullWidth style={{backgroundColor:'#fff',borderRadius:'5%'}} label="Major"/>
                                                        </Grid>


                                                        <Grid item md={9} sm={8} xs={8}>
                                                        <TextField fullWidth style={{backgroundColor:'#fff'}} label="Location"/>
                                                        </Grid>
                                                        <Grid item md={3} sm={4} xs={4}>
                                                        <TextField fullWidth style={{backgroundColor:'#fff',borderRadius:'5%'}} label="Aggregate"/>
                                                        </Grid>

                                                        <Grid item md={12} sm={12} xs={12}>
                                                            <Button variant="contained" style={{width:'100%',height:"60px",backgroundColor:'orange'}}>SEARCH</Button>
                                                        </Grid>
                                                    </Grid>
                                               
                                                </Box>
                                       
                                            </div>
                                        </Box>
                                    </div>
                               
                                </Grid>
                            </Grid>
                            </div>

                        </div>
                        </Box>
                      
                    </Grid>
                </Grid>
       
        </Box>


        <Box sx={{ml:'30px',mr:'30px',mt:'-4px'}}>
            <Paper elevation={0}>
            <Box sx={{width:'100%',height:'150px',backgroundColor:'#003db3'}}>
                        

                        <Grid container>
                            <Grid item md={3}>
                            <Box sx={{display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'100%',
                        height:'150px',
                        flexDirection:'column'
                        }}>
                                <Typography variant='h4' style={{color:'#fff'}}>1254</Typography>
                                <Typography variant='h4' style={{color:'#fff'}}>College</Typography>
                            </Box>
                            </Grid>
                            <Grid item md={3}>
                            <Box sx={{display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'100%',
                        height:'150px',
                        flexDirection:'column'
                        }}>
                                <Typography variant='h4' style={{color:'#fff'}}>1254</Typography>
                                <Typography variant='h4' style={{color:'#fff'}}>College</Typography>
                            </Box>
                            </Grid>
                            <Grid item md={3}>
                            <Box sx={{display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'100%',
                        height:'150px',
                        flexDirection:'column'
                        }}>
                                <Typography variant='h4' style={{color:'#fff'}}>1254</Typography>
                                <Typography variant='h4' style={{color:'#fff'}}>College</Typography>
                            </Box>
                            </Grid>
                            <Grid item md={3}>
                            <Box sx={{display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'100%',
                        height:'150px',
                        flexDirection:'column'
                        }}>
                                <Typography variant='h4' style={{color:'#fff'}}>1254</Typography>
                                <Typography variant='h4' style={{color:'#fff'}}>College</Typography>
                            </Box>
                            </Grid>
                        </Grid>




            </Box>
            </Paper>




                        <Box sx={{m:'30px'}}>

                        </Box>


                        <Container maxWidth="xl">
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='homecard1'>
          <img src='https://thumbs.dreamstime.com/b/brazilian-male-college-student-braces-desk-classroom-group-students-174976717.jpg' width="100%" height="400px" style={{opacity:'0.5'}}></img>
          
          <div className='homecardcontent'>
                       <div style={{paddingBottom:'10px',paddingLeft:'15px'}}>
                            <Typography variant='h4' style={{color:'#fff'}}>What to do after 12th?</Typography>
                       </div>
                       <div style={{paddingBottom:'50px'}}>
                            <Typography variant='body2' style={{color:'gold',opacity:'0.5',paddingLeft:'15px'}}>What to do after 12th?</Typography>
                       </div>
          </div>

          </div>
          </SwiperSlide>
     
     
    </Swiper>

    <Box sx={{mt:'30px',mb:'30px',display:'flex',justifyContent:'center',width:'100%'}}>
        <div style={{cursor:'pointer'}} onClick={cardknowmore}>
                     <Typography variant='h5' style={{color:'gold'}}>See More <DoubleArrowIcon style={{display:'inline-flex',verticalAlign:'middle',color:'gold'}}/></Typography>   
                     </div>
    </Box>

    </Container>






                        <Box sx={{width:'100%',height:"300px"}}>
                            <Box sx={{display:'flex',justifyContent:'center',height:'300px',flexDirection:'column'}}>
                                <Typography variant='h5' style={{color:'#003db3'}}>Time money effort!</Typography>

                                <Typography variant='h3'>Comparison tag line</Typography>
                            </Box>
                        </Box>


                        <Box sx={{m:'30px'}}>

                            <div className='homepageimg2'>
                            <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700360787.jpg"
                            width='100%' height="450px"
                            ></img>


                            <div className='homepageimgcontent'>
                            <Typography variant='h5'>Aptitude Test</Typography><br></br>

                            <Typography variant='body2'>Dummy Text Dummy Text Dummy TextDummy <br></br>  Text Dummy Text Dummy Text Dummy Text</Typography><br></br>
                            
                            <Button variant='contained' style={{backgroundColor:'gold',width:'15%'}}>Take a test</Button>
                            
                            
                            
                            </div>

                          
                                   
                        


                            </div>
                        </Box>


                        <Container maxWidth="xl">

                            <Box sx={{mb:'50px'}}>
                                <Grid container>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <Typography variant='h4' style={{textAlign:'center'}}>Testimonial</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                        <Container maxWidth="lg">

                            <Grid container spacing={4}>
                                <Grid item md={4} sm={6} xs={12}>
                              
                                   <div className='cardstyle1'>
                                    <div className='profilepiccontainer'>
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                        width="50px" height="50px"

                                        style={{borderRadius:'50%'}}
                                        ></img>
                                    </div>

                                    <div className='cardcontentcontainer1'>
                                        <p>  Lorem Ipsum is simply dummy text</p>
                                  
                                    </div>


                                    <div className='cardnamecontainer'>
                                        <p style={{fontWeight:'bold'}}>Arjun Bansal</p>
                                    </div>

                                    <div className='cardplacecontainer'>
                                        <p style={{fontWeight:'bold'}}>Student,Delhi</p>
                                    </div>


                                   </div>
                            
                                </Grid>


                                <Grid item md={4} sm={6} xs={12}>
                              
                                   <div className='cardstyle1'>
                                    <div className='profilepiccontainer'>
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                        width="50px" height="50px"

                                        style={{borderRadius:'50%'}}
                                        ></img>
                                    </div>

                                    <div className='cardcontentcontainer1'>
                                        <p>  Lorem Ipsum is simply dummy text</p>
                                  
                                    </div>


                                    <div className='cardnamecontainer'>
                                        <p style={{fontWeight:'bold'}}>Arjun Bansal</p>
                                    </div>

                                    <div className='cardplacecontainer'>
                                        <p style={{fontWeight:'bold'}}>Student,Delhi</p>
                                    </div>


                                   </div>
                            
                                </Grid>


                                <Grid item md={4} sm={6} xs={12}>
                              
                              <div className='cardstyle1'>
                               <div className='profilepiccontainer'>
                                   <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                   width="50px" height="50px"

                                   style={{borderRadius:'50%'}}
                                   ></img>
                               </div>

                               <div className='cardcontentcontainer1'>
                                   <p>  Lorem Ipsum is simply dummy text</p>
                             
                               </div>


                               <div className='cardnamecontainer'>
                                   <p style={{fontWeight:'bold'}}>Arjun Bansal</p>
                               </div>

                               <div className='cardplacecontainer'>
                                   <p style={{fontWeight:'bold'}}>Student,Delhi</p>
                               </div>


                              </div>
                       
                           </Grid>
                            </Grid>
                            </Container>

                            <Box sx={{m:'30px'}}>
                                <div className='homeimagecontainer2'>
                                    <img src='https://www.teahub.io/photos/full/89-893583_photo-wallpaper-computer-girl-internet-purchase-girls-purchase.jpg'
                                    width='100%'
                                    height="600px"
                                    ></img>



                                    <div className='imagecontainer2content'>

                                    <Grid container spacing={2}>
                                        <Grid item md={6} sm={6} xs={6}>
                                        
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={6}>
                                        <Typography variant='h5' style={{color:'blue'}}>One stop solution</Typography><br></br>

                                        <Typography variant='h4' >Private Counselor/International</Typography><br></br>

                                        <Typography variant='body1'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        </Typography><br></br>

                                        <Button variant='contained' style={{backgroundColor:'gold'}}>REQUEST A CALL BACK</Button>
                                        </Grid>
                                    </Grid>


                                    </div>


                                </div>
                            </Box>






                            <Box sx={{m:'30px'}}>
                                <Grid container>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <div className='videocontentcontainer'>
                                        <Typography variant='h6' style={{color:'blue'}}>Video Content</Typography><br></br>

                                        <Typography variant='h5' style={{color:'blue'}}>Heading revelant to the video content</Typography>
                                <br></br>
                            <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Typography>
</div>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>


                                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'600px'}}>
                                            your video goes here
                                        </div>

</Grid>     
                                </Grid>
                            </Box>


        </Box>
        </React.Fragment>
    );
}

export default HomeContent;