import {Grid, makeStyles} from "@material-ui/core";
import {memo} from "react";


const useStyles = makeStyles({
    root: {

        //backgroundColor: 'red',
    },
    mainTitle: {
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        color: '#301A1A',
    },
    title: {
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#301A1A',
    },
    subtitleTime: {
        fontFamily: 'Source Sans Pro',
        fontSize: '20px',
        color: '#301A1A',
    },
    subtitleContent: {
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#301A1A',
    },
    subtitleNotes: {
        fontFamily: 'Source Sans Pro',
        fontSize: '18px',
        fontStyle: 'italic',
        color: '#301A1A',
    },
    description: {
        fontFamily: 'Source Sans Pro',
        fontSize: '18px',
        color: '#301A1A',
    }
})

export function ResumeEntry(props) {
    const classes = useStyles();
    return (
        <Grid container item direction="column" className={classes.root}>
            <Grid item className={classes.mainTitle}>
                {props.mainTitle}
            </Grid>
            <Grid item className={classes.title}>
                {props.title}
            </Grid>
            {props.subtitles.map((subtitle) => (
                <Grid key={subtitle[0]} item>
                    <div><span className={classes.subtitleTime}>{subtitle[0]}</span> <span className={classes.subtitleContent}>{subtitle[1]}</span> <span className={classes.subtitleNotes}>{subtitle[2]}</span></div>
                </Grid>
            ))}
            {props.descriptions.map((description) => (
                <Grid key={description} item className={classes.description}>
                    {"_".concat(description)}
                </Grid>
            ))}
        </Grid>
    )
}

export const MemoizedResumeEntry = memo(ResumeEntry)