import { AppBar, Container, Toolbar, Typography, Paper, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Essence Image Gallery
                    </Typography>
                    <Button color="inherit">HOME</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Paper
                    elevation={3}
                    sx={{ height: 200, textAlign: "center", marginTop: "2rem", display: "flex", alignItems: "center", backgroundColor: "#DDDDD6", }}
                    
                >
                    <Grid item
                        container
                        direction="column"
                        display="flex"
                        justify="center">
                        <Typography variant="h6" component="h6" align="center">
                            Welcome to Essence Image Gallary
                        </Typography>
                        <Typography variant="p" component="p" >
                            You can search and find images here....
                        </Typography>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}

export default Header;