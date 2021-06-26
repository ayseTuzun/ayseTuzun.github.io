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

export default function Typography() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item direction="column">
                <Grid item className={classes.title}>
                    {t("typography_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("typography_p_1")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/typografie_1.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/typografie_2.jpg'} className={classes.img}/>
            </Grid>
            <Grid item>
                <img src={'images/typografie_3.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}