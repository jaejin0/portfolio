import { useState, useEffect } from 'react';
import { Container, Typography, Box, Card, Link, Grow, Stack, Avatar, ImageList, ImageListItem } from '@mui/material'

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
    const itemData = [jaejin1, jaejin2, jaejin3, jaejin4, jaejin5, jaejin6, jaejin7, jaejin8, jaejin9]
    const valueList = ['Hard working', 'Passionate', 'Creative', 'Dedicated'];
    const colorList = ['#4285F4', '#34A853', '#FBBC05', '#EA4335'];
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(true);

    function timer() {
        setTimeout(() => {
            setChecked(false)
        }, 4000)
        setTimeout(() => {
            if (index !== valueList.length - 1) {
                setIndex(index + 1);
            }
            else {
                setIndex(0);
            }
        }, 4500);
        setTimeout(() => {
            setChecked(true)
        }, 5000)
    };
    useEffect(() => {
        timer();
    }, [index]);
    
    return (
        <Container maxWidth='md'>
            <Card
                variant="outlined"
                sx={{
                    display: 'flex',
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
                <Typography variant='h3'>I'm a </Typography>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Typography variant='h3' color={colorList[index]}>{valueList[index]}</Typography>
                </Grow>
                <Typography variant='h3'>programmer</Typography>
            </Card>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Profile</Typography>
                <Avatar
                    alt="Jaejin Cha"
                    src={jaejin}
                    sx={{ width: 400, height: 400, margin: 4 }}
                />
                <Box sx={{ margin: 3}}>
                    <Typography variant='h5' sx={{ fontWeight: '500', marginBottom: 1 }}>Jaejin Cha</Typography>
                    <Typography variant='h6'>Computer Science Master's student @ Texas A&M University</Typography>
                </Box>
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Photos</Typography>
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
            <Box sx={{ marginTop: 20 }}>
                <Typography variant='h4'>Contacts</Typography>
                <Card sx={{ maxWidth: 400, padding: 4, marginY: 6, marginX: 'auto'}}>
                    <Stack spacing={1}>
                        <Typography variant='h6'>jaejin0109@gmail.com</Typography>
                        <Typography variant='h6'>(832) 745-9922</Typography>
                        <Link variant='h6' underline="hover" color='textPrimary' href='https://www.linkedin.com/in/jaejincha/'>https://www.linkedin.com/in/jaejincha/</Link>
                        <Link variant='h6' underline="hover" color='textPrimary' href='https://github.com/jaejin0'>https://github.com/jaejin0</Link>
                    </Stack>
                </Card>
            </Box>
            <Box sx={{ marginTop: 20, marginX: 'auto'  }}>
                <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center' }}>This portfolio is created by using React and MUI</Typography>
            </Box>
        </Container>
    );
}

export default AboutMe;