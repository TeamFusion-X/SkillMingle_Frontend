import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import ProfilePage from "./profilePage";
import ProfileUpdateCard from "./profileUpdatePage";
import ProfilePageShimmer from "./profilePageShimmer";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData, updateUserDP } from "../../redux/actions/userAction";
import DpUpdate from "./dpUpdate";
import { updateUserPasswordAPI } from "../../services/userAPI";
import PasswordUpdatePage from "./passwordUpdatePage";
import LogoutCard from "./logoutPage";

const ProfileCard = () => {
  const [selected, setSelected] = useState("option1");

  const handleChange = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };

  const dispatch = useDispatch();
  const handleFormSubmit = (data) => {
    console.log("Updated Data:", data);
    dispatch(updateUserData(data));
    // Send updated data to backend API
  };

  const handlePasswordChange = (data) => {
    //console.log("Updated Password Data:", data);
    const response = updateUserPasswordAPI(data);
    console.log(response);
    // will dispatch you soon
  }

  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);
  const [profileImage, setProfileImage] = useState(
    userInfo.profilePicture || "https://picsum.photos/200"
  );

  // Add this handler function
  const handleImageUpdate = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setProfileImage(previewUrl);

    dispatch(updateUserDP(file));
    // You can dispatch an action here to update the profile picture in your Redux store
    // dispatch(updateProfilePicture(newImage));
  };

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
          <DpUpdate
            currentImage={profileImage}
            onImageUpdate={handleImageUpdate}
          />
          <Box
            sx={{
              flexGrow: 1, // Occupy remaining horizontal space
              textAlign: "left", // Center the name horizontally
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", pl: "50px" }}>
              Hello {userInfo.name}!
            </Typography>
          </Box>
        </Box>

        <ToggleButtonGroup
          value={selected}
          onChange={handleChange}
          exclusive
          aria-label="options"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& .MuiToggleButton-root": {
              border: "none",
              backgroundColor: "transparent",
              color: "white",
              padding: "8px 16px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "grey",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "grey",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "grey",
                },
              },
              "&:focus": {
                outline: "none",
              },
              "&.Mui-focusVisible": {
                outline: "none",
                boxShadow: "none",
              },
            },
          }}
        >
          <ToggleButton value="option1" aria-label="option 1">
            Profile
          </ToggleButton>
          <ToggleButton value="option2" aria-label="option 2">
            Update Profile
          </ToggleButton>
          <ToggleButton value="option3" aria-label="option 3">
            Update Password
          </ToggleButton>
          <ToggleButton value="option4" aria-label="option 4">
            Logout
          </ToggleButton>
        </ToggleButtonGroup>

        {selected === "option1" &&
          (userInfo ? (
            <ProfilePage userdata={userInfo} />
          ) : (
            <ProfilePageShimmer />
          ))}

        {selected === "option2" && (
          <ProfileUpdateCard
            userdata={userInfo}
            onSubmitHandler={handleFormSubmit}
          />
        )}
        {selected === "option3" && (
          <PasswordUpdatePage 
            onSubmitHandler={handlePasswordChange}
          />
        )}
        {selected === "option4" && (
          <LogoutCard />
        )}
      </Box>
    </Box>
  );
};

export default ProfileCard;
