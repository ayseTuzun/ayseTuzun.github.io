import {Avatar, Grid, Link, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {memo} from "react";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        minHeight: '540px',
        minWidth: '860px',
        //backgroundColor: 'red',
    },
    text: {
        textAlign: 'right',
        fontFamily: 'Source Sans Pro',
        fontSize: '24px',
        color: '#301A1A',
        marginRight: '60px'
    },
    textBold: {
        fontWeight: 'bold',
        color: '#301A1A',
    },
    avatar: {
        height: '22vw',
        width: '22vw'
    }
})

export function Contact() {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Grid container
              item
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.root}>
            <Grid item className={classes.text}>
                <p>
                    {t("contact_line_1")}
                </p>
                <p>
                    <Link href="mailto:tuzun.ayse@gmail.com" target="_blank" rel="noreferrer" className={classes.textBold}>tuzun.ayse@gmail.com</Link>
                </p>
                <p>
                    <Link href="https://www.linkedin.com/in/ayse-tuzun/" target="_blank" rel="noreferrer" className={classes.textBold}>https://www.linkedin.com/in/ayse-tuzun/</Link>
                </p>
            </Grid>
            <Grid item>
                <Avatar src="images/avatar.jpg" className={classes.avatar}/>
            </Grid>
        </Grid>
    )
}

export const MemoizedContact = memo(Contact)