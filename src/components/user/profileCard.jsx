import {
  Box,
  Avatar,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import ProfilePage from "./profilePage";
import ProfileUpdateCard from "./profileUpdateCard";
import ProfilePageShimmer from "./profilePageShimmer";
import { useSelector,  } from "react-redux";

const ProfileCard = () => {
  const [selected, setSelected] = useState("option1");

  const handleChange = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };

  const handleFormSubmit = (data) => {
    console.log("Updated Data:", data);

    
    // Send updated data to backend API
  };

  // const [userInfo, setUserInfo] = useState();


  // const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);
  // useEffect(() => {

  //   SetuserInfo(user);
  //   console.log(user)
  // }, [user]);

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
              Hello Deepesh!
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
        </ToggleButtonGroup>

        {selected === "option1" && (userInfo ? (
          <ProfilePage userdata={userInfo} />
        ) : (
          <ProfilePageShimmer />
        ))}

        {
          selected === "option2" && <ProfileUpdateCard userdata={userInfo} onSubmitHandler={handleFormSubmit}/>
        }
      </Box>
    </Box>
  );
};

export default ProfileCard;
