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

export default function Rathaus() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item className={classes.title}>
                    {t("rathaus_am_ettlinger_tor_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("rathaus_am_ettlinger_tor_p_1")}
                </Grid>
            </Grid>
            <Grid item>
                <span className={classes.text3}>{t("rathaus_am_ettlinger_tor_p_2")}<br/></span>
                <span className={classes.text2}>{t("rathaus_am_ettlinger_tor_p_3")}</span>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item className={classes.text2} xs={7}>
                    {t("rathaus_am_ettlinger_tor_p_4")}
                </Grid>
                <Grid item xs={5}>
                    <img src={'images/rathaus_1.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={7}>
                    <img src={'images/rathaus_2.jpg'} className={classes.img}/>
                </Grid>
                <Grid item container direction="column" justify={"flex-end"} xs={5}>
                    <Grid item className={classes.text2}>{t("rathaus_am_ettlinger_tor_p_5")}</Grid>
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/rathaus_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/rathaus_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item className={classes.text2} xs={7}>
                    {t("rathaus_am_ettlinger_tor_p_6")}
                </Grid>
                <Grid item className={classes.text2} xs={5}>
                    {t("rathaus_am_ettlinger_tor_p_7")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/rathaus_5.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/rathaus_6.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}