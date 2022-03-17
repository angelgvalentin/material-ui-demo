import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import "./App.css";

import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button,
} from "@mui/material";
import { GridViewOutlined, PhotoCamera } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: theme.palette.background.paper,
        // padding: theme.spacing(8, 0, 6),
    },

    cardGrid: {
        padding: "20px 0",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%",
    },
    CardContent: {
        flexGrow: 1,
    },
    footer: {
        padding: "40px 0",
    },
}));

const App = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped((prevState) => ({ isFlipped: !prevState.isFlipped }));
    };

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">FlashPrep </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Flash Cards
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, dolores minus facere at, error dolore
                            facilis nam repellat sit eum laudantium deserunt?
                            Blanditiis possimus soluta est architecto ea
                            reprehenderit facilis?
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <div>
                            <CardFront />
                        </div>

                        {/* <div>
                                This is the back of the card.
                                <CardBack key="back" />
                                <button onClick={handleClick}>
                                    Click to flip
                                </button>
                            </div> */}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime
                </Typography>
            </footer>
        </>
    );
};

export default App;
