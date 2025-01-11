import { Box, Grid, Skeleton, Paper } from '@mui/material';


const ProfilePageShimmer = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4}>
          {/* Personal Information Section */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Skeleton variant="text" width="50%" height={40} sx={{ mb: 3 }} />
              {[...Array(4)].map((_, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <Skeleton
                    variant="circular"
                    width={24}
                    height={24}
                    sx={{ mr: 2 }}
                  />
                  <Skeleton variant="text" width="80%" height={20} />
                </Box>
              ))}
            </Paper>
          </Grid>
  
          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                height: "100%",
              }}
            >
              <Skeleton variant="text" width="50%" height={40} sx={{ mb: 3 }} />
              {[...Array(3)].map((_, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Skeleton variant="text" width="60%" height={30} sx={{ mb: 2 }} />
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {[...Array(4)].map((_, idx) => (
                      <Skeleton
                        key={idx}
                        variant="rounded"
                        width={60}
                        height={30}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
  
          {/* Reviews and Ratings Section */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <Skeleton variant="text" width="50%" height={40} sx={{ mb: 3 }} />
              <Grid container spacing={2}>
                {[...Array(2)].map((_, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Paper
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        height: "100%",
                      }}
                    >
                      <Skeleton variant="text" width="40%" height={30} />
                      <Skeleton variant="text" width="80%" height={20} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  };
  

export default ProfilePageShimmer;