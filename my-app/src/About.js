import { Grid,Box, Typography, Divider } from "@mui/material";
import React from "react";

//css
import './about.css';

const About = () => {
    return(
        <React.Fragment>
                <Box sx={{mt:'64px',ml:'30px',mr:'30px'}}>
                    <img src="https://images.pond5.com/students-passing-notes-class-032880589_prevstill.jpeg" width='100%' height='200px'></img>


                <Grid container spacing={2}>
                    <Grid item md={7} sm={7} xs={12}>
                        <Box sx={{mt:'25px',mb:'15px'}}>
                    <Typography variant="h3">Our Story</Typography>
                    </Box>
                    </Grid>

                    <Grid item md={7} sm={7} xs={12}>
                      
                    <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography> <br></br>


                    <Typography variant="h3">Issues We are addressing</Typography> <br></br>
                    <Typography variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>


                    </Grid>

                <Grid item md={5} sm={5} xs={12}>


                {/* taking full width here */}

        <Grid container>
                <Grid item md={6} sm={6} xs={6}>
                    <div className="aboutusbox">
                            <Typography variant="h5" style={{color:'blue'}}>1254</Typography>
                            <Typography variant="h6" >College Name</Typography>
                    </div>
                </Grid>
              
                <Grid item md={6} sm={6} xs={6}>
                <div className="aboutusbox" style={{borderLeft:'1px solid black'}}>
                <Typography variant="h5" style={{color:'blue'}}>1254</Typography>
                            <Typography variant="h6" >College Name</Typography>
                    </div>
                </Grid>

         

                <Grid item md={6} sm={6} xs={6}>
                    <div className="aboutusbox" style={{borderTop:'1px soild black',borderTop:'1px solid black'}}>
                            <Typography variant="h5" style={{color:'blue'}}>1254</Typography>
                            <Typography variant="h6" >College Name</Typography>
                    </div>
                </Grid>
              
                <Grid item md={6} sm={6} xs={6}>
                <div className="aboutusbox" style={{borderLeft:'1px solid black',borderTop:'1px solid black'}}>
                <Typography variant="h5" style={{color:'blue'}}>1254</Typography>
                            <Typography variant="h6" >College Name</Typography>
                    </div>
                </Grid>

                </Grid>

                
                </Grid>




                </Grid>



                </Box>
        </React.Fragment>
    )
}

export default About;