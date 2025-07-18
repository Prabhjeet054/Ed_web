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
  Skeleton
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/Footer';

const classData = {
  11: {
    Physics: {
      'Physical World and Measurement': [
        'Physics and Mathematics',
        'Units and Measurements',
        'Physical Quantities',
        'Measurement Techniques'
      ],
      'Kinematics': [
        'Motion in a Straight Line',
        'Motion in a Plane',
        'Projectile Motion',
        'Relative Velocity'
      ],
      'Laws of Motion': [
        'Newton\'s Laws',
        'Friction',
        'Free Body Diagrams',
        'Applications of Laws of Motion'
      ],
      'Work, Energy and Power': [
        'Work',
        'Energy',
        'Power',
        'Collisions',
        'Conservation of Energy'
      ],
      'Motion of System of Particles': [
        'Center of Mass',
        'Momentum',
        'Rigid Body Dynamics',
        'Angular Momentum'
      ]
    },
    Chemistry: {
      'Physical Chemistry': [
        'Some Basic Concepts',
        'States of Matter',
        'Atomic Structure',
        'Thermodynamics',
        'Chemical Equilibrium'
      ],
      'Organic Chemistry': [
        'Basic Organic Chemistry',
        'Hydrocarbons',
        'Environmental Chemistry',
        'Isomerism',
        'Reaction Mechanisms'
      ],
      'Inorganic Chemistry': [
        'Classification of Elements',
        'Chemical Bonding',
        'Redox Reactions',
        'Periodic Table',
        'Coordination Compounds'
      ]
    },
    Mathematics: {
      'Sets and Functions': [
        'Sets',
        'Relations and Functions',
        'Trigonometric Functions',
        'Inverse Trigonometric Functions'
      ],
      'Algebra': [
        'Complex Numbers',
        'Linear Inequalities',
        'Sequences and Series',
        'Binomial Theorem'
      ],
      'Coordinate Geometry': [
        'Straight Lines',
        'Conic Sections',
        'Introduction to 3D',
        'Distance Formula'
      ]
    }
  },
  12: {
    Physics: {
      'Electrostatics': [
        'Electric Charges',
        'Electric Field',
        'Electric Potential',
        'Capacitance'
      ],
      'Current Electricity': [
        'Electric Current',
        'Ohm\'s Law',
        'Electrical Devices',
        'Kirchhoff\'s Laws'
      ],
      'Magnetism': [
        'Magnetic Field',
        'Electromagnetic Induction',
        'AC Circuits',
        'Magnetic Properties of Materials'
      ],
      'Optics': [
        'Ray Optics',
        'Wave Optics',
        'Optical Instruments',
        'Interference and Diffraction'
      ]
    },
    Chemistry: {
      'Physical Chemistry': [
        'Solutions',
        'Electrochemistry',
        'Chemical Kinetics',
        'Surface Chemistry'
      ],
      'Organic Chemistry': [
        'Alcohols and Ethers',
        'Aldehydes and Ketones',
        'Biomolecules',
        'Polymers'
      ],
      'Inorganic Chemistry': [
        'd and f Block',
        'Coordination Compounds',
        'Metallurgy',
        'Qualitative Analysis'
      ]
    },
    Mathematics: {
      'Calculus': [
        'Continuity and Differentiability',
        'Applications of Derivatives',
        'Integrals',
        'Differential Equations'
      ],
      'Algebra': [
        'Matrices',
        'Determinants',
        'Vector Algebra',
        'Complex Numbers'
      ],
      'Probability': [
        'Probability Concepts',
        'Random Variables',
        'Bernoulli Trials',
        'Probability Distributions'
      ]
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
      {
        title: 'Electric Field Lines',
        description: 'Visualizing electric field lines and their properties',
        driveLink: 'https://drive.google.com/placeholder-7',
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
      {
        title: 'Significant Figures',
        description: 'Rules and examples for significant figures in measurements',
        driveLink: 'https://drive.google.com/placeholder-8',
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
      {
        title: 'Isomerism in Organic Chemistry',
        description: 'Introduction to structural and stereoisomerism',
        driveLink: 'https://drive.google.com/placeholder-9',
        image: '/path-to-image',
      },
    ],
  },
  'Solutions': {
    title: 'Solutions',
    description: 'Detailed notes and resources on types of solutions, concentration terms, and colligative properties.',
    resources: [
      {
        title: 'Types of Solutions',
        description: 'Classification and examples of different types of solutions',
        driveLink: 'https://drive.google.com/placeholder-10',
        image: '/path-to-image',
      },
      {
        title: 'Concentration Terms',
        description: 'Molarity, Molality, Normality, and other concentration units',
        driveLink: 'https://drive.google.com/placeholder-11',
        image: '/path-to-image',
      },
      {
        title: 'Colligative Properties',
        description: 'Study of properties depending on the number of solute particles',
        driveLink: 'https://drive.google.com/placeholder-12',
        image: '/path-to-image',
      },
    ],
  },
  'Matrices': {
    title: 'Matrices',
    description: 'Comprehensive resources on matrices, operations, and applications in mathematics.',
    resources: [
      {
        title: 'Matrix Basics',
        description: 'Introduction to matrices and types of matrices',
        driveLink: 'https://drive.google.com/placeholder-13',
        image: '/path-to-image',
      },
      {
        title: 'Matrix Operations',
        description: 'Addition, subtraction, and multiplication of matrices',
        driveLink: 'https://drive.google.com/placeholder-14',
        image: '/path-to-image',
      },
      {
        title: 'Determinants and Inverse',
        description: 'Finding determinants and inverse of matrices',
        driveLink: 'https://drive.google.com/placeholder-15',
        image: '/path-to-image',
      },
    ],
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

const ResourcesPage = () => {
  // Initialize with Class 12 Chemistry Electrostatics
  const [selectedClass, setSelectedClass] = useState(12);
  const [selectedSubject, setSelectedSubject] = useState('Chemistry');
  const [selectedPart, setSelectedPart] = useState('Physical Chemistry');
  const [selectedChapter, setSelectedChapter] = useState(null);
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

  const getChapterSkeleton = (chapterName) => (
    <Box sx={{ mb: 4 }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        sx={{ borderRadius: 2, mb: 1 }}
      />
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ fontWeight: 500, mb: 2 }}
      >
        {chapterName}
      </Typography>
    </Box>
  );

  const getSectionLayout = (part, chapters) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          mt: 2,
          textTransform: 'capitalize',
        }}
      >
        {part}
      </Typography>
      <Grid container spacing={2}>
        {chapters.map((chapterName) => (
          <Grid item xs={12} sm={6} md={6} key={chapterName}>
            {getChapterSkeleton(chapterName)}
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {chapterName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', pb: { xs: 10, md: 12 } }}>
      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 } }}>
        <motion.div
          {...fadeInUp}
        >
          {isMobile && (
            <motion.div {...fadeIn}>
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
            </motion.div>
          )}

          <Grid container spacing={2}>
            {/* Subjects and Chapters List */}
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div {...fadeIn}>
                <Paper elevation={2} sx={{ height: '100%' }}>
                  <NavigationPanel />
                </Paper>
              </motion.div>
            </Grid>

            {/* Resource Content */}
            <Grid item xs={12} md={9}>
              <motion.div {...fadeInUp}>
                <Paper elevation={2} sx={{ p: { xs: 2, md: 3 } }}>
                  {selectedChapter ? (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
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
                              <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                              >
                                <Box sx={{ mb: 4 }}>
                                  <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={180}
                                    sx={{ borderRadius: 2, mb: 1 }}
                                  />
                                  <Typography
                                    variant="subtitle1"
                                    align="center"
                                    sx={{ fontWeight: 500, mb: 2 }}
                                  >
                                    {selectedChapter.title}
                                  </Typography>
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
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Box
                        sx={{
                          height: { xs: '50vh', md: '70vh' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {/* Optionally, you can show a hint here, or leave it blank for a clean look */}
                      </Box>
                    </motion.div>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 1200,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default ResourcesPage;
