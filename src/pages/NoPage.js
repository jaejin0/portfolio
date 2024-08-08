import { Container, Typography } from "@mui/material";

function NoPage() {
    return (
        <Container maxWidth='md'>
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', marginY: 46}}>Page fault 404 error</Typography>
        </Container>
    );
}

export default NoPage;