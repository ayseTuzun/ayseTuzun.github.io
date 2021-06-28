import {Grid, Link, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    root: {
        width: '800px',
        margin: '0 auto',
        minWidth: '800px',
        marginTop: 60,
        marginBottom: 20,
    },
    img: {
        height: '100%',
        width: '100%'
    },
    img2: {
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

export default function Lauf() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item direction="column">
                <Grid container item spacing={horizontalSpacing}>
                    <Grid container item direction="column" xs={7}>
                        <Grid item className={classes.title}>
                            {t("lauf_title")}
                        </Grid>
                        <Grid item className={classes.text1}>
                            {t("lauf_p_1")}
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={'images/lauf_1.jpg'} className={classes.img}/>
                    </Grid>
                </Grid>
                <Grid item className={classes.text1}>
                    {t("lauf_p_2")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/lauf_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_3")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_4")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_5")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_6")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_7")}
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item container direction="column" justify="center" xs={7}>
                    <Grid item>
                        <img src={'images/lauf_3.jpg'} className={classes.img2}/>
                    </Grid>
                </Grid>
                <Grid item className={classes.text2} xs={5}>
                    {t("lauf_p_8")}
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item container direction="column" justify="center" xs={7}>
                    <Grid item>
                        <img src={'images/lauf_4.jpg'} className={classes.img2}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={5}>
                    <Grid item className={classes.text2}>
                        {t("lauf_p_9")}
                    </Grid>
                    <Grid item className={classes.text2}>
                        <br/>{t("lauf_p_10")}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={7}>
                    <img src={'images/lauf_5.jpg'} className={classes.img2}/>
                </Grid>
                <Grid item className={classes.text2} xs={5}>
                    {t("lauf_p_11")}
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("lauf_p_12")}
            </Grid>
            <Grid item>
                <span className={classes.text2}>{t("lauf_p_13")}<br/></span>
                <Link href="https://www.instagram.com/lauftheearth/" target="_blank" rel="noreferrer" className={classes.text2}>{t("lauf_p_14")}</Link>
            </Grid>
            <Grid item>
                <img src={'images/lauf_6.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}