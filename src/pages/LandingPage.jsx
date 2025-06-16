import { Box, Button, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        spacing={{ xs: 2, md: 4 }} 
        sx={{ 
          mt: { xs: 2, md: 4 },
          flexDirection: { xs: 'column-reverse', md: 'row' }
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant={isMobile ? 'h4' : 'h3'} 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { 
                  xs: '2rem', 
                  sm: '2.5rem', 
                  md: '3rem' 
                }
              }}
            >
              Welcome to EduResource
            </Typography>
            <Typography 
              variant={isMobile ? 'body1' : 'h5'} 
              color="text.secondary" 
              paragraph
              sx={{ 
                fontSize: { 
                  xs: '1rem', 
                  sm: '1.1rem', 
                  md: '1.25rem' 
                }
              }}
            >
              Your one-stop destination for quality educational resources. Access comprehensive study materials, expert guidance, and interactive learning tools.
            </Typography>
            <Button
              component={Link}
              to="/resources"
              variant="contained"
              size={isMobile ? 'medium' : 'large'}
              sx={{ 
                mt: 2,
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              RESOURCES →
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 250, sm: 300, md: 400 },
              backgroundColor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            <Typography variant={isMobile ? 'body1' : 'h5'} color="text.secondary">
              Project Image Placeholder
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box 
        id="reviews"
        sx={{ 
          my: { xs: 4, md: 8 },
          px: { xs: 2, md: 0 },
          scrollMarginTop: '64px' // height of the AppBar
        }}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          component="h2" 
          gutterBottom 
          align="center"
        >
          Reviews
        </Typography>
        <Box
          sx={{
            minHeight: { xs: 150, sm: 200 },
            backgroundColor: 'grey.100',
            p: { xs: 2, md: 3 },
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography variant={isMobile ? 'body2' : 'body1'}>
            Review Section Content
          </Typography>
        </Box>
      </Box>

      <Box 
        id="contact"
        sx={{ 
          my: { xs: 4, md: 8 }, 
          p: { xs: 2, md: 4 }, 
          backgroundColor: 'grey.100', 
          borderRadius: 2,
          scrollMarginTop: '64px' // height of the AppBar
        }}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          component="h2" 
          gutterBottom 
          align="center"
        >
          Contact Information
        </Typography>
        <Typography 
          align="center"
          variant={isMobile ? 'body2' : 'body1'}
        >
          Contact information and other details will be displayed here.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
