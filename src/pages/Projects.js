import { Container, Box, Typography, Divider, Grid, Card, Stack, Link } from "@mui/material";

import NatureNet from '../assets/NatureNet.jpeg'
import MAES_points_reward from '../assets/maes_points_reward_system.jpeg'
import Kung_Fu_Tea from '../assets/kung_fu_tea.jpeg'

function Projects() {
    const proj = [
        {
            title: 'NatureNet',
            period: 'Jan 2024 - May 2024',
            tool: 'Python, JavaScript, React.js, Express.js, Flask, OpenCV, PyTorch, YOLOv8, Roboflow',
            link: 'https://drive.google.com/file/d/1sy7SBjxcC6cigLgP87VX8SLH8FAio2MV/view?usp=sharing',
            image: NatureNet,
            description: 'NatureNet is a service which alerts users when dangerous animals are spotted \
            using computer vision technology. For my capstone project, we trained a computer \
            vision model using custom data collected from Kaggle and internet. We developed an API with \
            Flask to detect dangerous animals and alert users through SMS and email notifications. Additionally,\
            we created a web application using React.js and Express.js, enabling users to log in to change their\
            phone number and their configurations of dangerous animals.'
        },
        {
            title: 'MAES Points Reward System',
            period: 'Jan 2024 - May 2024',
            tool: 'Ruby, Ruby on Rails, Heroku',
            link: 'https://maes-rewards-6faf74a71462.herokuapp.com/',
            image: MAES_points_reward,
            description: 'For the MAES student organization, I developed a points reward system using Agile \
            methodologies and CI/CD practices. I successfully deployed a web application with a PostgreSQL \
            backend using the Rails framework. In this project, I took on multiple roles within the Agile team,\
            including analyst, designer, developer, tester, and trainer. (You need an Texas A&M email to login to\
            the service).'
        },
        {
            title: 'Kung Fu Tea POS System',
            period: 'Aug 2023 - Dec 2023',
            tool: 'JavaScript, Vue.js, Express.js, Heroku',
            link: '',
            image: Kung_Fu_Tea,
            description: 'For the Kung Fu Tea POS system project, I developed a mock POS system as a web application\
            using Agile methodologies. The system was built with Vue.js for the front end and Express.js for the back\
            end, integrating various existing APIs to address the challenges of the POS system’s prototype.'
        },
    ]
    
    return (
        <Container maxWidth='md'>
            <Box>
                <Typography variant='h4' sx={{ margin: 2 }}>Projects</Typography>
                <Stack>
                    {proj.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 4,
                            margin: 2
                        }}>
                            <Box component='img' src={index.image} sx={{ display: "flex", marginX: 'auto', maxHeight: '400px', maxWidth: '100%', padding: 1 }}></Box>
                            <Divider sx={{ padding: 1}}></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', marginY: 1}}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography variant='h6'>{index.title}</Typography>
                                    {index.link != '' && <Link variant='h6' href={index.link} underline='hover'>[link]</Link>}
                                </Box>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant='p' sx={{ lineHeight: 1.6 }}>{index.description}</Typography>
                            <Typography sx={{ marginTop: 3 }}>{index.tool}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}

export default Projects;