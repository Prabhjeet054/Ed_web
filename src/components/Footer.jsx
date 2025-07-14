import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 6,
      py: 3,
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="body1" align="center" sx={{ mb: 1 }}>
        Contact us: <Link href="mailto:edvora.help@gmail.com">prabhjeetsingh054@gmail.com</Link>
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary">
        &copy; {new Date().getFullYear()} Edvora. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
        Made with ❤️ for students.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
