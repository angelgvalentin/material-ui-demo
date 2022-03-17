import React from "react";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardBack = () => {
    const classes = useStyles();

    return (
        <div>
            <>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. Lorem ipsum
                                            dolor sit amet
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                        >
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </>
        </div>
    );
};

export default CardBack;
