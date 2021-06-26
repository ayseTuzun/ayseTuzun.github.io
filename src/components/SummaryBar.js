import {ListItemText, makeStyles} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles({
    drawerPaper: {
        width: '20%',
        minWidth: '300px',
        borderColor: "#301A1A",
        paddingTop: '5vh',
        paddingBottom: '5vh',
        paddingLeft: 48,
        height: 'auto',
        bottom: 0,
        top: 0,
        overflow: 'hidden',
        backgroundColor: '#301A1A',
    },
    drawer: {
        flexBasis: '20%',
        minWidth: '300px'
    },
    homeListItemTextPrimary: {
        fontSize: 'min(max(10vh, 4rem), 6.5rem);',
        color: 'white',
        fontFamily: 'Coolvetica',
    },
    homeListItemText: {
        marginTop: '1vh',
    },
    homeListItemTextFirstLine: {
        lineHeight: 'min(max(6vh, 2.5rem), 50rem);',
        marginBottom: 'min(max(6vh, 2.5rem), 50rem);'
    },
    homeListItemTextSecondLine: {
        lineHeight: 'min(max(6vh, 2.5rem), 50rem);',
    },
    homeListItemButton: {
        width: 'fit-content',
        height: 'fit-content',
        paddingBlock: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
    listItemButton: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        borderRadius: '28px',
    },
    listItemCV: {
        width: 'fit-content',
        marginLeft: 13,
        marginTop: 'min(max(6vh, 2.3rem), 6.5rem);',
        paddingTop: 0,
        paddingBottom: 0
    },
    listItem: {
        width: 'fit-content',
        marginLeft: 13,
        paddingTop: 0,
        paddingBottom: 0
    },
    listItemDesign: {
        width: 'fit-content',
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 13,
        marginTop: 'min(max(3vh, 1.1rem), 6.5rem);'
    },
    listItemResearch: {
        width: 'fit-content',
        marginLeft: 13,
        paddingTop: 0,
        paddingBottom: 0
    },
    listItemCollectives: {
        width: 'fit-content',
        marginLeft: 13,
        marginBottom: 'min(max(3vh, 1.1rem), 6.5rem);',
        paddingTop: 0,
        paddingBottom: 0
    },
    summaryListItemTextPrimary: {
        fontSize: 'min(max(3vh, 1.2rem), 6.5rem);',
        fontFamily: 'Source Sans Pro',
        color: "#301A1A",
    },
    summaryListItemButton: {
        backgroundColor: "white",
        borderRadius: '28px',
        width: 'fit-content',
        height: 'fit-content',
        paddingTop: 0,
        paddingBottom: 0,
        '&:hover': {
            backgroundColor: '#663737'
        },
        marginLeft: 13
    },
})

export default function SummaryBar(props) {
    const classes = useStyles(props);
    const { t } = useTranslation();

    let history = useHistory();

    const goBack = () => {
        history.goBack()
    }


    return (
        <Drawer
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
            className={classes.drawer}
        >
            <List disablePadding>
                <ListItem dense disableRipple key={'Ayşe Tüzün'} classes={{button:classes.homeListItemButton}}>
                    <ListItemText primary={<div>
                        <div className={classes.homeListItemTextFirstLine}>Ayşe</div>
                        <div className={classes.homeListItemTextSecondLine}>Tüzün</div>
                    </div>} className={classes.homeListItemText} classes={{primary:classes.homeListItemTextPrimary}}/>
                </ListItem>
            </List>
            <List style={{ marginTop: `auto` }}>
                <ListItem button onClick={goBack} key={t("summary_bar_more")} classes={{button:classes.summaryListItemButton}}>
                    <ListItemText primary={t("summary_bar_more")} classes={{primary:classes.summaryListItemTextPrimary}}/>
                </ListItem>
            </List>
        </Drawer>
    );
}