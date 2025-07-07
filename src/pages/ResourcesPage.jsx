import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Drawer,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from 'framer-motion';

const classData = {
  11: {
    Physics: {
      'Physical World and Measurement': ['Physics and Mathematics', 'Units and Measurements'],
      'Kinematics': ['Motion in a Straight Line', 'Motion in a Plane'],
      'Laws of Motion': ['Newton\'s Laws', 'Friction'],
      'Work, Energy and Power': ['Work', 'Energy', 'Power', 'Collisions'],
      'Motion of System of Particles': ['Center of Mass', 'Momentum', 'Rigid Body Dynamics']
    },
    Chemistry: {
      'Physical Chemistry': ['Some Basic Concepts', 'States of Matter', 'Atomic Structure'],
      'Organic Chemistry': ['Basic Organic Chemistry', 'Hydrocarbons', 'Environmental Chemistry'],
      'Inorganic Chemistry': ['Classification of Elements', 'Chemical Bonding', 'Redox Reactions']
    },
    Mathematics: {
      'Sets and Functions': ['Sets', 'Relations and Functions', 'Trigonometric Functions'],
      'Algebra': ['Complex Numbers', 'Linear Inequalities', 'Sequences and Series'],
      'Coordinate Geometry': ['Straight Lines', 'Conic Sections', 'Introduction to 3D']
    }
  },
  12: {
    Physics: {
      'Electrostatics': ['Electric Charges', 'Electric Field', 'Electric Potential'],
      'Current Electricity': ['Electric Current', 'Ohm\'s Law', 'Electrical Devices'],
      'Magnetism': ['Magnetic Field', 'Electromagnetic Induction', 'AC Circuits'],
      'Optics': ['Ray Optics', 'Wave Optics', 'Optical Instruments']
    },
    Chemistry: {
      'Physical Chemistry': ['Solutions', 'Electrochemistry', 'Chemical Kinetics'],
      'Organic Chemistry': ['Alcohols and Ethers', 'Aldehydes and Ketones', 'Biomolecules'],
      'Inorganic Chemistry': ['d and f Block', 'Coordination Compounds', 'Metallurgy']
    },
    Mathematics: {
      'Calculus': ['Continuity and Differentiability', 'Applications of Derivatives', 'Integrals'],
      'Algebra': ['Matrices', 'Determinants', 'Vector Algebra'],
      'Probability': ['Probability Concepts', 'Random Variables', 'Bernoulli Trials']
    }
  }
};

const resourceContent = {
  'Electric Charges': {
    title: 'Electric Charges and Fields',
    description: 'Study materials covering fundamental concepts of electric charges, Coulomb\'s law, and electric fields.',
    resources: [
      {
        title: 'Introduction to Electric Charges',
        description: 'Basic concepts and properties of electric charges',
        driveLink: 'https://drive.google.com/placeholder-1',
        image: '/path-to-image',
      },
      {
        title: 'Coulomb\'s Law and Applications',
        description: 'Detailed explanation of Coulomb\'s law with solved examples',
        driveLink: 'https://drive.google.com/placeholder-2',
        image: '/path-to-image',
      },
    ],
  },
  'Units and Measurements': {
    title: 'Units and Measurements',
    description: 'Comprehensive study materials on units, measurements, and related concepts in physics.',
    resources: [
      {
        title: 'SI Units and Fundamental Quantities',
        description: 'Understanding basic SI units and fundamental physical quantities',
        driveLink: 'https://drive.google.com/placeholder-3',
        image: '/path-to-image',
      },
      {
        title: 'Error Analysis and Measurements',
        description: 'Learn about types of errors and measurement techniques',
        driveLink: 'https://drive.google.com/placeholder-4',
        image: '/path-to-image',
      },
    ],
  },
  'Basic Organic Chemistry': {
    title: 'Introduction to Organic Chemistry',
    description: 'Fundamental concepts of organic chemistry including nomenclature, basic reactions, and molecular structures.',
    resources: [
      {
        title: 'Organic Compounds Classification',
        description: 'Learn about different types of organic compounds',
        driveLink: 'https://drive.google.com/placeholder-5',
        image: '/path-to-image',
      },
      {
        title: 'IUPAC Nomenclature',
        description: 'Rules and examples of naming organic compounds',
        driveLink: 'https://drive.google.com/placeholder-6',
        image: '/path-to-image',
      },
    ],
  },
};

const ResourcesPage = () => {
  // Initialize with Class 12 Physics Electrostatics
  const [selectedClass, setSelectedClass] = useState(12);
  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const [selectedPart, setSelectedPart] = useState('Electrostatics');
  const [selectedChapter, setSelectedChapter] = useState(resourceContent['Electric Charges']);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});  // Track open/closed state of sections
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClassChange = (classNum) => {
    setSelectedClass(classNum);
    setSelectedSubject(null);
    setSelectedPart(null);
    setSelectedChapter(null);
    setOpenSections({});  // Reset open sections when class changes
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setSelectedPart(null);
    setSelectedChapter(null);
    setOpenSections({});  // Reset open sections when subject changes
  };

  const handlePartChange = (part) => {
    // Toggle the open state of the clicked section
    setOpenSections(prev => ({
      ...prev,
      [part]: !prev[part]
    }));
    setSelectedPart(part);
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

  const NavigationPanel = () => (
    <Box sx={{ width: { xs: 240, md: '100%' }, p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Class</InputLabel>
        <Select
          value={selectedClass || ''}
          label="Select Class"
          onChange={(e) => handleClassChange(e.target.value)}
        >
          <MenuItem value={11}>Class 11</MenuItem>
          <MenuItem value={12}>Class 12</MenuItem>
        </Select>
      </FormControl>

      {selectedClass && (
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Subject</InputLabel>
          <Select
            value={selectedSubject || ''}
            label="Select Subject"
            onChange={(e) => handleSubjectChange(e.target.value)}
          >
            {Object.keys(classData[selectedClass]).map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedSubject && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSubject}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box>
              <List component="nav">
                {Object.entries(classData[selectedClass][selectedSubject]).map(([part, chapters]) => (
                  <div key={part}>
                    <ListItemButton
                      onClick={() => handlePartChange(part)}
                      selected={selectedPart === part}
                    >
                      <ListItemText primary={part} />
                      {openSections[part] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <AnimatePresence initial={false}>
                      {openSections[part] && (
                        <motion.div
                          key="dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <Collapse in={openSections[part]} timeout={0} unmountOnExit>
                            <List component="div" disablePadding>
                              {chapters.map((chapter) => (
                                <ListItemButton
                                  key={chapter}
                                  onClick={() => handleChapterClick(chapter)}
                                  selected={selectedChapter?.title === resourceContent[chapter]?.title}
                                  sx={{ pl: 4 }}
                                >
                                  <ListItemText primary={chapter} />
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </List>
            </Box>
          </motion.div>
        </AnimatePresence>
      )}
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
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': { width: 260 },
            }}
          >
            <NavigationPanel />
          </Drawer>
        </Box>
      )}

      <Grid container spacing={2}>
        {/* Subjects and Chapters List */}
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper elevation={2} sx={{ height: '100%' }}>
            <NavigationPanel />
          </Paper>
        </Grid>

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
