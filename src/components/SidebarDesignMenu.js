import {Button, Grid, GridList, GridListTile, GridListTileBar, makeStyles} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import {Link, useHistory, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles({
    drawerPaper: {
        width: '20%',
        minWidth: '300px',
        border: 0,
        marginTop: '3vh',
        marginBottom: '2vh',
        paddingLeft: 20,
        paddingRight: 20,
        height: '95vh',
        maxHeight: '95vh',
        //backgroundColor: 'blue'
    },
    drawer: {
        flexBasis: '20%',
        minWidth: '300px',
        height: '90vh',
        maxHeight: '90vh',
    },
    root: {
        height: '100%',
        //background: 'rgba(0, 0, 0, 0.0)',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: '0.3s',
        '&:hover': {
            //background: 'rgba(0, 0, 0, 0.5)',
            background: 'rgba(0, 0, 0, 0.0)',
            cursor: 'pointer'
        },
        alignItems: 'stretch'
    },
    rootSelected: {
        height: '100%',
        background: 'rgba(0, 0, 0, 0.0)',
        //background: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'stretch',
    },
    titlePosition: {
        textAlign: 'center',
    },
    titleStyle: {
        //fontSize: '36px',
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        lineHeight: 'normal',
        whiteSpace: 'normal',
        height: '100%',
        //color: 'rgba(0, 0, 0, 0.0)',
        color: 'white',
        '&:hover': {
            //color: 'white',
            color: 'rgba(0, 0, 0, 0.0)',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleStyleSelected: {
        //fontSize: '36px',
        fontSize: 'min(max(4vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        lineHeight: 'normal',
        whiteSpace: 'normal',
        height: '100%',
        //color: 'white',
        color: 'rgba(0, 0, 0, 0.0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    titleWrap: {
        margin: 0
    },
    gridListContainer: {
        overflowY: 'auto',
        overflowX: 'hidden',
        maxWidth: '100%',
        minWidth: '100%',
        '&::-webkit-scrollbar': {
            width: '0',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.5)',
            //outline: '1px solid slategrey',
            visibility: 'hidden',
            borderRadius: '5px',
        },
        //overflow: 'auto',
        // For firefox
        scrollbarWidth: 'none',
    },
    gridContainer: {
        height: '100%',
    },
    title: {
        verticalAlign: 'middle',
        fontFamily: 'Source Sans Pro',
        fontSize: 'min(max(3.5vh, 0rem), 6.5rem);',
        fontWeight: 'bold',
        color: '#301A1A',
        //backgroundColor: 'red',
    },
    backButton: {
        fontFamily: 'Source Sans Pro',
        color: '#301A1A',
        fontSize: 'min(max(3vh, 0rem), 6.5rem);',
        paddingTop: 0,
        paddingBottom: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    backButtonLabel: {
        textTransform: 'capitalize',
    },
    backButtonIconSize: {
        width: '3vh',
        height: '3vh'
    },
    backButtonIcon: {
        margin: 0
    },
    gridListTileFirst: {
        marginTop: 0
    },
    gridListTile: {
        marginTop: 20
    }
})

export default function SidebarDesignMenu(props) {
    const classes = useStyles(props);
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState(location.pathname);
    const myRef = useRef(null);
    const yourRef = useRef(null);
    const { t } = useTranslation();

    let history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    const onClick = (item) => {
        setSelectedItem(item);
    }


    useEffect(() => {
        myRef.current.scrollIntoView();
    }, [])

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
            className={classes.drawer}
        >
            <Grid container direction="column" alignItems="stretch" justify="space-between" className={classes.gridContainer}>
                <Grid item container direction="column" alignItems="flex-start" justify="center" className={classes.title} xs>
                    {props.title}
                </Grid>
                <Grid item container xs={10} className={classes.gridListContainer}>
                    <GridList cols={1} spacing={0}>
                        {props.tiles.map((tile, index) => (
                            <GridListTile ref={selectedItem === tile.link ? myRef : yourRef} key={tile.img} cols={tile.cols || 1} className={index === 0 ? classes.gridListTileFirst : classes.gridListTile} style={{height: '20vh'}}>
                                <img src={tile.img} alt={tile.title} />
                                <Link to={tile.link} replace>
                                    <GridListTileBar onClick={() => onClick(tile.link)} className={selectedItem === tile.link ? classes.rootSelected : classes.root} classes={{titlePositionBottom: classes.titlePosition, title: selectedItem === tile.link ? classes.titleStyleSelected : classes.titleStyle, titleWrap: classes.titleWrap}} title={t(tile.title)}/>
                                </Link>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item container xs>
                    <Button
                        variant="text"
                        className={classes.backButton}
                        startIcon={<ArrowBackIosIcon className={classes.backButtonIconSize}/>}
                        onClick={goBack}
                        classes={{label: classes.backButtonLabel, startIcon: classes.backButtonIcon}}
                        disableRipple
                    >
                        {t("sidebar_design_menu_back")}
                    </Button>
                </Grid>
            </Grid>
        </Drawer>
    );
}