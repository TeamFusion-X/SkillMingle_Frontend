import { Box, Avatar} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const DpUpdate = ({ currentImage, onImageUpdate }) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(currentImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create preview for UI
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);

      // Send the actual file to parent
      onImageUpdate(file);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: 125,
        height: 125,
        '&:hover': {
          '& .hover-overlay': {
            opacity: 1,
          },
        },
      }}
    >
      <Avatar
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 1,
          border: '2px solid white',
        }}
        src={previewImage || currentImage || "https://picsum.photos/200"}
        alt="Profile"
      />
      
      <Box
        className="hover-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          borderRadius: 1,
          cursor: 'pointer',
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <CameraAltIcon sx={{ color: 'white', fontSize: 30 }} />
      </Box>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </Box>
  );
};

DpUpdate.propTypes = {
  currentImage: PropTypes.string,
  onImageUpdate: PropTypes.func.isRequired
};

DpUpdate.defaultProps = {
  currentImage: "https://picsum.photos/200"
};

export default DpUpdate;