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

export default function NoFAQ() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 3;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item direction="column">
                <Grid item className={classes.title}>
                    {t("no_faq_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("no_faq_p_1")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_1.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_3.jpg'} className={classes.img}/>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={6}>
                    <img src={'images/noFAQ_4.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={6}>
                    <img src={'images/noFAQ_5.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={6}>
                    <img src={'images/noFAQ_6.jpg'} className={classes.img}/>
                </Grid>
                <Grid item xs={6}>
                    <img src={'images/noFAQ_7.jpg'} className={classes.img}/>
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_8.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_9.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/noFAQ_10.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}