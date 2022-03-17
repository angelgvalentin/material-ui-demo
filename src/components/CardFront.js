import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

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

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: theme.palette.background.paper,
        // padding: theme.spacing(8, 0, 6),
    },

    cardGrid: {
        padding: "60px 0",
        width: "80%",
    },
    card: {
        height: "100%",
        width: "300px",
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardFront = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (isFlipped === false) {
            setIsFlipped(true);
        } else {
            setIsFlipped(false);
        }
    };

    const classes = useStyles();

    return (
        <div>
            <>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container justifyContent="center" gap="20px">
                        {cards.map((card) => (
                            <>
                                <ReactCardFlip
                                    isFlipped={isFlipped}
                                    flipDirection="vertical"
                                    spacing={4}
                                >
                                    <div>
                                        <Grid
                                            item
                                            spacing={4}
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key="front"
                                        >
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={
                                                        classes.cardMedia
                                                    }
                                                    image="https://source.unsplash.com/random"
                                                    title="Image tite"
                                                />
                                                <CardContent
                                                    className={
                                                        classes.cardContent
                                                    }
                                                >
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                    >
                                                        Heading
                                                    </Typography>
                                                    <Typography>
                                                        This is a media card.
                                                        Lorem ipsum dolor sit
                                                        amet
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        size="small"
                                                        color="primary"
                                                    >
                                                        View
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color="primary"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color="primary"
                                                        onClick={handleClick}
                                                    >
                                                        Flip
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </div>

                                    <div>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key="back"
                                        >
                                            <Card className={classes.card}>
                                                <CardContent
                                                    className={
                                                        classes.cardContent
                                                    }
                                                >
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                    >
                                                        Heading
                                                    </Typography>
                                                    <Typography>
                                                        This is a media card.
                                                        Lorem ipsum dolor sit
                                                        amet
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button
                                                        size="small"
                                                        color="primary"
                                                    >
                                                        View
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color="primary"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        color="primary"
                                                        onClick={handleClick}
                                                    >
                                                        Flip Card
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                        {/* <button >
                                            Click to flip
                                        </button> */}
                                    </div>
                                </ReactCardFlip>
                            </>
                        ))}
                    </Grid>
                </Container>
            </>
        </div>
    );
};

export default CardFront;
