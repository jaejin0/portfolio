import { Container, Typography, Box, Card } from '@mui/material'

function AboutMe() {
    return (
        <Container>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 3,
                    marginTop: 30,
                }}
            >
                <Typography variant='h3' color={'#4285F4'}>Hard working</Typography>
                <Typography variant='h3' color={'#34A853'}>Passionate</Typography>
                <Typography variant='h3' color={'#FBBC05'}>Creative</Typography>
                <Typography variant='h3' color={'#EA4335'}>Dedicated</Typography>
            </Box>
            <Box sx={{ marginTop: 20 }}>
                <Typography>I run every morning and exercise</Typography>
                <Typography>I like to read books</Typography>
                <Typography>I like to cook and invite friends over</Typography>
            </Box>
            
            <Card sx={{ minWidth: 275, marginTop: 20 }}>
                <Typography>Contacts</Typography>
                <Typography>jaejin0109@gmail.com</Typography>
                <Typography>(832) 745-9922</Typography>
            </Card>
        </Container>
    );
}

export default AboutMe;