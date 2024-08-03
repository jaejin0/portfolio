import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material";

function Header() {
    return (
        <AppBar position='sticky' sx={{ marginBottom: 4 }}>
            <Container>
                <Toolbar>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 3, display: { xs: 'none', sm: 'block', color: '#fff' } }}
                    >
                        <Button
                            component={Link} to='/' sx={{ color: '#fff'}} disableRipple>
                            Jaejin
                        </Button>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to='/' sx={{ color: '#fff'}}>About Me</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to='/education' sx={{ color: '#fff'}}>Education</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to='/experience' sx={{ color: '#fff'}}>Experience</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to='/projects' sx={{ color: '#fff'}}>Projects</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;