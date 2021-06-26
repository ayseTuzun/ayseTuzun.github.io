import {Grid, Link, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#301A1A',
        height: '100vh',
        paddingBottom: '10vh',
        paddingRight: '5vh',
        minHeight: '40vw'
    },
    text1: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        //fontSize: '72px',
        fontSize: 'min(max(3vw, 1rem), 6.5rem);',
        fontWeight: 900,
        color: 'white',
    },
    text2: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        //fontSize: '64px',
        fontSize: 'min(max(2.5vw, 1rem), 6.5rem);',
        color: 'white',
        //backgroundColor: 'green',
        //maxWidth: '900px',
    },
    text3: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        //fontSize: '96px',
        fontSize: 'min(max(4vw, 1rem), 6.5rem);',
        color: 'white',
        //backgroundColor: 'green',
        //maxWidth: '900px',
    },
    text4: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        //fontSize: '48px',
        fontSize: 'min(max(2vw, 1rem), 6.5rem);',
        color: 'white',
        //backgroundColor: 'green',
        //maxWidth: '900px',
    },
    text5: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        //fontSize: '64px',
        fontSize: 'min(max(2.5vw, 1rem), 6.5rem);',
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic'
        //maxWidth: '900px',
    },
})


export default function Summary() {
    const classes = useStyles();
    const { t } = useTranslation();

    return(
        <Grid container item direction="column" justify="flex-end" alignItems="stretch" className={classes.root}>
            <Grid item className={classes.text1}>
                {t("summary_line_1")}
            </Grid>
            <Grid item className={classes.text1}>
                {t("summary_line_2")}
            </Grid>
            <Grid item className={classes.text2}>
                {t("summary_line_3")}
            </Grid>
            <Grid item className={classes.text3}>
                {t("summary_line_4")}
            </Grid>
            <Grid item className={classes.text4} style={{marginBottom: '3vw'}}>
                {t("summary_line_5")}
            </Grid>
            <Grid item className={classes.text4}>
                {t("summary_line_6")}
            </Grid>
            <Grid item className={classes.text5}>
                <Link href="mailto:tuzun.ayse@gmail.com" target="_blank" rel="noreferrer" className={classes.text5}>{t("summary_line_7")}</Link>
            </Grid>
            <Grid item className={classes.text5}>
                <Link href="https://www.linkedin.com/in/ayse-tuzun/" target="_blank" rel="noreferrer" className={classes.text5}>{t("summary_line_8")}</Link>
            </Grid>
        </Grid>
    )
}

