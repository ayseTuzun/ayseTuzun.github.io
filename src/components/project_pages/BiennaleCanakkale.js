import {Grid, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    root: {
        width: '800px',
        margin: '0 auto',
        minWidth: '800px',
        marginTop: 60,
        marginBottom: 20,
        height: "fit-content",
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

export default function BiennaleCanakkale() {
    const classes = useStyles();
    const { t } = useTranslation();
    const horizontalSpacing = 4;

    return (
        <Grid container item direction="column" className={classes.root}>
            <Grid item className={classes.title}>
                {t("biennale_canakkale_title_1")}
            </Grid>
            <Grid item container spacing={horizontalSpacing}>
                <Grid item container direction="column" xs={7} justify="flex-start">
                    <Grid item className={classes.text1}>
                        {t("biennale_canakkale_p_1")}
                    </Grid>
                </Grid>
                <Grid container item direction="column" xs={5}>
                    <Grid item>
                        <img src={'images/biennale_canakkale_1.jpg'} className={classes.img}/>
                    </Grid>
                    <Grid item>
                        <img src={'images/biennale_canakkale_2.jpg'} className={classes.img}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}