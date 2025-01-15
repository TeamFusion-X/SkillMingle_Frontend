import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import UserCard from "./userCard";

const UserCardList = ({ rankedUsers }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Ranked Users
      </Typography>
      <Grid container spacing={3}>
        {rankedUsers.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Prop Types Validation
UserCardList.propTypes = {
  rankedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dp: PropTypes.string,
      rating: PropTypes.number,
      match: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserCardList;
