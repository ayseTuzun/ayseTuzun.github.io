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
    "2x2": {
        paddingLeft: 20
    },
    "1x1": {
        paddingBottom: 10,
        paddingRight: 20
    }
})

export default function Alltagshaus() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid item container direction="column">
                <Grid item container>
                    <Grid item container direction="column" className={classes["1x1"]} xs={7}>
                        <Grid item className={classes.title}>
                            {t("alltagshaus_title")}
                        </Grid>
                        <Grid item className={classes.text1}>
                            {t("alltagshaus_p_1")}
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={'images/alltagshaus_1.jpg'} className={classes.img}/>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={7}>
                        <img src={'images/alltagshaus_2.jpg'} className={classes.img}/>
                    </Grid>
                    <Grid item container direction="column" justify="flex-end" xs={5} className={classes.text2}>
                        <Grid item className={classes["2x2"]}>
                            {t("alltagshaus_p_2")}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={7}>
                    <img src={'images/alltagshaus_3.jpg'} className={classes.img}/>
                </Grid>
                <Grid item container direction="column" justify="space-between" xs={5}>
                    <Grid item>
                        <img src={'images/alltagshaus_4.jpg'} className={classes.img}/>
                    </Grid>
                    <Grid item>
                        <img src={'images/alltagshaus_5.jpg'} className={classes.img}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item xs={7} className={classes.text2}>
                    {t("alltagshaus_p_3")}
                </Grid>
                <Grid item xs={5} className={classes.text2}>
                    {t("alltagshaus_p_4")}
                </Grid>
            </Grid>
            <Grid item>
                <img src={'images/alltagshaus_6.jpg'} className={classes.img}/>
            </Grid>
        </Grid>
    )
}