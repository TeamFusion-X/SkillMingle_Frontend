import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavbarLP = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" style={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}
        >
          SkillMingle
        </Typography>

        <Button
          component={Link}
          to="/"
          color="inherit"
          style={{
            marginRight: "10px",
            textDecoration: location.pathname === "/" ? "underline" : "none",
          }}
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/about"
          color="inherit"
          style={{
            marginRight: "10px",
            textDecoration: location.pathname === "/about" ? "underline" : "none",
          }}
        >
          About Us
        </Button>

        <Button
          component={Link}
          to="/login"
          color="inherit"
          style={{
            marginRight: "10px",
            textDecoration: location.pathname === "/login" ? "underline" : "none",
          }}
        >
          Login
        </Button>

        <Button
          component={Link}
          to="/signup"
          color="inherit"
          style={{
            textDecoration: location.pathname === "/signup" ? "underline" : "none",
          }}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarLP;
