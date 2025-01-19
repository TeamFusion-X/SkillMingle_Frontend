import {
  Box,
  Typography,

  Avatar,
} from "@mui/material";
import { useEffect} from "react";

import { getUserProfileOpenAPI } from "../../../services/userAPI";

const ProfileCardOpen = () => {
  

  useEffect(() => {
    const response = getUserProfileOpenAPI("dummyname");
    console.log(response);
    
  },[])

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Space between profile + toggle button group
          alignItems: "start",
          flexWrap: "wrap", // Ensure it wraps on smaller screens
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          <Avatar
            sx={{
              width: 125,
              height: 125,
              borderRadius: 1,
              border: "2px solid white",
            }}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Box
            sx={{
              flexGrow: 1, // Occupy remaining horizontal space
              textAlign: "left", // Center the name horizontally
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", pl: "50px" }}>
              
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default ProfileCardOpen;
