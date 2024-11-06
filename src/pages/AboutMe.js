import { useState, useEffect } from 'react';
import { Container, Typography, Box, Card, Link, Grow, Stack, Avatar, ImageList, ImageListItem, Divider } from '@mui/material'

import jaejin from '../assets/jaejin.jpeg'

import jaejin1 from '../assets/jaejin1.jpeg'
import jaejin2 from '../assets/jaejin2.jpeg'
import jaejin3 from '../assets/jaejin3.jpeg'
import jaejin4 from '../assets/jaejin4.jpeg'
import jaejin5 from '../assets/jaejin5.jpeg'
import jaejin6 from '../assets/jaejin6.jpeg'
import jaejin7 from '../assets/jaejin7.jpeg'
import jaejin8 from '../assets/jaejin8.jpeg'
import jaejin9 from '../assets/jaejin9.jpeg'

function AboutMe() {
    const title = ['master\'s student', 'software engineer', 'AI agent researcher']
    const programmingLanguages = ['Python', 'C++', 'JavaScript', 'Ruby']
    const frameworks = ['PyTorch', 'ROS', 'React.js', 'Rails', 'Express.js', 'Vue.js']
    const developerTools = ['Git', 'GitHub', 'Vim', 'Linux', 'Jira']
    const hobbies = ['work-out', 'cooking', 'watching UFC', 'listening to Podcast']
    const professionalInterest = ['autonomous vehicle', 'multi-robots', 'reinforcement learning', 'data pipeline']
    const externalLinks = [
        'https://github.com/jaejin0',
        'https://www.linkedin.com/in/jaejincha/',
        // Youtube,
	// Medium,
    ]
    const phone_number = '832-745-9922'
    const email = 'jaejin0109@gmail.com'
    // resume = 'link' or pdf path
    const residency = 'Houston, TX, USA'
    const citizenship = 'permanent resident of United States, citizen of South Korea'

    // paragraphs
    const whoAmI = "breif introduction about myself. How I will introduce myself during career fair"
    const whyThis = "breif explanation about why I am doing the {professionalInterest}"
    
    // website theme = black, #FABAoA, #fee2c8
    
    

    const itemData = [jaejin1, jaejin2, jaejin3, jaejin4, jaejin5, jaejin6, jaejin7, jaejin8, jaejin9]

    return (
        <Container maxWidth='md'>
	    <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Profile</Typography>
                <Avatar
                    alt="Jaejin Cha"
                    src={jaejin}
                    sx={{ width: '80%', height: '80%', maxWidth: 400, maxHeight: 400, marginY: 4, marginX: 'auto' }}
                />
                <Box sx={{ margin: 4 }}>
                    <Typography variant='h5' sx={{ fontWeight: '500', marginBottom: 3 }}>Jaejin Cha | Software Engineer</Typography>
                    <Typography variant='h6' sx={{ marginBottom: 1 }}>I&apos;m focusing on Machine Learning, Robotics, and Multi-agent System.</Typography>
                    <Typography variant='h6'>Master's in Computer Science @ Texas A&M University, researching in Multi-Robot Systems</Typography>
                </Box>
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Skills</Typography>
                <Box sx={{ margin: 4 }}>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6' sx={{ marginBottom: 1 }}>Languages:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills list={programmingLanguages}></Skills>
                        </Box>
                    </Card>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6' sx={{ marginBottom: 1 }}>Frameworks:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills list={frameworks}></Skills>
                        </Box>
                    </Card>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6'>Developer Tools:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills list={developerTools}></Skills>
                        </Box>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Photos</Typography>
                <Box sx={{ padding: 1 }}>
                    <ImageList sx={{ width: '100%' }} cols={3}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.id}>
                        <img
                            src={item}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </Box>
                
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Contacts</Typography>
                <Card sx={{ width: 300, maxWidth: '90%', padding: 5, marginY: 6, marginX: 'auto'}}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>jaejin0109@gmail.com</Typography>
                        <Typography variant='h6'>(832) 745-9922</Typography>
                        <Link variant='h6' underline="hover" color='textPrimary' href='https://www.linkedin.com/in/jaejincha/'>linkedin.com/in/jaejincha/</Link>
                        <Link variant='h6' underline="hover" color='textPrimary' href='https://github.com/jaejin0'>github.com/jaejin0</Link>
                    </Stack>
                </Card>
            </Box>
            <Box sx={{ marginTop: 20, marginX: 'auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Typography variant='h6' paddingRight={1}>This portfolio is created using</Typography>
                <Typography variant='h6'>React and MUI</Typography>
            </Box>
        </Container>
    );
}

function Skills(props) {
    const list = props.list
    return (
        <Box marginY={1}>
            {list.map((index) => (
                <Box key={index.id}>
                    <Typography variant='h6' marginY={1}>{index}</Typography>
                </Box>
            ))}  
        </Box>
    );
}

export default AboutMe;
