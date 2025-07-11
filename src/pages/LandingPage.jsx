import { Box, Button, Container, Grid, Typography, useTheme, useMediaQuery, Card, CardContent, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const sampleReviews = [
  {
    name: 'Aarav Sharma',
    date: 'May 24, 2024',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Edvora helped me ace my board exams! The notes and quizzes are super helpful and easy to understand.',
  },
  {
    name: 'Priya Singh',
    date: 'May 25, 2024',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'The resources are free and high quality. I love the simple explanations and the variety of subjects.',
  },
  {
    name: 'Rahul Verma',
    date: 'May 26, 2024',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    review: 'I use Edvora every day for my studies. The platform is easy to use and the content is always up to date.',
  },
  {
    name: 'Sneha Patel',
    date: 'May 27, 2024',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    review: 'Great for revision before exams! The quizzes really test your understanding.',
  },
  {
    name: 'Vikram Joshi',
    date: 'May 28, 2024',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
    review: 'Highly recommended for all students. The best part is everything is free!',
  },
];

const ReviewCards = () => (
  <Box
    sx={{
      display: 'flex',
      overflowX: 'auto',
      gap: 3,
      py: 3,
      px: 1,
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': { height: 8 },
      '&::-webkit-scrollbar-thumb': { background: '#e0e0e0', borderRadius: 4 },
    }}
  >
    {sampleReviews.map((review, idx) => (
      <Card
        key={idx}
        sx={{
          minWidth: 280,
          maxWidth: 320,
          backgroundColor: 'grey.100',
          borderRadius: 3,
          boxShadow: 2,
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src={review.avatar} alt={review.name} sx={{ mr: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>{review.name}</Typography>
              <Typography variant="caption" color="text.secondary">{review.date}</Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.primary">
            "{review.review}"
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

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
          flexDirection: { xs: 'column', md: 'row' } // Always column on mobile, row on desktop
        }}
      >
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
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
              Welcome to Edvora
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
                },
                mb: 2
              }}
            >
              Edvora is a free learning platform dedicated to empowering students from Class 1 to Class 12 with quality educational content — at zero cost.
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
                },
                mb: 2
              }}
            >
              Our mission is to break down the barriers to learning by offering accessible, easy-to-understand study materials, notes, quizzes, and concept explanations for every major subject.
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
              Whether you're preparing for your school exams, board exams, or just want to strengthen your understanding, Edvora is your one-stop digital companion. Designed by educators and simplified for students, we're committed to making education free, fun, and future-ready for every learner.
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
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
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
          scrollMarginTop: '64px',
          position: 'relative',
          minHeight: 250,
          backgroundColor: '#fff',
          borderRadius: 2,
        }}
      >
        <Typography 
          variant={isMobile ? 'h5' : 'h4'} 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ position: 'relative', zIndex: 10 }}
        >
          Reviews
        </Typography>
        <ReviewCards />
      </Box>

      <Box 
        id="contact"
        sx={{ 
          my: { xs: 4, md: 8 }, 
          p: { xs: 2, md: 4 }, 
          backgroundColor: 'grey.100', 
          borderRadius: 2,
          scrollMarginTop: '64px'
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
