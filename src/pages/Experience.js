import { Container, Card, Box, Typography, Stack, Divider, Grid, Link } from "@mui/material";

import Standard from '../assets/Standard.png'
import AggieCodingClub from '../assets/Aggie_Coding_Club.jpg'
import AggieResearch from '../assets/Aggie_Research_Program.png'

function Experience() {
    const exp = [
        {
            title: 'Apps for Good program @ TeamUp',
            period: 'May 2024 - July 2024',
            tool: 'Java, TypeScript, Next.js, Spring Boot',
            link: 'https://teamup.org/apps-for-good/',
            image: 'https://teamup.org/wp-content/uploads/2024/02/appsforgood_long.png',
            description: 'I participated in Apps for Good program at TeamUp to help college students'
        },
        {
            title: 'NSF REU program @ University of Delaware',
            period: 'May 2023 - Aug 2023',
            tool: 'Python, PyTorch, PyGame',
            link: 'https://mrsec.udel.edu/undergraduate-education-and-outreach/reu/',
            image: 'https://teamup.org/wp-content/uploads/2024/02/appsforgood_long.png',
            description: 'I participated in Apps for Good program at TeamUp to help college students'
        },
        {
            title: 'Aggie Research Scholars program @ Texas A&M University',
            period: 'Aug 2022 - May 2023',
            tool: 'Python, Ubuntu, Bash, HDFS',
            link: 'https://aggieresearch1.wpengine.com/undergraduates/',
            image: AggieResearch,
            description: 'I participated in Apps for Good program at TeamUp to help college students'
        }
    ]

    const org = [
        {
            title: 'Computer Vision Team @ TAMU RoboMasters',
            period: 'Aug 2023 - May 2024',
            tool: 'Python, OpenCV',
            link: 'https://tamurobomasters.com/',
            image: Standard,
            description: 'I was selected among 15 students to be a member of Computer Vision Team\
             of TAMU RoboMasters.'
        },
        {
            title: 'Project Manager @ Aggie Coding Club',
            period: 'Jan 2022 - May 2022',
            tool: 'React.js, JavaScript',
            link: 'https://www.aggiecodingclub.com/',
            image: AggieCodingClub,
            description: 'I was selected among 15 students to be a member of Computer Vision Team\
             of TAMU RoboMasters.'
        }
    ]

    return (
        <Container maxWidth='md'>
            <Box>
                <Typography variant='h4' sx={{ margin: 2 }}>Experience</Typography>
                <Stack>
                    {exp.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 3,
                            margin: 2
                        }}>
                            <Box component='img' src={index.image} sx={{ width: '100%' }}></Box>
                            <Divider></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography variant='h6'>{index.title}</Typography>
                                    <Link variant='h6' href={index.link} underline='hover'>[link]</Link>
                                </Box>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant='p'>{index.description}</Typography>
                            <Typography>{index.tool}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>
            <Box>
                <Typography variant='h4'>Student Organization</Typography>
                <Stack>
                    {org.map((index) => (
                        <Card key={index.id} sx={{
                            padding: 3,
                            margin: 2
                        }}>
                            <Box component='img' src={index.image} sx={{ width: '100%' }}></Box>
                            <Divider></Divider>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Typography variant='h6'>{index.title}</Typography>
                                    <Link variant='h6' href={index.link} underline='hover'>[link]</Link>
                                </Box>
                                <Typography>{index.period}</Typography>
                            </Grid>
                            <Typography variant='p'>{index.description}</Typography>
                            <Typography>{index.tool}</Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}

export default Experience;