import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to EduResource
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Your one-stop destination for quality educational resources. Access comprehensive study materials, expert guidance, and interactive learning tools.
            </Typography>
            <Button
              component={Link}
              to="/resources"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              RESOURCES →
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 400,
              backgroundColor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" color="text.secondary">
              Project Image Placeholder
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Reviews
        </Typography>
        <Box
          sx={{
            height: 200,
            backgroundColor: 'grey.100',
            p: 2,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography>Review Section Content</Typography>
        </Box>
      </Box>

      <Box sx={{ my: 8, p: 4, backgroundColor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Contact Information
        </Typography>
        <Typography align="center">
          Contact information and other details will be displayed here.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
