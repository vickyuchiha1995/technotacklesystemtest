import React,{useState,useEffect} from "react";
import axios from "axios";


import { Grid,Box,Paper, Typography, FormControl, FormLabel, FormControlLabel,
    Button,AccordionDetails,
    Checkbox, Divider, Accordion, AccordionSummary } from "@mui/material";

import uuid from 'react-uuid'

import MD5 from "crypto-js/md5";


import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Browsecollege = () => {

    const [cityData,setcityData] = useState([])

    const[cities,setcities] = useState([])

  

   useEffect(() => {

    const url = `https://dev.technotackle.com/collzy/admin/web/api/college-details/cities-list`



    axios
    .post(url)
    .then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.parameters)
        setcityData(res.data.parameters)
    })
    .catch((err) => {
        console.log(err)
    })



   },[])



   
//    axios.defaults.headers.common['Authorization'] = `Bearer ${MD5('Collzy@TT)(*&^!@2021')}` 

   var mytoken = MD5('Collzy@TT)(*&^!@2021').toString();
  

  


   const [Degree,setDegree] = useState([])

   useEffect(() => {

    const url = ` https://dev.technotackle.com/collzy/admin/web/api/college-details/cities-list`


  var headers = {"Access-Control_Allow-Orgin":"*","Access-Control-Allow-Methods":"DELETE,POST,GET,OPTIONS","Access-Control-Allow-Headers":"Content-Type,Authorization,X-Requested-With"}
        
 
    

    axios
    .post(url,headers,mytoken)
    .then((res) => {
        console.log(res)
        console.log(res.data.message)
        console.log('hello',res)
        setDegree(res.data.parameters)
    })
    .catch((err) => {
        console.log(err)
    })



   },[])


   

    const cityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = cities.indexOf(event.target.value);
        if(index === -1){
            setcities([...cities, event.target.value])
        } else {
            setcities(cities.filter((city) => city !== event.target.value))
        }
    }


    console.log(cities)

    return(
        <React.Fragment>

        <Box sx={{mt:'64px'}}>
        <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{m:'30px'}}>
                    <img src="https://www.psgtech.edu/images/slider/psgtech.jpg" width="100%" height="300px"></img>
                    </Box>
                </Grid>
          </Grid>
        </Box>
         



                <Grid container>


                    {/* first part */}
                    <Grid item md={4} sm={4} xs={4}>



                        <Paper style={{width:'100%',height:'auto'}}>




                        <Box sx={{ml:'30px',mt:'30px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={8}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4">Filter</Typography>
                                        </Box>
                                      
                                    </Grid>
                                    <Grid item md={4}>
                                    <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                    <Typography variant="body2" style={{color:'gold'}}>clear</Typography>
                                    </Box>
                                    </Grid>
                                </Grid>
                           </Box>
                        </Box>

                        
                        <Box sx={{ml:'30px',mt:'10px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>Location</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>





                        <Box sx={{m:'30px',height:'200px'}}> 
                            <Box sx={{m:'15px',overflow:'scroll',height:'200px'}}>
                                <FormControl>


                        {
                            cityData.map((items) => {
                                return(
                                    <FormControlLabel
                                    label={items.city}
                                    value={items.city}
                                    control={<Checkbox checked={cities.includes(items.city)} onChange={(e) => cityHandler (e)}/>}
                                    >

                                    </FormControlLabel>
                                );
                            })
                        }


                                   


                                </FormControl>
                            </Box>
                        </Box>
                      


                        <Box sx={{ml:'30px',mt:'10px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>Student Rating</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>


                        <Box sx={{ml:'30px'}}>
                        <Divider/>
                        </Box>




                        <Box sx={{ml:'30px',mt:'10px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                           <Accordion style={{borderRadius:'0',height:'100px',backgroundColor:'#003db3',marginTop:'-10px'}} elevation={0}>
        <AccordionSummary

          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:'#fff'}} variant="h4">Degree</Typography>
        </AccordionSummary>
        <AccordionDetails>
                        
        </AccordionDetails>
      </Accordion>
                             
                           </Box>
                        </Box>





                        <Box sx={{ml:'30px'}}>
                        <Divider/>
                        </Box>



                        <Box sx={{ml:'30px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>Course</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>



                        <Box sx={{ml:'30px'}}>
                        <Divider/>
                        </Box>


                        <Box sx={{ml:'30px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>Affiliated to</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>


                        <Box sx={{ml:'30px'}}>
                        <Divider/>
                        </Box>

                        <Box sx={{ml:'30px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>Coed</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>

                        <Box sx={{ml:'30px'}}>
                        <Divider/>
                        </Box>
                     

                        <Box sx={{ml:'30px'}}>
                           <Box sx={{width:'100%',height:'100px',backgroundColor:'#003db3'}}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Box sx={{display:'flex',alignItems:'center',height:'100px',pl:'15px'}}>
                                        <Typography variant="h4" style={{color:'#fff'}}>NACC RATING</Typography>
                                        </Box>
                                      
                                    </Grid>
                                  
                                </Grid>
                           </Box>
                        </Box>
                        




                        





                        </Paper>


                    </Grid>


                    {/* second part */}
                    <Grid item md={8} sm={8} xs={8}>






                            {/* part 2 content */}
                            <Box sx={{m:'30px'}}>
                            <Paper>
                                <Box sx={{width:'100%',height:'300px'}}>
                                    <Grid container spacing={2}>
                                    <Grid item md={3} sm={3} xs={3}>
                                       <img src='https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                                       width='100%'
                                       height='284px'
                                       ></img>
                                    </Grid>
                                    <Grid item md={9} sm={9} xs={9}>
                                       

                                    {/* taking full width using grid */}
                                    <Grid container>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <Typography variant="h5" style={{color:'blue'}}>East Point College of Higher Education</Typography>
                                    </Grid>

                                    <Grid item md={12} sm={12} xs={12}>
                                        <div style={{display:'flex',alignItems:'center',height:'100px'}}>
                                        <span style={{fontSize:'20px',color:'blue'}}>NACC</span> &emsp; <Button variant="contained" style={{backgroundColor:'#003db3'}}><StarIcon/> &nbsp; 3.2</Button> &emsp; <span style={{color:'gold'}}>View Review</span>
                                        </div>
                                    </Grid>


                                    <Grid item md={12} sm={12} xs={12}>
                                    <div style={{display:'flex',alignItems:'center',height:'50px'}}>
                                            <Typography> <LocationOnIcon style={{display:'inline-flex',verticalAlign:'middle'}}/> &emsp;Alavalli, Banglore</Typography>
                                        </div>
                                    </Grid>



                                    
                                    <Grid item md={12} sm={12} xs={12}>
                                    <div style={{display:'flex',alignItems:'center',height:'50px'}}>
                                            <Typography> <PhoneIcon style={{display:'inline-flex',verticalAlign:'middle'}}/> &emsp; +91 9876543210</Typography>
                                       </div>
                                    </Grid>



                                    <Grid item md={8} sm={12} xs={12}>
                                    <div style={{display:'flex',alignItems:'center',height:'50px'}}>
                                            <Typography> <MailIcon style={{display:'inline-flex',verticalAlign:'middle'}}/> &emsp; contact@gmail.com</Typography>
                                       </div>
                                    </Grid>

                                    <Grid item md={4} sm={4} xs={4}>
                                        <div style={{textAlign:'right',marginRight:'10px'}}>
                                        <Button variant="contained" style={{backgroundColor:'gold'}}>SHORTLIST</Button>
                                        </div>
                                    </Grid>



                                    </Grid>
                                   




                                    </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            </Box>

                                   
                           







                        </Grid>
                </Grid>






        </React.Fragment>
    );
}
export default Browsecollege;