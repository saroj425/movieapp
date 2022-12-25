import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/MovieCreation';
import { Tv } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useNavigate} from "react-router-dom"




export default function SimpleBottomNavigation() {
   // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
     if(value===0) navigate("/");
     else if(value===1) navigate("/movie");
     else if(value===2) navigate("/show");
     else if(value===3) navigate("/search")
     
  },[value,navigate])

  return (
    <Box sx={{ width: "100%"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:"#ffc400"}} label="Trending" icon={<RestoreIcon />} />
        <BottomNavigationAction style={{color:"#ffc400"}} label="Movie" icon={<FavoriteIcon />} />
        <BottomNavigationAction style={{color:"#ffc400"}} label="Show" icon={<Tv />} />
        <BottomNavigationAction style={{color:"#ffc400"}} label="Search" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}