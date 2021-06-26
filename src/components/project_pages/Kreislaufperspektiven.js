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
    title: {
        fontFamily: 'Coolvetica',
        fontSize: '46px',
        color: '#301A1A',
    },
})

export default function Kreislaufperspektiven() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item direction="column">
                <Grid item className={classes.title}>
                    {t("kreislaufperspektiven_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("kreislaufperspektiven_p_1")}
                </Grid>
            </Grid>
            <Grid item className={classes.text1}>
                {t("kreislaufperspektiven_p_2")}
            </Grid>
            <Grid item className={classes.text1}>
                {t("kreislaufperspektiven_p_3")}
            </Grid>
            <Grid item className={classes.text1}>
                <span>{t("kreislaufperspektiven_p_4")}<br/></span>
                <span>{t("kreislaufperspektiven_p_5")}</span>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_1.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_2.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_3.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_4.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_5.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={6}>
                    <img src={'images/kreislaufperspektiven_6.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
        </Grid>
    )
}