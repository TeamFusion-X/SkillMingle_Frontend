import { Box } from '@mui/material';
import ProfileCard from './profileCard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserData } from '../../redux/actions/userAction';
import { useParams } from 'react-router-dom';
import ProfileCardOpen from './profileCardOpen';

const Profile = () => {

  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUserData());

  }, [dispatch]);

  return (
    <Box
      sx={{
        width: '95%',         
        minHeight: '85vh',    
        margin: 'auto',   
        marginTop: '70px',
        display: 'flex',      
        flexDirection: 'column', // Stack items vertically 
        alignItems: 'center',  
        padding: 2,           
        boxSizing: 'border-box', 
        borderRadius: '1%',
        backgroundColor: 'transparent',
      }}
    >
       {username ? <ProfileCardOpen /> : <ProfileCard />}
    </Box>
  );
};

export default Profile;
