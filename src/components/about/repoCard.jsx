import PropTypes from "prop-types";
import { Card, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const RepoCard = ({ title, url }) => (
    <Card
        onClick={() => window.open(url, "_blank")}
        sx={{
            cursor: "pointer",
            maxWidth: "300px",
            margin: "0 auto",
            padding: "16px",
            textAlign: "center",
            borderRadius: "16px",
            background: "rgba(173, 216, 230, 0.3)",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
            },
        }}
    >
        <GitHub sx={{ fontSize: 40, mb: 1 }} />
        <Typography variant="h6">{title}</Typography>
    </Card>
);

RepoCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default RepoCard;