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
    const progLangProf = ['Python', 'JavaScript', 'C++']
    const progLangComp = ['Java', 'TypeScript']
    const frameworkProf = ['React', 'Node', 'Express', 'PyTorch']
    const frameworkComp = ['Spring Boot', 'Flask', 'Next', 'Vue']
    const developerTools = ['Git', 'GitHub', 'Linux', 'VS Code', 'Jira']
    const developerToolsHalf = Math.ceil(developerTools.length / 2)

    const itemData = [jaejin1, jaejin2, jaejin3, jaejin4, jaejin5, jaejin6, jaejin7, jaejin8, jaejin9]
    const valueList = ['Hard working', 'Passionate', 'Creative', 'Dedicated'];
    const colorList = ['#4285F4', '#34A853', '#FBBC05', '#EA4335'];
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(true);

    // function timer() {
    //     setTimeout(() => {
    //         setChecked(false)
    //     }, 4000)
    //     setTimeout(() => {
    //         if (index !== valueList.length - 1) {
    //             setIndex(index + 1);
    //         }
    //         else {
    //             setIndex(0);
    //         }
    //     }, 4500);
    //     setTimeout(() => {
    //         setChecked(true)
    //     }, 5000)
    // };
    // useEffect(() => {
    //     timer();
    // }, [index]);
    let time
    function timer() {
        time = setTimeout(() => {
            setTimeout(() => { // appear
                setChecked(true)
            }, 0)
            setTimeout(() => { // disappear
                setChecked(false)
            }, 3000)
            setTimeout(() => {
                if (index !== valueList.length - 1) {
                    setIndex(index + 1);
                }
                else {
                    setIndex(0);
                }
            }, 3200)
        }, 3500);
    };
    useEffect(() => {
        clearTimeout(time)
        timer();
    }, [index]);
    
    return (
        <Container maxWidth='md'>
            <Card
                variant="outlined"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    gap: 2,
                    marginTop: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: 8,
                }}
            >
                <Typography variant='h3' sx={{ marginLeft: '18px' }}>I'm a </Typography>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Typography variant='h3' color={colorList[index]} sx={{ marginX: 'auto' }}>{valueList[index]}</Typography>
                </Grow>
                <Typography variant='h3' sx={{ marginRight: '18px' }}>programmer</Typography>
            </Card>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Profile</Typography>
                <Avatar
                    alt="Jaejin Cha"
                    src={jaejin}
                    sx={{ width: '80%', height: '80%', maxWidth: 400, maxHeight: 400, marginY: 4, marginX: 'auto' }}
                />
                <Box sx={{ margin: 4 }}>
                    <Typography variant='h5' sx={{ fontWeight: '500', marginBottom: 1 }}>Jaejin Cha</Typography>
                    <Typography variant='h6'>Computer Science Master's student @ Texas A&M University</Typography>
                </Box>
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Skills</Typography>
                <Box sx={{ margin: 4 }}>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6' sx={{ marginBottom: 1 }}>Languages:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills title='proficient' list={progLangProf}></Skills>
                            <Skills title='competent' list={progLangComp}></Skills>
                        </Box>
                    </Card>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6' sx={{ marginBottom: 1 }}>Frameworks:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills title='proficient' list={frameworkProf}></Skills>
                            <Skills title='competent' list={frameworkComp}></Skills>
                        </Box>
                    </Card>
                    <Card sx={{ margin: 2, padding: 3 }}>
                        <Typography variant='h6'>Developer Tools:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                            <Skills list={developerTools.slice(0, developerToolsHalf)}></Skills>
                            <Skills list={developerTools.slice(developerToolsHalf, )}></Skills>
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
    const title = props.title
    const list = props.list
    console.log(title)
    return (
        <Box marginY={1}>
            {title !== undefined && <Typography variant='h6'>({title})</Typography>}
            {list.map((index) => (
                <Box key={index.id}>
                    <Typography variant='h6' marginY={1}>{index}</Typography>
                </Box>
            ))}  
        </Box>
    );
}

export default AboutMe;