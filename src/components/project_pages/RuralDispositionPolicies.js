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

export default function RuralDispositionPolicies() {
    const classes = useStyles();
    const { t } = useTranslation();
    const verticalSpacing = 3;

    return (
        <Grid container item direction="column" className={classes.root} spacing={verticalSpacing}>
            <Grid container item direction="column">
                <Grid item className={classes.title}>
                    {t("rural_disposition_policies_title")}
                </Grid>
                <Grid item className={classes.text1}>
                    {t("rural_disposition_policies_p_1")}
                </Grid>
            </Grid>
            <Grid item className={classes.text1}>
                {t("rural_disposition_policies_p_2")}
            </Grid>
            <Grid item className={classes.text1}>
                {t("rural_disposition_policies_p_3")}
            </Grid>
            <Grid item className={classes.text1}>
                {t("rural_disposition_policies_p_4")}
            </Grid>
            <Grid item className={classes.text1}>
                <span>{t("rural_disposition_policies_p_5")}<br/></span>
                <span>{t("rural_disposition_policies_p_6")}<br/></span>
                <span>{t("rural_disposition_policies_p_7")}</span>
            </Grid>
            <Grid item className={classes.text1}>
                <span>{t("rural_disposition_policies_p_8")}<br/></span>
                <span>{t("rural_disposition_policies_p_9")}</span>
            </Grid>
        </Grid>
    )
}