import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileOpenAPI } from "../../../services/userAPI";
import ProfilePage from "../profilePage";
import ProfilePageShimmer from "../profilePageShimmer";

const ProfileCardOpen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { username } = useParams(); 
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfileOpenAPI(username);
        setUserInfo(response);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUser();
  }, [username]); // Re-run the effect when `name` changes

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
              flexGrow: 1, 
              textAlign: "left", 
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", pl: "50px" }}>
              {userInfo?.name || "Loading..."} {/* Example: Display user's name */}
            </Typography>
          </Box>
        </Box>

        
        {userInfo ? (
          <ProfilePage userdata={userInfo} /> // Pass `userInfo` as a prop to ProfilePage
        ) : (
          <ProfilePageShimmer />
        )}
      </Box>
    </Box>
  );
};

export default ProfileCardOpen;
