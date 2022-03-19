import React from "react";

import { Grid,Box, Typography, Container, TextField, Button } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';


const Contact = () => {
    return(
        <React.Fragment>
            <Box sx={{m:'60px'}}>

    
<Box sx={{width:'100%',height:'600px',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Container> 
        <div className="contactuscontainer">
        <Grid container spacing={4}>
            <Grid item md={4}>
                <Grid container spacing={4}>
                    <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="h4">Get in Touch</Typography>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                    <FacebookIcon/> &emsp; <FacebookIcon/> &emsp; <FacebookIcon/> &emsp; <FacebookIcon/>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="h4">Drop us a Line</Typography>
                    <br></br>
                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Typography>
                    </Grid>
                </Grid>
               
            </Grid>

            <Grid item md={4}>

                <Box sx={{width:'100%',mb:'10px'}}>
                <TextField fullWidth variant="outlined" label="full name"></TextField>
                </Box>
                <Box sx={{width:'100%',mb:'10px'}}>
                <TextField fullWidth variant="outlined" label="full name"></TextField>
                </Box>
                <Box sx={{width:'100%',mb:'10px'}}>
                <TextField fullWidth variant="outlined" multiline
          rows={4} label="full name"></TextField>
                </Box>

                <Box sx={{width:'100%'}}>
                    <Button variant="contained" style={{backgroundColor:'gold',width:'100%'}}>Submit</Button>
                    </Box>   

            </Grid>

<Grid item md={4}>




<Grid container>
                <Grid item md={12} sm={12} xs={12}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250488.99879059353!2d77.0122067822346!3d11.195729081815958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858f8d4a43d3d%3A0x2fe35a43fbeeb766!2sAbirami%20Enterprises%20%7C%20Motor%20%26%20Pump%20Spares!5e0!3m2!1sen!2sin!4v1644916691533!5m2!1sen!2sin" width="100%" height="300px" style={{border:0}}></iframe>
                </Grid>
                </Grid>

</Grid>
        </Grid>
</div>
        </Container>
</Box>






            </Box>
        </React.Fragment>
    )
}

export default Contact;