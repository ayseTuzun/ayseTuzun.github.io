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

export default function Ichbineinbelfaster() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item className={classes.title}>
                    {t("ich_bin_ein_belfaster_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("ich_bin_ein_belfaster_p_1")}
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_2")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_3")}
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item container direction="column" xs={7}>
                    <Grid item className={classes.text2}>
                        {t("ich_bin_ein_belfaster_p_4")}
                    </Grid>
                    <Grid item className={classes.text2}>
                        <br/>{t("ich_bin_ein_belfaster_p_5")}
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <img src={'images/ich_bin_ein_belfaster_1.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_6")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_7")}
            </Grid>
            <Grid item>
                <img src={'images/ich_bin_ein_belfaster_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/ich_bin_ein_belfaster_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/ich_bin_ein_belfaster_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/ich_bin_ein_belfaster_5.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_8")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_9")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_10")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_11")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_12")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("ich_bin_ein_belfaster_p_13")}
            </Grid>
        </Grid>
    )
}