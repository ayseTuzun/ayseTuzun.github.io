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

export default function Stephanienbad() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 2;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item className={classes.title}>
                    {t("stephanienbad_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("stephanienbad_p_1")}
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item className={classes.text2} xs={7}>
                    {t("stephanienbad_p_2")}
                </Grid>
                <Grid item xs={5}>
                    <img src={'images/stephanienbad_1.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("stephanienbad_p_3")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("stephanienbad_p_4")}
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={7}>
                    <img src={'images/stephanienbad_2.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={5} className={classes.text2}>
                    {t("stephanienbad_p_5")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/stephanienbad_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text2}>
                {t("stephanienbad_p_6")}
            </Grid>
            <Grid item>
                <img src={'images/stephanienbad_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item className={classes.text2} xs={7}>
                    {t("stephanienbad_p_7")}
                </Grid>
                <Grid item xs={5}>
                    <img src={'images/stephanienbad_5.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/stephanienbad_6.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}