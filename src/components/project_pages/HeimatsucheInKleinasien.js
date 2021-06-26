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
        fontSize: '16px',
        color: '#301A1A',
        fontStyle: 'italic'
    },
    text2: {
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        color: '#301A1A',
    },
    title1: {
        fontFamily: 'Coolvetica',
        fontSize: '46px',
        color: '#301A1A',
    },
    title2: {
        fontFamily: 'Coolvetica',
        fontSize: '46px',
        color: '#301A1A',
        lineHeight: '46px',
        marginBottom: 20
    }
})

export default function HeimatsucheInKleinasien() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item className={classes.title1}>
                    {t("heimatsuche_in_kleinasien_title_1")}
                </Grid>
                <Grid item className={classes.title2}>
                    {t("heimatsuche_in_kleinasien_title_2")}
                </Grid>
                <Grid item className={classes.text2}>
                    {t("heimatsuche_in_kleinasien_p_1")}
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("heimatsuche_in_kleinasien_p_2")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("heimatsuche_in_kleinasien_p_3")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("heimatsuche_in_kleinasien_p_4")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("heimatsuche_in_kleinasien_p_5")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("heimatsuche_in_kleinasien_p_6")}
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_1.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_5.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_6.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text1}>
                <span>{t("heimatsuche_in_kleinasien_p_7")}<br/></span>
                <span>{t("heimatsuche_in_kleinasien_p_8")}</span>
            </Grid>
            <Grid item>
                <img src={'images/stadtmaeuse_7.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}