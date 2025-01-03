import { Box } from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../assets/backgroundImage.jpeg"; // Import the background image

export const BackgroundBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw", 
  height: "100vh",
  position: "relative", 
  overflow: "hidden", 

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "top left", 
    backgroundRepeat: "repeat", 
    filter: "blur(8px)",
    zIndex: -1, 
  },
}));

