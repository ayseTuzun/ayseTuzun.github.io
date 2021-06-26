import {Grid, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {Events} from "react-scroll";

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
    const verticalSpacing = 3;
    const horizontalSpacing = 4;

    useEffect(() => {
        document.body.style.overflowY = 'scroll'
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [])

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item spacing={horizontalSpacing}>
                <Grid container item direction="column" xs={7}>
                    <Grid item className={classes.title}>
                        {t("biennale_canakkale_title_1")}
                    </Grid>
                    <Grid item className={classes.title}>
                        {t("biennale_canakkale_title_2")}
                    </Grid>
                    <Grid item className={classes.text1}>
                        {t("biennale_canakkale_p_1")}
                    </Grid>
                </Grid>
                <Grid container item direction="column" xs={5} justify="space-evenly">
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