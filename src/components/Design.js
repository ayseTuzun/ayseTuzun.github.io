import {GridList, GridListTile, GridListTileBar, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {memo} from "react";


const useStyles = makeStyles({
    root: {
        height: '100%',
        background: 'rgba(0, 0, 0, 0.0)',
        transition: '0.3s',
        '&:hover': {
            background: 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
        },
        alignItems: 'stretch',

    },
    titlePosition: {
        textAlign: 'center',
    },
    titleStyle: {
        //fontSize: '36px',
        fontSize: 'min(max(4vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        lineHeight: 'normal',
        whiteSpace: 'normal',
        height: '100%',
        color: 'rgba(0, 0, 0, 0.0)',
        '&:hover': {
            color: 'white',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleWrap: {
        margin: 0
    },
})

export function Design(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <GridList cols={3} spacing={45}>
            {props.tiles.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1} style={{height: '32vh'}}>
                    <img src={tile.img} alt={tile.title}/>
                    <Link to={tile.link}>
                        <GridListTileBar className={classes.root} classes={{titlePositionBottom: classes.titlePosition, title: classes.titleStyle, titleWrap: classes.titleWrap}} title={t(tile.title)}/>
                    </Link>
                </GridListTile>
            ))}
        </GridList>
    )
}

export const MemoizedDesign = memo(Design)
