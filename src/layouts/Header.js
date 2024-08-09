import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container, Button, Slide, useScrollTrigger } from "@mui/material";

function Header() {
    return (
        <HideOnScroll>
            <AppBar position='sticky' sx={{ marginBottom: 4 }}>
                <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Button component={Link} to='/' sx={{ flexGrow: 1, display: { sm: 'block', color: '#fff' }}} disableRipple>
                        <Typography sx={{ fontFamily: 'Monospace', fontSize: 18, letterSpacing: 4 }}>Jaejin</Typography>
                    </Button>
                    <Box sx={{ display: 'flex', marginX: 'auto' }}>
                        <Box sx={{ display: { sm: 'block' } }}>
                            <Button component={Link} to='/portfolio/' sx={{ color: '#fff', fontSize: '13px'}}>About Me</Button>
                        </Box>
                        <Box sx={{ display: { sm: 'block' } }}>
                            <Button component={Link} to='/portfolio/education' sx={{ color: '#fff', fontSize: '13px'}}>Education</Button>
                        </Box>
                        <Box sx={{ display: { sm: 'block' } }}>
                            <Button component={Link} to='/portfolio/experience' sx={{ color: '#fff', fontSize: '13px'}}>Experience</Button>
                        </Box>
                        <Box sx={{ display: { sm: 'block' } }}>
                            <Button component={Link} to='/portfolio/projects' sx={{ color: '#fff', fontSize: '13px'}}>Projects</Button>
                        </Box>
                    </Box>
                </Toolbar>
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