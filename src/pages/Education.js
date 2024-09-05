import { Box, Card, Container, Typography, Stack, Divider, Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import tamu from '../assets/tamu.jpeg'
import gradImage from '../assets/graduation_Alma_Mater.jpeg'

function Education() {
    const edu = [
        {
            title: 'Master of Science in Compute Science',
            institution: 'Texas A&M University',
            period: 'Aug 2024 - May 2026',
            image: tamu,
            description: 'I am pursuing a master\s program in computer science, after \
            developing a strong interest in AI and robotics while researching autonomous \
            driving. My studies focus on AI robotics research, allowing me to delve \
            deeply into these cutting-edge areas. Alongside this specialization, I am \
            also developing a broad knowledge across the entire field of computer science,\
            ensuring a well-rounded understanding of various sub-disciplines.',
            coursework : [
                'CSCE 752 Robotics and Spatial Intelligence',
                'CSCE 631 Intelligent Agent',
            ],
            otherCoursework : [
                'CSCE 689 Multi-agent Reinforcement Learning',
            ],
        },
        {
            title: 'Bachelor of Science in Compute Science, Minor in Math',
            institution: 'Texas A&M University',
            period: 'Aug 2020 - May 2024',
            image: gradImage,
            description: 'I hold a bachelor\'s degree in computer science, during which I \
            gained extensive knowledge in the field. I actively participated in \
            student organizations, including the TAMU RoboMasters computer vision team and \
            served as a project manager at the Aggie Coding Club. I conducted research on \
            autonomous driving and computer systems. These experiences helped me build \
            strong leadership and communication skills. Additionally, I minored in math \
            to complement and enhance my expertise in computer science.',
            coursework : [
                'CSCE 482 Senior Capstone Design',
                'CSCE 431 Software Engineering',
                'CSCE 421 Machine Learning',
                'CSCE 420 Artificial Intelligence',
                'CSCE 411 Design and Analysis of Algorithms',
                'CSCE 464 Wireless and Mobile Systems',
                'CSCE 491 Research',
                'CSCE 331 Foundations of Software Engineering',
                'CSCE 314 Programming Languages',
                'CSCE 313 Introduction to Computer Systems',
                'CSCE 312 Computer Organization',
                'CSCE 310 Database Systems',
                'CSCE 222 Discrete Structures for Computing',
                'CSCE 221 Data Structures and Algorithms',
                'CSCE 120 Program Design and Concepts',
            ],
            otherCoursework : [
                'MATH 423 Linear Algebra II',
                'MATH 414 Fourier Series and Wavelets',
                'MATH 308 Differential Equations',
                'MATH 304 Linear Algebra',
                'MATH 251 Engineering Mathematics III',
                'MATH 152 Engineering Mathematics II',
                'MATH 151 Engineering Mathematics I',
                'STAT 212 Principles of Statistics II',
                'STAT 211 Principles of Statistics I',
                'ECEN 248 Introduction to Digital Systems Design',
                'ECEN 214 Electrical Circuit Theory',
            ]
        }
    ]

    return (
        <Container maxWidth='md'>
            <Box>
                <Typography variant="h4" sx={{ margin: 2 }}>Education</Typography>
                <Stack>
                    {edu.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 4,
                            margin: 2,
                            marginBottom: 3
                        }}>
                            <Box component='img' src={index.image} sx={{ display: "flex", marginX: 'auto', maxHeight: '400px', maxWidth: '100%', padding: 1 }}></Box>
                            <Divider sx={{ padding: 1 }}></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1}}>
                                <Stack>
                                    <Typography variant="h6" sx={{ marginRight: 1 }}>{index.title}</Typography>
                                    <Typography variant="h6">@ {index.institution}</Typography>
                                </Stack>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant="p" sx={{ lineHeight: 1.6 }}>{index.description}</Typography>
                            <Accordion sx={{ marginTop: 3 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Courseworks</AccordionSummary>
                                <Grid container>
                                    <Grid item xs={6}>
                                        {index.coursework.map((index) => (
                                            <AccordionDetails key={index.id}>
                                                <Typography>- {index}</Typography>
                                            </AccordionDetails>
                                        ))}                     
                                    </Grid>
                                    <Grid item xs={6}>
                                        {index.otherCoursework.map((index) => (
                                            <AccordionDetails key={index.id}>
                                                <Typography>- {index}</Typography>
                                            </AccordionDetails>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Accordion>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}

export default Education;