import {Grid, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    root: {
        width: '800px',
        margin: '0 auto',
        minWidth: '800px',
        marginTop: 60,
        marginBottom: 20
    },
    img: {
        height: '100%',
        width: '100%'
    },
    text1: {
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        color: '#301A1A',
    },
    text2: {
        fontFamily: 'Source Sans Pro',
        fontSize: '17px',
        color: '#301A1A',
    },
    text3: {
        fontFamily: 'Source Sans Pro',
        fontSize: '17px',
        color: '#301A1A',
        fontStyle: 'italic'
    },
    title: {
        fontFamily: 'Coolvetica',
        fontSize: '46px',
        color: '#301A1A',
    },
})

export default function Firstplaces() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item className={classes.title}>
                    {t("first_places_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("first_places_p_1")}
                </Grid>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={7}>
                    <img src={'images/first_places_1.jpg'} className={classes.img}/>
                </Grid>
                <Grid item container direction="column" xs={5}>
                    <Grid item className={classes.text2}>
                        {t("first_places_p_2")}
                    </Grid>
                    <Grid item className={classes.text2}>
                        <br/>{t("first_places_p_3")}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("first_places_p_4")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("first_places_p_5")}
            </Grid>
            <Grid item>
                <img src={'images/first_places_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/first_places_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/first_places_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/first_places_5.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/first_places_6.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/first_places_7.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text2}>
                {t("first_places_p_6")}
            </Grid>
        </Grid>
    )
}