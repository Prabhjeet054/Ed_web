import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Paper,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const subjects = {
  Chemistry: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
  Physics: ['Mechanics', 'Electromagnetism', 'Thermodynamics'],
  Mathematics: ['Calculus', 'Algebra', 'Geometry'],
};

const resourceContent = {
  'Organic Chemistry': {
    title: 'Organic Chemistry',
    description: 'Study materials for Organic Chemistry',
    resources: [
      {
        title: 'Introduction to Organic Chemistry',
        driveLink: 'https://drive.google.com/...',
        image: '/path-to-image',
      },
      {
        title: 'Hydrocarbon Compounds',
        driveLink: 'https://drive.google.com/...',
        image: '/path-to-image',
      },
    ],
  },
  // Add more chapter content here
};

const ResourcesPage = () => {
  const [openSubject, setOpenSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubjectClick = (subject) => {
    setOpenSubject(openSubject === subject ? '' : subject);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(resourceContent[chapter]);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SubjectsList = () => (
    <Box sx={{ width: { xs: 240, md: '100%' } }}>
      <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
        Subjects
      </Typography>
      <List component="nav">
        {Object.entries(subjects).map(([subject, chapters]) => (
          <div key={subject}>
            <ListItemButton onClick={() => handleSubjectClick(subject)}>
              <ListItemText primary={subject} />
              {openSubject === subject ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSubject === subject} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {chapters.map((chapter) => (
                  <ListItemButton
                    key={chapter}
                    sx={{ pl: 4 }}
                    onClick={() => handleChapterClick(chapter)}
                  >
                    <ListItemText 
                      primary={chapter}
                      primaryTypographyProps={{
                        style: {
                          fontSize: isMobile ? '0.9rem' : '1rem',
                        }
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 } }}>
      {isMobile && (
        <Box sx={{ mb: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Grid container spacing={2}>
        {/* Subjects and Chapters List */}
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box',
                width: 240
              },
            }}
          >
            <SubjectsList />
          </Drawer>
        ) : (
          <Grid item md={3}>
            <Paper elevation={2} sx={{ height: '100%' }}>
              <SubjectsList />
            </Paper>
          </Grid>
        )}

        {/* Resource Content */}
        <Grid item xs={12} md={9}>
          <Paper elevation={2} sx={{ p: { xs: 2, md: 3 } }}>
            {selectedChapter ? (
              <Box>
                <Typography 
                  variant={isMobile ? 'h5' : 'h4'} 
                  gutterBottom
                  sx={{ 
                    wordBreak: 'break-word',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                  }}
                >
                  {selectedChapter.title}
                </Typography>
                <Typography 
                  paragraph
                  sx={{ 
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  {selectedChapter.description}
                </Typography>
                <Grid container spacing={2}>
                  {selectedChapter.resources.map((resource, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                      <Box sx={{ mb: 4 }}>
                        <Box
                          sx={{
                            height: { xs: 150, sm: 200 },
                            backgroundColor: 'grey.200',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                          }}
                        >
                          <Typography>Resource Image</Typography>
                        </Box>
                        <Typography 
                          variant="h6"
                          sx={{ 
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                            mb: 1
                          }}
                        >
                          {resource.title}
                        </Typography>
                        <Typography
                          component="a"
                          href={resource.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            textDecoration: 'none', 
                            color: 'primary.main',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            display: 'block'
                          }}
                        >
                          Google Drive Link
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : (
              <Box
                sx={{
                  height: { xs: '50vh', md: '70vh' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography 
                  variant={isMobile ? 'h6' : 'h5'} 
                  color="text.secondary"
                  align="center"
                >
                  {isMobile ? 'Tap the menu to select a chapter' : 'Select a chapter to view resources'}
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
