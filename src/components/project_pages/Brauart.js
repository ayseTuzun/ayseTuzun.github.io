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
    }
})

export default function Brauart() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 2;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item container direction="column" xs={7}>
                    <Grid item className={classes.title}>
                        {t("brauart_title")}
                    </Grid>
                    <Grid item className={classes.text1}>
                        {t("brauart_p_1")}
                    </Grid>
                    <Grid item className={classes.text2}>
                        <br/>{t("brauart_p_2")}
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <img src={'images/brauart_1.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("brauart_p_3")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("brauart_p_4")}
            </Grid>
            <Grid container item spacing={horizontalSpacing}>
                <Grid item xs={8}>
                    <img src={'images/brauart_2.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={4}>
                    <img src={'images/brauart_3.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item className={classes.text2}>
                {t("brauart_p_5")}
            </Grid>
            <Grid item>
                <img src={'images/brauart_4.jpg'} className={classes.img}/>
            </Grid>
            <Grid item className={classes.text2}>
                {t("brauart_p_6")}
            </Grid>
            <Grid item>
                <img src={'images/brauart_5.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}