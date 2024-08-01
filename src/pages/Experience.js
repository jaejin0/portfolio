import { Container, Card, Box, Typography } from "@mui/material";

function Experience() {
    return (
        <Container>
            <Box sx={{
                width: '100%',
                display: 'grid',
                padding: 3,
                gap: 2,
            }}>
                <Card>
                    <Typography>REU Research Intern @ Unviersity of Delaware</Typography>
                    <Typography>Through this program, I researched in Autonomous Driving</Typography>
                </Card>
                <Card>HEHEHHE</Card>
            </Box>
        </Container>
    );
}

export default Experience;