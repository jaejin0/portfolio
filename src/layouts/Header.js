import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Box, Button, Slide, useScrollTrigger } from "@mui/material";

function Header() {
    return (
        <HideOnScroll>
            <AppBar position='sticky' sx={{ marginBottom: 4 }}>
                <Container>
                    <Toolbar sx={{ display: 'flex' }}>
                        <Button component={Link} to='/' sx={{ flexGrow: 3, display: { xs: 'none', sm: 'block', color: '#fff' }}} disableRipple>
                            <Typography sx={{ fontFamily: 'Monospace', letterSpacing: 4 }}>Jaejin</Typography>
                        </Button>
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
        </HideOnScroll>
    );
}

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

export default Header;