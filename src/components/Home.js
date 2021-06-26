import {Grid, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {memo} from "react";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '95vh',
        minHeight: '540px'
        //backgroundColor: 'red',
    },
    textAbove: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        fontSize: '26px',
        color: '#301A1A',
        //backgroundColor: 'green',
        maxWidth: '900px',
    },
    textUnder: {
        textAlign: 'right',
        fontFamily: 'Coolvetica',
        fontSize: '42px',
        color: '#301A1A',
        marginBottom: '4vh'
    },
    textGroup: {
        position: 'fixed',
        bottom: 15,
        right: 15,
        width: '100%'
    }
})


export function Home() {
    const classes = useStyles();
    const { t } = useTranslation();
    return(
        <Grid container item direction="column" justify="flex-end" alignItems="stretch" className={classes.root}>
            <Grid item className={classes.textAbove}>
                <p>
                    {t("home_p_1")}
                </p>
                <p>
                    {t("home_p_2")}
                </p>
                <p>
                    {t("home_p_3")}
                </p>
            </Grid>
            <Grid item className={classes.textUnder}>
                {t("home_subtitle")}
            </Grid>
        </Grid>
    )
}

export const MemoizedHome = memo(Home)

