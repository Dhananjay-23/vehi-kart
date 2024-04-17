import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
const navigate = useNavigate();

const handleClick = (path)=>{
  console.log("Clicked");
   navigate(path);
}
  return (
    <div style={{backgroundColor: '#BED7DC' , padding: '2%'}}>
    <Box sx={{ flexGrow: 1 }}>
   <div style={{display: 'flex', justifyContent: 'center'}}>
    <Typography variant='h3'>
      VehiKart- where value meets trust
    </Typography>
 </div>
 <div style={{marginTop: '2%'}}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item>
            <div>
            <img style={{height: '200px' , width: '300px'}} src='https://www.shutterstock.com/image-vector/buying-renting-new-used-red-600nw-1062265193.jpg' alt='buy_car'></img>
            </div>
            <Button variant="contained" onClick={()=>handleClick('/viewVehicles')}>Buy Vehicle</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div>
                <img style={{height: '200px' , width: '300px'}} src='https://media.istockphoto.com/id/1488289944/vector/motorcycle-sale-motorcycle-rental-seller-gives-bike-and-buyer-money-customer-with-cash-and.jpg?s=612x612&w=0&k=20&c=DqPNK6Yx_hNR-tu-VFCXxBuyo2zdea_UworWwmAGOi8='></img>
            </div>
            <Button variant="contained" onClick={()=>handleClick('/sell')}>Sell Vehicle</Button>
          </Item>
        </Grid>
      </Grid>
      </div>
    </Box>

  </div>
  );
}