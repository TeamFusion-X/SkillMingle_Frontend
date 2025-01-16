// src/components/SkillInput.js
import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, TextField, Button, Chip } from "@mui/material";

const SkillInput = ({ title, skills, onAddSkill, onRemoveSkill }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onAddSkill(trimmed);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (skillToDelete) => {
    onRemoveSkill(skillToDelete);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0, pt: "10px" }}>
          {title}
        </Typography>

        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="standard"
          placeholder="Add Skill"
          sx={{ "& .MuiInputBase-root": { height: "36px" } }}
        />

        <Button
          onClick={handleAdd}
          variant="contained"
          size="small"
          disabled={!input.trim()}
        >
          Add
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip
            key={`${skill}-${index}`}
            label={skill}
            onDelete={() => handleDelete(skill)} // Add this line
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              "& .MuiChip-deleteIcon": {
                // Add these styles
                color: "white",
                "&:hover": {
                  color: "rgba(255, 0, 0, 0.7)",
                },
              },
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

SkillInput.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddSkill: PropTypes.func.isRequired,
  onRemoveSkill: PropTypes.func,
};

export default SkillInput;
