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
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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

  const handleSubjectClick = (subject) => {
    setOpenSubject(openSubject === subject ? '' : subject);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(resourceContent[chapter]);
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {/* Subjects and Chapters List */}
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
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
                        <ListItemText primary={chapter} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Grid>

        {/* Resource Content */}
        <Grid item xs={9}>
          {selectedChapter ? (
            <Box>
              <Typography variant="h4" gutterBottom>
                {selectedChapter.title}
              </Typography>
              <Typography paragraph>{selectedChapter.description}</Typography>
              {selectedChapter.resources.map((resource, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: 'grey.200',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography>Resource Image</Typography>
                  </Box>
                  <Typography variant="h6">{resource.title}</Typography>
                  <Typography
                    component="a"
                    href={resource.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: 'primary.main' }}
                  >
                    Google Drive Link
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" color="text.secondary">
                Select a chapter to view resources
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
