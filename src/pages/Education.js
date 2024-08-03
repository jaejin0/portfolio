import { Box, Card, Container, Typography, Stack, Divider, Accordion, AccordionSummary, AccordionDetails, Grid, Backdrop } from "@mui/material";
import image from '../assets/Aggie_Coding_Club.jpg'
import gradImage from '../assets/graduation_Alma_Mater.jpg'

function Education() {
    const edu = [
        {
            title: 'Master of Science in Compute Science',
            period: 'Aug 2024 - May 2026',
            image: '',
            description: 'During Master\'s program I am researching in AI Robotics',
            coursework : [
                'CSCE 752 Robotics and Spatial Intelligence',
                'CSCE 631 Intelligent Agent',
                'CSCE 691 Research',
            ],
            otherCoursework : [],
        },
        {
            title: 'Bachelor of Science in Compute Science, Minor in Math',
            period: 'Aug 2020 - May 2024',
            image: gradImage,
            description: 'math minor, research, finding interest, student organizations',
            coursework : [
                'CSCE 482 Senior Capstone Design',
                'CSCE 431 Software Engineering',
                'CSCE 331 Foundations of Software Engineering',
                'CSCE 314 Programming Languages',
                'CSCE 120 Program Design and Concepts',
                'CSCE 491 Research',
                'CSCE 421 Machine Learning',
                'CSCE 420 Artificial Intelligence',
                'CSCE 310 Database Systems',
                'CSCE 411 Design and Analysis of Algorithms',
                'CSCE 222 Discrete Structures for Computing',
                'CSCE 221 Data Structures and Algorithms',
                'CSCE 464 Wireless and Mobile Systems',
                'CSCE 313 Introduction to Computer Systems',
                'CSCE 312 Computer Organization',
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
        <Container>
            <Box>
                <Typography variant="h4">Education</Typography>
                <Stack>
                    {edu.map((index) => (
                        <Card key={index.id}>
                            <Box component='img' src={index.image} sx={{ width: '100%'}}></Box>
                            <Divider></Divider>
                            <Typography>{index.title}</Typography>
                            <Typography>{index.period}</Typography>
                            <Typography>{index.description}</Typography>
                            <Accordion>
                                <AccordionSummary>Courseworks</AccordionSummary>
                                <Grid container>
                                    <Grid item xs={6}>
                                        {index.coursework.map((index) => (
                                            <AccordionDetails key={index.id}>
                                                <Typography>{index}</Typography>
                                            </AccordionDetails>
                                        ))}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {index.otherCoursework.map((index) => (
                                            <AccordionDetails key={index.id}>
                                                <Typography>{index}</Typography>
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